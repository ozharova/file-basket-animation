import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"

const assets = "/assets"
const duration = 8
const standard = [0.5, 0, 0.5, 1] as [number, number, number, number]
const enter = [0.22, 1, 0.36, 1] as [number, number, number, number]
const bounce = [0.34, 1.32, 0.64, 1] as [number, number, number, number]
const sway = [0.65, 0, 0.35, 1] as [number, number, number, number]

const image = (name: string) => `${assets}/${name}`

const aimData = [
  [
    "1d07b.svg",
    221.27,
    953.99,
    12,
    9.1,
    37.2,
    -22,
    0.0273,
    0.0348,
    0.8063,
    0.8213,
    0.825,
  ],
  [
    "d23e8.svg",
    248.75,
    816.84,
    11.6,
    -1.8,
    94.3,
    -56.1,
    0.0357,
    0.0432,
    0.8096,
    0.8246,
    0.8284,
  ],
  [
    "0dbb2.svg",
    276.22,
    702.28,
    11.2,
    -12.7,
    151.3,
    -90.3,
    0.0444,
    0.0519,
    0.813,
    0.828,
    0.8318,
  ],
  [
    "2efc6.svg",
    303.69,
    610.26,
    10.8,
    -23.6,
    208.3,
    -124.6,
    0.0529,
    0.0604,
    0.8164,
    0.8314,
    0.8351,
  ],
  [
    "edcfa.svg",
    331.16,
    540.75,
    10.4,
    -34.5,
    265.2,
    -158.9,
    0.0614,
    0.0689,
    0.8198,
    0.8348,
    0.8385,
  ],
  [
    "3d11c.svg",
    358.64,
    493.74,
    10,
    -45.5,
    322.2,
    -193.1,
    0.0699,
    0.0774,
    0.8231,
    0.8381,
    0.8419,
  ],
  [
    "5ea55.svg",
    386.11,
    469.22,
    9.6,
    -56.4,
    379.1,
    -227.4,
    0.0784,
    0.0859,
    0.8265,
    0.8415,
    0.8453,
  ],
  [
    "0db70.svg",
    413.58,
    467.22,
    9.2,
    -67.3,
    436.1,
    -261.7,
    0.0869,
    0.0944,
    0.8299,
    0.8449,
    0.8486,
  ],
  [
    "9fff1.svg",
    441.05,
    487.68,
    8.8,
    -78.2,
    493,
    -295.9,
    0.0955,
    0.103,
    0.8333,
    0.8483,
    0.852,
  ],
  [
    "ae4eb.svg",
    468.53,
    530.58,
    8.4,
    -89.1,
    550.1,
    -330.1,
    0.104,
    0.1115,
    0.8366,
    0.8516,
    0.8554,
  ],
] as const

function Aim({ data, index }: { data: typeof aimData[number] index: number }) {
  const [
    asset,
    left,
    top,
    size,
    x,
    yDown,
    yUp,
    fadeStart,
    fadeEnd,
    hideEnd,
    fadeIn,
    scaleIn,
  ] = data
  const xOpposite = -x

  return (
    <motion.div
      aria-hidden="true"
      className="aim absolute"
      data-node-id={`1:${690 + index}`}
      initial={{ opacity: 0.6, scaleX: 1, scaleY: 1, x: 0, y: 0 }}
      animate={{
        opacity: [0.6, 0.6, 0, 0, 0.6, 0.6],
        scaleX: [1, 1, 0.4, 0.4, 1, 1],
        scaleY: [1, 1, 0.4, 0.4, 1, 1],
        x: [0, 0, x, x, xOpposite, xOpposite, 0, 0],
        y: [0, 0, yDown, yDown, yUp, yUp, 0, 0],
      }}
      transition={{
        opacity: {
          duration,
          times: [0, fadeStart, fadeEnd, hideEnd, fadeIn, 1],
          ease: [standard, "linear", standard, enter, standard],
          repeat: Infinity,
        },
        scaleX: {
          duration,
          times: [0, 0.5074, 0.5075, hideEnd, scaleIn, 1],
          ease: [standard, "linear", standard, bounce, standard],
          repeat: Infinity,
        },
        scaleY: {
          duration,
          times: [0, 0.5074, 0.5075, hideEnd, scaleIn, 1],
          ease: [standard, "linear", standard, bounce, standard],
          repeat: Infinity,
        },
        x: {
          duration,
          times: [0, 0.5074, 0.5075, 0.8563, 0.9125, 0.9313, 0.9813, 1],
          ease: ["linear", "linear", standard, sway, standard, sway, standard],
          repeat: Infinity,
        },
        y: {
          duration,
          times: [0, 0.5074, 0.5075, 0.8563, 0.9125, 0.9313, 0.9813, 1],
          ease: ["linear", "linear", standard, sway, standard, sway, standard],
          repeat: Infinity,
        },
      }}
      style={{ left, top, width: size, height: size }}
    >
      <img alt="" src={image(asset)} />
    </motion.div>
  )
}

