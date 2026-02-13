import React, { useMemo } from 'react';

export default function ValentineHearts({
  enabled = true,
  count = 32,
  minSize = 14,
  maxSize = 34,
  minDuration = 7,
  maxDuration = 14,
  colors = ['#ff2d55', '#ff4d6d', '#ff6b6b', '#ff3b30', '#ff8fab'],
  zIndex = 9999,
}) {
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

  const hearts = useMemo(() => {
    const rand = (a, b) => a + Math.random() * (b - a);
    const pick = arr => arr[Math.floor(Math.random() * arr.length)];

    return Array.from({ length: count }).map((_, i) => ({
      id: `${i}-${Math.random().toString(16).slice(2)}`,
      size: rand(minSize, maxSize),
      left: rand(0, 100),
      duration: rand(minDuration, maxDuration),
      delay: rand(0, maxDuration),
      drift: rand(-35, 35),
      rotate: rand(-18, 18),
      sway: rand(8, 18), // амплитуда покачивания
      color: pick(colors),
      opacity: rand(0.65, 1),
    }));
  }, [count, minSize, maxSize, minDuration, maxDuration, colors]);

  if (!enabled || reduceMotion) return null;

  return (
    <>
      <style>{css}</style>

      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex,
        }}
      >
        {hearts.map(h => (
          <div
            key={h.id}
            className="vh-heart"
            style={{
              left: `${h.left}vw`,
              width: `${h.size}px`,
              height: `${h.size}px`,
              opacity: h.opacity,
              animationDuration: `${h.duration}s`,
              animationDelay: `-${h.delay}s`,
              '--drift': `${h.drift}px`,
              '--rot': `${h.rotate}deg`,
              '--sway': `${h.sway}px`,
            }}
          >
            <svg viewBox="0 0 32 29.6" width="100%" height="100%">
              {/* Классический “ровный” heart shape */}
              <path
                fill={h.color}
                d="M23.6,0c-3.1,0-5.8,1.8-7.6,4.4C14.2,1.8,11.5,0,8.4,0
                   C3.8,0,0,3.8,0,8.4c0,9.4,16,21.2,16,21.2s16-11.8,16-21.2
                   C32,3.8,28.2,0,23.6,0z"
              />
            </svg>
          </div>
        ))}
      </div>
    </>
  );
}

const css = `
.vh-heart{
  position:absolute;
  top:-12vh;
  will-change: transform;
  animation-name: vh-fall, vh-sway;
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: infinite, infinite;
}

/* Падение вниз + небольшой дрейф */
@keyframes vh-fall{
  0%   { transform: translate3d(0,-12vh,0) rotate(var(--rot)); }
  100% { transform: translate3d(var(--drift),112vh,0) rotate(calc(var(--rot) * 2)); }
}

/* Покачивание влево-вправо (поверх падения — через второй animation) */
@keyframes vh-sway{
  0%,100% { margin-left: 0; }
  50%     { margin-left: var(--sway); }
}
`;
