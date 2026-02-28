import { useRef, useEffect, useState } from 'react'

const CANVAS_WIDTH = 800
const CANVAS_HEIGHT = 600

function DodgeRocksGame() {
  const canvasRef = useRef(null)
  const [gameKey, setGameKey] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const scoreIntervalRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const player = { x: 375, y: 550, width: 50, height: 50, speed: 5 }
    const rocks = []
    const keys = {}

    let gameRunning = true
    let animationFrameId
    let spawnIntervalId

    function handleKeyDown(e) {
      keys[e.key] = true
    }

    function handleKeyUp(e) {
      keys[e.key] = false
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    function spawnRock() {
      rocks.push({
        x: Math.random() * (CANVAS_WIDTH - 50),
        y: 0,
        width: 50,
        height: 50,
        speed: 2 + Math.random() * 3,
      })
    }

    function update() {
      if (keys['ArrowLeft'] || keys['a']) player.x -= player.speed
      if (keys['ArrowRight'] || keys['d']) player.x += player.speed

      player.x = Math.max(0, Math.min(CANVAS_WIDTH - player.width, player.x))

      rocks.forEach((rock) => {
        rock.y += rock.speed
      })

      for (const rock of rocks) {
        const collides =
          player.x < rock.x + rock.width &&
          player.x + player.width > rock.x &&
          player.y < rock.y + rock.height &&
          player.y + player.height > rock.y

        if (collides) {
          gameRunning = false
          setIsGameOver(true)
          if (spawnIntervalId) clearInterval(spawnIntervalId)
          if (animationFrameId) cancelAnimationFrame(animationFrameId)
          if (scoreIntervalRef.current) clearInterval(scoreIntervalRef.current)
          break
        }
      }

      for (let i = rocks.length - 1; i >= 0; i--) {
        if (rocks[i].y > CANVAS_HEIGHT) {
          rocks.splice(i, 1)
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
      ctx.fillStyle = '#0f172a'
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

      ctx.fillStyle = 'rgba(148, 163, 184, 0.5)'
      for (let i = 0; i < 45; i++) {
        const x = (i * 37) % CANVAS_WIDTH
        const y = (i * 83) % CANVAS_HEIGHT
        const size = 1 + (i % 3)
        ctx.fillRect(x, y, size, size)
      }

      ctx.fillStyle = '#3b82f6'
      ctx.shadowColor = 'rgba(59, 130, 246, 0.6)'
      ctx.shadowBlur = 16
      ctx.fillRect(player.x, player.y, player.width, player.height)

      ctx.shadowBlur = 0
      ctx.fillStyle = '#f97316'
      rocks.forEach((rock) => {
        const cx = rock.x + rock.width / 2
        const cy = rock.y + rock.height / 2
        const radius = rock.width / 2
        const grd = ctx.createRadialGradient(
          cx - radius / 3,
          cy - radius / 3,
          radius / 4,
          cx,
          cy,
          radius
        )
        grd.addColorStop(0, '#fed7aa')
        grd.addColorStop(0.4, '#fb923c')
        grd.addColorStop(1, '#7c2d12')
        ctx.beginPath()
        ctx.fillStyle = grd
        ctx.arc(cx, cy, radius, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    function gameLoop() {
      if (!gameRunning) return
      update()
      draw()
      animationFrameId = requestAnimationFrame(gameLoop)
    }

    // Score = seconds survived
    setScore(0)
    scoreIntervalRef.current = setInterval(() => {
      if (gameRunning) setScore((s) => s + 1)
    }, 1000)

    spawnIntervalId = setInterval(spawnRock, 1000)
    gameLoop()

    return () => {
      gameRunning = false
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      if (spawnIntervalId) clearInterval(spawnIntervalId)
      if (scoreIntervalRef.current) clearInterval(scoreIntervalRef.current)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [gameKey])

  const handleRestart = () => {
    setIsGameOver(false)
    setScore(0)
    setGameKey((k) => k + 1)
  }

  return (
    <div className="game-shell">
      <div className="game-header">
        <div>
          <div className="game-title">Dodge Falling Rocks</div>
          <div className="game-subtitle">Stay alive as long as you can.</div>
        </div>
        <div className="game-header-right">
          <div className="score-display">Score: {score}s</div>
          <div className={`status-pill ${isGameOver ? 'game-over' : ''}`}>
            {isGameOver ? 'Game over' : 'Live run'}
          </div>
        </div>
      </div>

      <div className="game-row">
        <div className="game-meta">
          <div className="meta-block">
            <div className="meta-label">Controls</div>
            <div className="meta-keys">
              <span className="key-chip">←</span>
              <span className="key-chip">→</span>
              <span className="key-chip">A</span>
              <span className="key-chip">D</span>
            </div>
          </div>
          <div className="meta-block">
            <div className="meta-label">Goal</div>
            <div>Slide left and right to dodge the glowing rocks.</div>
            <div style={{ marginTop: 6 }}>One hit ends the run.</div>
            <button type="button" className="reset-button" onClick={handleRestart}>
              <span>↻</span>
              <span>Restart run</span>
            </button>
          </div>
        </div>

        <div className="canvas-wrapper">
          <canvas
            key={gameKey}
            ref={canvasRef}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
            aria-label="Dodge rocks game canvas"
          />

          {isGameOver && (
            <div className="game-overlay">
              <div className="overlay-card">
                <div className="overlay-title">You were hit by a rock.</div>
                <div className="overlay-subtitle">
                  You survived {score} seconds. Tap restart to try again.
                </div>
                <button type="button" className="overlay-button" onClick={handleRestart}>
                  Play again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DodgeRocksGame