function Receipt({ compact = false }: { compact?: boolean }) {
  const scale = compact ? 0.4 : 1
  return (
    <div
      className={`receipt ${compact ? "receipt-compact" : ""}`}
      style={{ width: 120 * scale, height: 150 * scale }}
      aria-label="PDF document"
    >
      <div className="receipt-sheet">
        <div className="receipt-brand">
          <span>PDF</span>
          <b>Expense receipt</b>
        </div>
        <div className="receipt-divider" />
        <div className="receipt-copy">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="receipt-file-details">
          <strong>receipt_0248.pdf</strong>
          <span>2.4 MB</span>
        </div>
        <div className="receipt-pdf-badge">PDF</div>
      </div>
    </div>
  )
}

const rimTransition = {
  y: {
    duration,
    times: [0, 0.1125, 0.1188, 0.1438, 1],
    ease: [standard, enter, bounce, standard],
    repeat: Infinity,
  },
}

const pointerPosition = {
  x: [-50, -50, 10, 10, -330, -330, 0, 0, -30, -30, -70, -70, -50, -50],
  y: [60, 60, -20, -20, 380, 380, 0, 0, 40, 40, 72, 72, 60, 60],
}

const pointerTimes = [
  0, 0.0188, 0.0563, 0.4938, 0.5813, 0.6938, 0.7813, 0.7938, 0.8313, 0.8563,
  0.9125, 0.9313, 0.9813, 1,
]

const pointerTransition = {
  x: {
    duration,
    times: pointerTimes,
    ease: [
      standard,
      enter,
      standard,
      [0.5, 0, 0.8, 0.5],
      standard,
      [0.3, 0, 0.15, 1],
      standard,
      sway,
      standard,
      sway,
      standard,
      sway,
      standard,
    ],
    repeat: Infinity,
  },
  y: {
    duration,
    times: pointerTimes,
    ease: [
      standard,
      enter,
      standard,
      [0.3, 0, 0.8, 0.5],
      standard,
      [0.6, 0, 0.25, 1],
      standard,
      sway,
      standard,
      sway,
      standard,
      sway,
      standard,
    ],
    repeat: Infinity,
  },
}

type PhysicsPoint = { x: number; y: number }

const gravity = 1250
const receiptRadius = 24
const rimY = 640
const rimPoints = [
  { x: 425, y: rimY },
  { x: 655, y: rimY },
]

function advanceReceiptPhysics(
  position: PhysicsPoint,
  velocity: PhysicsPoint,
  delta: number,
) {
  const previous = { ...position }
  const nextVelocity = { x: velocity.x, y: velocity.y + gravity * delta }
  const horizontalDrag = Math.pow(0.992, delta * 60)
  const verticalDrag = Math.pow(0.997, delta * 60)
  nextVelocity.x *= horizontalDrag
  nextVelocity.y *= verticalDrag
  const next = {
    x: position.x + nextVelocity.x * delta,
    y: position.y + nextVelocity.y * delta,
  }

  if (next.x < 60 + receiptRadius) {
    next.x = 60 + receiptRadius
    nextVelocity.x = Math.abs(nextVelocity.x) * 0.68
  } else if (next.x > 1020 - receiptRadius) {
    next.x = 1020 - receiptRadius
    nextVelocity.x = -Math.abs(nextVelocity.x) * 0.68
  }

  if (next.y < 205 + receiptRadius) {
    next.y = 205 + receiptRadius
    nextVelocity.y = Math.abs(nextVelocity.y) * 0.62
  }

  if (next.y > 1245 - receiptRadius) {
    next.y = 1245 - receiptRadius
    nextVelocity.y = -Math.abs(nextVelocity.y) * 0.45
    nextVelocity.x *= 0.76
  }

  for (const railX of [437, 637]) {
    if (next.y < 470 || next.y > 590) continue
    const crossedFromLeft =
      previous.x <= railX - receiptRadius && next.x > railX - receiptRadius
    const crossedFromRight =
      previous.x >= railX + receiptRadius && next.x < railX + receiptRadius
    if (crossedFromLeft) {
      next.x = railX - receiptRadius
      nextVelocity.x = -Math.abs(nextVelocity.x) * 0.64
    } else if (crossedFromRight) {
      next.x = railX + receiptRadius
      nextVelocity.x = Math.abs(nextVelocity.x) * 0.64
    }
  }

  const outsideGoalOpening = next.x < 470 || next.x > 620
  if (outsideGoalOpening) {
    for (const railY of [497, 617]) {
      const crossedFromAbove =
        previous.y <= railY - receiptRadius && next.y > railY - receiptRadius
      const crossedFromBelow =
        previous.y >= railY + receiptRadius && next.y < railY + receiptRadius
      if (next.x < 407 || next.x > 667) continue
      if (crossedFromAbove) {
        next.y = railY - receiptRadius
        nextVelocity.y = -Math.abs(nextVelocity.y) * 0.64
      } else if (crossedFromBelow) {
        next.y = railY + receiptRadius
        nextVelocity.y = Math.abs(nextVelocity.y) * 0.64
      }
    }
  }

  for (const rim of rimPoints) {
    const deltaX = next.x - rim.x
    const deltaY = next.y - rim.y
    const distance = Math.hypot(deltaX, deltaY)
    const collisionDistance = receiptRadius + 11
    if (distance === 0 || distance >= collisionDistance) continue
    const normalX = deltaX / distance
    const normalY = deltaY / distance
    const approach = nextVelocity.x * normalX + nextVelocity.y * normalY
    if (approach >= 0) continue
    next.x = rim.x + normalX * collisionDistance
    next.y = rim.y + normalY * collisionDistance
    nextVelocity.x -= 1.68 * approach * normalX
    nextVelocity.y -= 1.68 * approach * normalY
  }

  const scored =
    previous.y < rimY &&
    next.y >= rimY &&
    next.x > rimPoints[0].x + 24 &&
    next.x < rimPoints[1].x - 24 &&
    nextVelocity.y > 0

  return { position: next, velocity: nextVelocity, scored }
}

