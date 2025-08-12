import { useCallback, useRef, useState } from "react";

export function useTilt(maxTilt = 8) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)',
    transition: 'transform 120ms ease',
  });

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const tiltX = (maxTilt / 2 - px * maxTilt).toFixed(2);
    const tiltY = (py * maxTilt - maxTilt / 2).toFixed(2);
    setStyle({
      transform: `perspective(800px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) translateZ(0)`,
      transition: 'transform 60ms ease',
    });
  }, [maxTilt]);

  const onMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)',
      transition: 'transform 200ms ease',
    });
  }, []);

  return { ref, style, onMouseMove, onMouseLeave } as const;
}