function FinanceStage() {
  const stageRef = useRef<HTMLElement>(null)
  // Keep a stable manual-mode flag so Vite HMR can safely replace the earlier
  // drag-and-drop implementation without retaining an undefined binding.
  const manualMode = true
  const resetTimerRef = useRef<number | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const grabOffsetRef = useRef({ x: 0, y: 0 })
  const positionRef = useRef({ x: 210, y: 1050 })
  const flightRef = useRef({
    position: { x: 210, y: 1050 },
    velocity: { x: 0, y: 0 },
    startedAt: 0,
    lastFrameAt: 0,
  })
  const startPosition = { x: 210, y: 1050 }
  const [receiptPosition, setReceiptPosition] = useState(startPosition)
  const [receiptRotation, setReceiptRotation] = useState(6)
  const [gamePhase, setGamePhase] = useState<
    "ready" | "aiming" | "flying" | "hit" | "miss"
  >("ready")

  const toStagePoint = (clientX: number, clientY: number) => {
    const bounds = stageRef.current?.getBoundingClientRect()
    if (!bounds) return startPosition
    return {
      x: Math.max(60, Math.min(1020, ((clientX - bounds.left) / bounds.width) * 1080)),
      y: Math.max(75, Math.min(1205, ((clientY - bounds.top) / bounds.height) * 1280)),
    }
  }

  const updatePulledPosition = (clientX: number, clientY: number) => {
    const point = toStagePoint(clientX, clientY)
    const grabbedPoint = {
      x: point.x + grabOffsetRef.current.x,
      y: point.y + grabOffsetRef.current.y,
    }
    const deltaX = grabbedPoint.x - startPosition.x
    const deltaY = grabbedPoint.y - startPosition.y
    const distance = Math.hypot(deltaX, deltaY)
    const elasticDistance =
      distance <= 135 ? distance : Math.min(180, 135 + (distance - 135) * 0.32)
    const ratio = distance === 0 ? 1 : elasticDistance / distance
    const constrained = {
      x: startPosition.x + deltaX * ratio,
      y: startPosition.y + deltaY * ratio,
    }
    positionRef.current = constrained
    setReceiptPosition(constrained)
    setReceiptRotation(6 + deltaX * 0.05)
  }

  const beginDrag = (clientX: number, clientY: number) => {
    if (gamePhase !== "ready") return
    if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current)
    const point = toStagePoint(clientX, clientY)
    grabOffsetRef.current = {
      x: positionRef.current.x - point.x,
      y: positionRef.current.y - point.y,
    }
    setGamePhase("aiming")
  }

  useEffect(() => {
    if (gamePhase !== "aiming") return

    const move = (event: PointerEvent) => {
      updatePulledPosition(event.clientX, event.clientY)
    }

    const end = () => {
      const origin = positionRef.current
      const pullX = startPosition.x - origin.x
      const pullY = startPosition.y - origin.y

      if (Math.hypot(pullX, pullY) < 28) {
        positionRef.current = startPosition
        setReceiptPosition(startPosition)
        setReceiptRotation(6)
        setGamePhase("ready")
        return
      }

      flightRef.current = {
        position: origin,
        velocity: { x: pullX * 3.5, y: pullY * 10.5 },
        startedAt: performance.now(),
        lastFrameAt: performance.now(),
      }
      setGamePhase("flying")
    }

    window.addEventListener("pointermove", move)
    window.addEventListener("pointerup", end, { once: true })
    return () => {
      window.removeEventListener("pointermove", move)
      window.removeEventListener("pointerup", end)
    }
  }, [gamePhase])

  useEffect(() => {
    if (gamePhase !== "flying") return

    const tick = (now: number) => {
      const flight = flightRef.current
      const elapsed = (now - flight.startedAt) / 1000
      const frameDelta = Math.min((now - flight.lastFrameAt) / 1000, 0.032)
      const steps = Math.max(1, Math.ceil(frameDelta / 0.012))
      const stepDelta = frameDelta / steps
      let result = {
        position: flight.position,
        velocity: flight.velocity,
        scored: false,
      }
      for (let step = 0; step < steps; step += 1) {
        result = advanceReceiptPhysics(result.position, result.velocity, stepDelta)
        if (result.scored) break
      }

      flight.position = result.position
      flight.velocity = result.velocity
      flight.lastFrameAt = now
      positionRef.current = result.position
      setReceiptPosition(result.position)
      const angularSpeed = Math.max(-420, Math.min(420, result.velocity.x * 0.55))
      setReceiptRotation((rotation) => rotation + frameDelta * angularSpeed)

      const missed =
        elapsed > 5 ||
        (Math.abs(result.velocity.x) < 35 &&
          Math.abs(result.velocity.y) < 55 &&
          result.position.y > 1120)

      if (result.scored) {
        flight.position = result.position
        flight.velocity = {
          x: result.velocity.x * 0.28,
          y: Math.max(300, result.velocity.y * 0.34),
        }
        flight.startedAt = now
        flight.lastFrameAt = now
        setGamePhase("hit")
        return
      }

      if (missed) {
        setGamePhase("miss")
        resetTimerRef.current = window.setTimeout(() => {
          positionRef.current = startPosition
          setReceiptPosition(startPosition)
          setReceiptRotation(6)
          setGamePhase("ready")
        }, 900)
        return
      }

      animationFrameRef.current = requestAnimationFrame(tick)
    }

    animationFrameRef.current = requestAnimationFrame(tick)
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [gamePhase])

  useEffect(() => {
    if (gamePhase !== "hit") return

    const tick = (now: number) => {
      const flight = flightRef.current
      const elapsed = (now - flight.startedAt) / 1000
      const frameDelta = Math.min((now - flight.lastFrameAt) / 1000, 0.032)
      flight.velocity.y += 1180 * frameDelta
      flight.velocity.x *= Math.pow(0.9, frameDelta * 60)
      flight.position = {
        x: flight.position.x + flight.velocity.x * frameDelta,
        y: flight.position.y + flight.velocity.y * frameDelta,
      }
      flight.lastFrameAt = now
      positionRef.current = flight.position
      setReceiptPosition(flight.position)
      setReceiptRotation((rotation) => rotation + flight.velocity.x * frameDelta * 0.22)

      if (elapsed > 0.52 || flight.position.y > 810) {
        positionRef.current = startPosition
        setReceiptPosition(startPosition)
        setReceiptRotation(6)
        resetTimerRef.current = window.setTimeout(() => setGamePhase("ready"), 70)
        return
      }

      animationFrameRef.current = requestAnimationFrame(tick)
    }

    animationFrameRef.current = requestAnimationFrame(tick)
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [gamePhase])

  useEffect(
    () => () => {
      if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current)
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    },
    [],
  )

  const previewVelocity = {
    x: (startPosition.x - receiptPosition.x) * 3.5,
    y: (startPosition.y - receiptPosition.y) * 10.5,
  }
  const previewSamples = [receiptPosition]
  let previewPosition = receiptPosition
  let simulatedVelocity = previewVelocity
  for (let index = 0; index < 52; index += 1) {
    const simulation = advanceReceiptPhysics(previewPosition, simulatedVelocity, 0.04)
    previewPosition = simulation.position
    simulatedVelocity = simulation.velocity
    previewSamples.push(previewPosition)
    if (simulation.scored) break
  }
  const trajectoryPoints = previewSamples.map((point) => `${point.x},${point.y}`).join(" ")

  return (
    <main
      className={`finance-stage ${manualMode ? "is-manual" : ""} phase-${gamePhase} result-${
        gamePhase === "hit" ? "hit" : gamePhase === "miss" ? "miss" : "idle"
      }`}
      data-node-id="1:676"
      ref={stageRef}
    >
      <header>
        <span className="eyebrow">SMART EXPENSES</span>
        <h1>Finance Bro</h1>
        <p>Drop a receipt. We’ll handle the math.</p>
      </header>

      <motion.div
        className="scoreboard"
        data-node-id="1:679"
        initial={{ scaleX: 1, scaleY: 1 }}
        animate={{ scaleX: [1, 1, 1.05, 1, 1], scaleY: [1, 1, 1.05, 1, 1] }}
        transition={{
          scaleX: {
            duration,
            times: [0, 0.1938, 0.2063, 0.2375, 1],
            ease: [standard, enter, bounce, standard],
            repeat: Infinity,
          },
          scaleY: {
            duration,
            times: [0, 0.1938, 0.2063, 0.2375, 1],
            ease: [standard, enter, bounce, standard],
            repeat: Infinity,
          },
        }}
      >
        <span>Logged</span>
        <div className="digits">
          <motion.span
            initial={{ y: 0 }}
            animate={{ y: [0, 0, -32, -32, 32, 0, 0] }}
            transition={{
              y: {
                duration,
                times: [0, 0.1938, 0.225, 0.5199, 0.52, 0.5563, 1],
                ease: [standard, enter, standard, "linear", enter, standard],
                repeat: Infinity,
              },
            }}
          >
            0
          </motion.span>
          <motion.span
            initial={{ y: 0 }}
            animate={{ y: [0, 0, -32, -32, -64, -64, 0, 0] }}
            transition={{
              y: {
                duration,
                times: [0, 0.1938, 0.225, 0.5188, 0.5563, 0.5687, 0.5688, 1],
                ease: [
                  standard,
                  bounce,
                  standard,
                  enter,
                  "linear",
                  "linear",
                  standard,
                ],
                repeat: Infinity,
              },
            }}
          >
            1
          </motion.span>
        </div>
      </motion.div>

      <motion.section
        className="dropzone"
        data-node-id="1:684"
        initial={{ background: "#f7f1e7", borderColor: "#5e646d" }}
        animate={{
          background: [
            "#f7f1e7",
            "#f7f1e7",
            "#eaf8ef",
            "#eaf8ef",
            "#f7f1e7",
            "#f7f1e7",
          ],
          borderColor: [
            "#5e646d",
            "#5e646d",
            "#35d477",
            "#35d477",
            "#5e646d",
            "#5e646d",
          ],
        }}
        transition={{
          background: {
            duration,
            times: [0, 0.0688, 0.0938, 0.1938, 0.2438, 1],
            ease: [standard, enter, standard, enter, standard],
            repeat: Infinity,
          },
          borderColor: {
            duration,
            times: [0, 0.0688, 0.0938, 0.1938, 0.2438, 1],
            ease: [standard, enter, standard, enter, standard],
            repeat: Infinity,
          },
        }}
      >
        <img className="upload-icon" alt="" src={image("7c844.svg")} />
        <h2>Drop receipt here</h2>
        <p>or snap a photo</p>
        <div className="target">
          <span className="target-label">
            <i />
            THROW HERE
          </span>
        </div>
      </motion.section>

      <motion.svg
        aria-hidden="true"
        className="flight-guide demo-hidden"
        viewBox="0 0 1080 1280"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: [0.7, 0.95, 0.22, 0.22, 0.7, 0.7] }}
        transition={{
          opacity: {
            duration,
            times: [0, 0.0563, 0.225, 0.5325, 0.7938, 1],
            ease: [standard, enter, standard, enter, standard],
            repeat: Infinity,
          },
        }}
      >
        <defs>
          <linearGradient id="flight-gradient" x1="245" y1="1035" x2="535" y2="620">
            <stop offset="0" stopColor="#35d477" stopOpacity="0.18" />
            <stop offset="0.54" stopColor="#35d477" stopOpacity="0.72" />
            <stop offset="1" stopColor="#72f6a8" />
          </linearGradient>
          <filter id="flight-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <marker
            id="flight-arrowhead"
            markerHeight="10"
            markerWidth="10"
            orient="auto"
            refX="8"
            refY="5"
          >
            <path d="M0 0L10 5L0 10L2.8 5Z" fill="#72f6a8" />
          </marker>
        </defs>
        <path
          className="flight-guide-glow"
          d="M245 1035C270 866 350 710 523 630"
          filter="url(#flight-glow)"
        />
        <path
          className="flight-guide-line"
          d="M245 1035C270 866 350 710 523 630"
          markerEnd="url(#flight-arrowhead)"
        />
        <g className="flight-chevron" transform="translate(280 886) rotate(-66)">
          <path d="M0 0L13 10L0 20" />
        </g>
        <g className="flight-chevron" transform="translate(337 756) rotate(-52)">
          <path d="M0 0L13 10L0 20" />
        </g>
        <g className="flight-chevron" transform="translate(420 676) rotate(-32)">
          <path d="M0 0L13 10L0 20" />
        </g>
      </motion.svg>

      <motion.div
        aria-hidden="true"
        className="throw-hint"
        initial={{ opacity: 0.72, y: 0 }}
        animate={{ opacity: [0.72, 1, 0.72], y: [0, -4, 0] }}
        transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
      >
        <span className="throw-hint-icon">
          <svg aria-hidden="true" viewBox="0 0 18 18">
            <path d="M4 14L14 4M7 4H14V11" />
          </svg>
        </span>
        Pull back &amp; release
      </motion.div>

      <svg
        aria-hidden="true"
        className={`live-flight-guide ${gamePhase === "aiming" ? "is-visible" : ""}`}
        viewBox="0 0 1080 1280"
      >
        <defs>
          <filter id="live-flight-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <marker
            id="live-arrowhead"
            markerHeight="11"
            markerWidth="11"
            orient="auto"
            refX="9"
            refY="5.5"
          >
            <path d="M0 0L11 5.5L0 11L3 5.5Z" fill="#72f6a8" />
          </marker>
        </defs>
        <line
          className="slingshot-tether"
          x1={startPosition.x}
          x2={receiptPosition.x}
          y1={startPosition.y}
          y2={receiptPosition.y}
        />
        <polyline
          className="live-flight-glow"
          filter="url(#live-flight-glow)"
          points={trajectoryPoints}
        />
        <polyline
          className="live-flight-line"
          markerEnd="url(#live-arrowhead)"
          points={trajectoryPoints}
        />
      </svg>

      <div
        aria-hidden="true"
        className={`launch-anchor phase-${gamePhase}`}
        style={{ left: startPosition.x, top: startPosition.y }}
      >
        <span />
      </div>

      <div
        className={`interactive-receipt phase-${gamePhase}`}
        onPointerDown={(event) => {
          event.preventDefault()
          beginDrag(event.clientX, event.clientY)
        }}
        style={{
          left: receiptPosition.x,
          top: receiptPosition.y,
          transform: `translate(-50%, -50%) rotate(${receiptRotation}deg) scale(${
            gamePhase === "aiming" ? 1.14 : 1.08
          })`,
        }}
      >
        <Receipt />
      </div>

      <div className={`throw-feedback ${gamePhase}`}>
        {gamePhase === "hit"
          ? "Nice shot — expense logged"
          : gamePhase === "miss"
            ? "Missed — pull back and adjust the arc"
            : gamePhase === "flying"
              ? "Receipt in the air…"
              : gamePhase === "aiming"
                ? "Release to shoot"
                : "Pull the receipt back, aim, and release"}
      </div>

      {aimData.map((data, index) => (
        <div className="demo-hidden" key={data[0]}>
          <Aim data={data} index={index} />
        </div>
      ))}

      <motion.div
        className="rim-mount"
        data-node-id="1:700"
        initial={{ y: 0 }}
        animate={{ y: [0, 0, 4, 0, 0] }}
        transition={rimTransition}
      />
      <motion.img
        className="rim rim-back"
        data-node-id="1:701"
        alt=""
        src={image("63afe.svg")}
        initial={{ y: 0 }}
        animate={{ y: [0, 0, 4, 0, 0] }}
        transition={rimTransition}
      />

      <motion.div
        className="flying-receipt demo-hidden"
        data-node-id="1:703"
        initial={{
          opacity: 1,
          rotate: 6,
          scaleX: 1.08,
          scaleY: 1.08,
          x: -50,
          y: 60,
        }}
        animate={{
          opacity: [1, 1, 0, 0, 1, 1],
          rotate: [6, 6, 470, 520, 600, 720, 720, 0, 0, 4, 4, 9, 9, 6, 6],
          scaleX: [1.08, 1.08, 0.8, 0.8, 0.9, 1, 1, 1.08, 1.08],
          scaleY: [1.08, 1.08, 0.8, 0.8, 0.9, 1, 1, 1.08, 1.08],
          x: [-50, -50, 250, 270, 290, 290, 0, 0, -30, -30, -70, -70, -50, -50],
          y: [
            60, 60, -590, -460, -505, -370, -250, -160, -160, 0, 0, 40, 40, 72,
            72, 60, 60,
          ],
        }}
        transition={{
          opacity: {
            duration,
            times: [0, 0.225, 0.2463, 0.5438, 0.5875, 1],
            ease: [standard, "linear", standard, enter, standard],
            repeat: Infinity,
          },
          rotate: {
            duration,
            times: [
              0, 0.0188, 0.1125, 0.1388, 0.175, 0.2438, 0.5324, 0.5325, 0.7938,
              0.8313, 0.8563, 0.9125, 0.9313, 0.9813, 1,
            ],
            ease: [
              standard,
              "linear",
              enter,
              "linear",
              enter,
              standard,
              "linear",
              standard,
              sway,
              standard,
              sway,
              standard,
              sway,
              standard,
            ],
            repeat: Infinity,
          },
          scaleX: {
            duration,
            times: [0, 0.0188, 0.1125, 0.5324, 0.5325, 0.5875, 0.7837, 0.8, 1],
            ease: [
              standard,
              "linear",
              standard,
              "linear",
              bounce,
              standard,
              bounce,
              standard,
            ],
            repeat: Infinity,
          },
          scaleY: {
            duration,
            times: [0, 0.0188, 0.1125, 0.5324, 0.5325, 0.5875, 0.7837, 0.8, 1],
            ease: [
              standard,
              "linear",
              standard,
              "linear",
              bounce,
              standard,
              bounce,
              standard,
            ],
            repeat: Infinity,
          },
          x: {
            duration,
            times: [
              0, 0.0188, 0.1125, 0.1388, 0.175, 0.5324, 0.5325, 0.7938, 0.8313,
              0.8563, 0.9125, 0.9313, 0.9813, 1,
            ],
            ease: [
              standard,
              "linear",
              "linear",
              "linear",
              standard,
              "linear",
              standard,
              sway,
              standard,
              sway,
              standard,
              sway,
              standard,
            ],
            repeat: Infinity,
          },
          y: {
            duration,
            times: [
              0, 0.0188, 0.0835, 0.1125, 0.1388, 0.175, 0.2125, 0.2438, 0.5324,
              0.5325, 0.7938, 0.8313, 0.8563, 0.9125, 0.9313, 0.9813, 1,
            ],
            ease: [
              standard,
              [0.333, 0.667, 0.667, 1],
              [0.333, 0, 0.667, 0.333],
              [0.333, 0.667, 0.667, 1],
              [0.333, 0, 0.667, 0.333],
              enter,
              [0.55, 0, 1, 0.45],
              standard,
              "linear",
              standard,
              sway,
              standard,
              sway,
              standard,
              sway,
              standard,
            ],
            repeat: Infinity,
          },
        }}
      >
        <Receipt />
      </motion.div>

      <motion.div
        className="net"
        data-node-id="1:711"
        initial={{ scaleX: 1, scaleY: 1, y: 0 }}
        animate={{
          scaleX: [1, 1, 0.88, 1.04, 1, 1],
          scaleY: [1, 1, 1.22, 0.94, 1, 1],
          y: [0, 0, 4, 0, 0, 16.5, -4.5, 0, 0],
        }}
        transition={{
          scaleX: {
            duration,
            times: [0, 0.1688, 0.1963, 0.2188, 0.2463, 1],
            ease: [standard, enter, sway, bounce, standard],
            repeat: Infinity,
          },
          scaleY: {
            duration,
            times: [0, 0.1688, 0.1963, 0.2188, 0.2463, 1],
            ease: [standard, enter, sway, bounce, standard],
            repeat: Infinity,
          },
          y: {
            duration,
            times: [
              0, 0.1125, 0.1188, 0.1438, 0.1688, 0.1963, 0.2188, 0.2463, 1,
            ],
            ease: [
              standard,
              enter,
              bounce,
              standard,
              enter,
              sway,
              bounce,
              standard,
            ],
            repeat: Infinity,
          },
        }}
      >
        <img alt="" src={image("93039.svg")} />
      </motion.div>
      <motion.img
        className="rim rim-front"
        data-node-id="1:713"
        alt=""
        src={image("4a61f.svg")}
        initial={{ y: 0 }}
        animate={{ y: [0, 0, 4, 0, 0] }}
        transition={rimTransition}
      />

      <motion.p
        className="plus-one"
        data-node-id="1:715"
        initial={{ opacity: 0, scaleX: 0.6, scaleY: 0.6, y: 0 }}
        animate={{
          opacity: [0, 0, 1, 1, 0, 0],
          scaleX: [0.6, 0.6, 1.1, 1, 1, 0.6, 0.6],
          scaleY: [0.6, 0.6, 1.1, 1, 1, 0.6, 0.6],
          y: [0, 0, -70, -70, 0, 0],
        }}
        transition={{
          opacity: {
            duration,
            times: [0, 0.1838, 0.1963, 0.2375, 0.275, 1],
            ease: [standard, enter, standard, enter, standard],
            repeat: Infinity,
          },
          scaleX: {
            duration,
            times: [0, 0.1838, 0.2063, 0.275, 0.5062, 0.5063, 1],
            ease: [standard, bounce, enter, "linear", "linear", standard],
            repeat: Infinity,
          },
          scaleY: {
            duration,
            times: [0, 0.1838, 0.2063, 0.275, 0.5062, 0.5063, 1],
            ease: [standard, bounce, enter, "linear", "linear", standard],
            repeat: Infinity,
          },
          y: {
            duration,
            times: [0, 0.1838, 0.275, 0.5062, 0.5063, 1],
            ease: [standard, enter, "linear", "linear", standard],
            repeat: Infinity,
          },
        }}
      >
        +$1
      </motion.p>

      <motion.section
        className="upload-row"
        data-node-id="1:716"
        initial={{ opacity: 0, y: 24 }}
        animate={{
          opacity: [0, 0, 1, 1, 0, 0],
          y: [24, 24, 0, 0, 16, 16, 24, 24],
        }}
        transition={{
          opacity: {
            duration,
            times: [0, 0.2188, 0.2563, 0.4938, 0.525, 1],
            ease: [standard, enter, standard, enter, standard],
            repeat: Infinity,
          },
          y: {
            duration,
            times: [0, 0.2188, 0.2625, 0.4938, 0.525, 0.5312, 0.5313, 1],
            ease: [
              standard,
              bounce,
              standard,
              enter,
              "linear",
              "linear",
              standard,
            ],
            repeat: Infinity,
          },
        }}
      >
        <div className="mini-receipt">
          <Receipt compact />
        </div>
        <h3>coffee_receipt.pdf</h3>
        <p className="file-size">2.4 MB</p>
        <motion.p
          className="status scanning"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 1, 0, 0, 1, 1] }}
          transition={{
            opacity: {
              duration,
              times: [0, 0.2963, 0.3113, 0.5324, 0.5325, 1],
              ease: [standard, enter, standard, "linear", standard],
              repeat: Infinity,
            },
          }}
        >
          Scanning…
        </motion.p>
        <motion.p
          className="status logged"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
          transition={{
            opacity: {
              duration,
              times: [0, 0.3013, 0.3188, 0.5324, 0.5325, 1],
              ease: [standard, enter, standard, "linear", standard],
              repeat: Infinity,
            },
          }}
        >
          Logged
        </motion.p>
        <div className="track" />
        <motion.div
          className="progress"
          data-node-id="1:730"
          initial={{ width: 1, background: "#35d477" }}
          animate={{
            width: [1, 1, 260, 260, 1, 1],
            background: [
              "#35d477",
              "#35d477",
              "#17964d",
              "#17964d",
              "#17964d",
              "#35d477",
              "#35d477",
            ],
          }}
          transition={{
            width: {
              duration,
              times: [0, 0.2313, 0.3, 0.5324, 0.5325, 1],
              ease: [
                standard,
                [0.65, 0, 0.25, 1],
                standard,
                "linear",
                standard,
              ],
              repeat: Infinity,
            },
            background: {
              duration,
              times: [0, 0.2938, 0.3063, 0.5313, 0.5324, 0.5325, 1],
              ease: [standard, enter, standard, "linear", "linear", standard],
              repeat: Infinity,
            },
          }}
        />
        <motion.div
          className="check"
          data-node-id="1:731"
          initial={{ opacity: 0, scaleX: 0.01, scaleY: 0.01 }}
          animate={{
            opacity: [0, 0, 1, 1, 0, 0],
            scaleX: [0.01, 0.01, 1, 1, 0.01, 0.01],
            scaleY: [0.01, 0.01, 1, 1, 0.01, 0.01],
          }}
          transition={{
            opacity: {
              duration,
              times: [0, 0.3012, 0.3013, 0.5324, 0.5325, 1],
              ease: [standard, "linear", standard, "linear", standard],
              repeat: Infinity,
            },
            scaleX: {
              duration,
              times: [0, 0.3013, 0.3313, 0.5324, 0.5325, 1],
              ease: [standard, bounce, standard, "linear", standard],
              repeat: Infinity,
            },
            scaleY: {
              duration,
              times: [0, 0.3013, 0.3313, 0.5324, 0.5325, 1],
              ease: [standard, bounce, standard, "linear", standard],
              repeat: Infinity,
            },
          }}
        >
          <img alt="" src={image("9ce10.svg")} />
          <span>✓</span>
        </motion.div>
      </motion.section>

      <motion.p
        className="loose-filename"
        data-node-id="1:734"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
        transition={{
          opacity: {
            duration,
            times: [0, 0.55, 0.5938, 0.7875, 0.8063, 1],
            ease: [standard, enter, standard, enter, standard],
            repeat: Infinity,
          },
        }}
      >
        coffee_receipt.pdf
      </motion.p>

      <motion.div
        className="cursor"
        data-node-id="1:735"
        initial={{ opacity: 0, x: -50, y: 60 }}
        animate={{
          opacity: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
          ...pointerPosition,
        }}
        transition={{
          opacity: {
            duration,
            times: [
              0, 0.0512, 0.0513, 0.5375, 0.5813, 0.6938, 0.725, 0.7787, 0.7788,
              1,
            ],
            ease: [
              standard,
              "linear",
              standard,
              "linear",
              standard,
              "linear",
              standard,
              "linear",
              standard,
            ],
            repeat: Infinity,
          },
          ...pointerTransition,
        }}
      >
        <img alt="" src={image("05a30.svg")} />
      </motion.div>

      <motion.img
        className="hand open-hand"
        data-node-id="1:737"
        alt=""
        src={image("c19cf.svg")}
        initial={{ opacity: 0, x: -50, y: 60 }}
        animate={{
          opacity: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
          ...pointerPosition,
        }}
        transition={{
          opacity: {
            duration,
            times: [
              0, 0.0199, 0.02, 0.0512, 0.0513, 0.7787, 0.7788, 0.7886, 0.7887,
              1,
            ],
            ease: [
              standard,
              "linear",
              standard,
              "linear",
              standard,
              "linear",
              standard,
              "linear",
              standard,
            ],
            repeat: Infinity,
          },
          ...pointerTransition,
        }}
      />
      <motion.img
        className="hand closed-hand"
        data-node-id="1:745"
        alt=""
        src={image("52835.svg")}
        initial={{ opacity: 1, scaleX: 1, scaleY: 1, x: -50, y: 60 }}
        animate={{
          opacity: [1, 1, 0, 0, 1, 1],
          scaleX: [1, 1, 0.9, 1, 1],
          scaleY: [1, 1, 0.9, 1, 1],
          ...pointerPosition,
        }}
        transition={{
          opacity: {
            duration,
            times: [0, 0.0199, 0.02, 0.7886, 0.7887, 1],
            ease: [standard, "linear", standard, "linear", standard],
            repeat: Infinity,
          },
          scaleX: {
            duration,
            times: [0, 0.7887, 0.7963, 0.8125, 1],
            ease: [standard, enter, bounce, standard],
            repeat: Infinity,
          },
          scaleY: {
            duration,
            times: [0, 0.7887, 0.7963, 0.8125, 1],
            ease: [standard, enter, bounce, standard],
            repeat: Infinity,
          },
          ...pointerTransition,
        }}
      />
    </main>
  )
}

export default function App() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const resize = () =>
      setScale(Math.min(window.innerWidth / 1080, window.innerHeight / 1280))
    resize()
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [])

  return (
    <div className="app-shell">
      <div
        className="stage-slot"
        style={{ width: 1080 * scale, height: 1280 * scale }}
      >
        <div
          style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
        >
          <FinanceStage />
        </div>
      </div>
    </div>
  )
}
