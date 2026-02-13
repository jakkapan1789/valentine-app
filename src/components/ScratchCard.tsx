import { useRef, useEffect, useState, useCallback } from "react";

interface ScratchCardProps {
  imageSrc: string;
  width: number;
  height: number;
  onReveal: () => void;
  revealThreshold?: number;
}

const ScratchCard = ({
  imageSrc,
  width,
  height,
  onReveal,
  revealThreshold = 0.22,
}: ScratchCardProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const isDrawing = useRef(false);
  const [revealed, setRevealed] = useState(false);
  //   const [sparkles, setSparkles] = useState<
  //     { x: number; y: number; id: number }[]
  //   >([]);
  const sparkleId = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    ctxRef.current = ctx;

    // Draw overlay
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, "hsl(340, 80%, 75%)");
    grad.addColorStop(0.5, "hsl(350, 70%, 70%)");
    grad.addColorStop(1, "hsl(340, 60%, 80%)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Draw hint text
    ctx.fillStyle = "hsla(0, 0%, 100%, 0.7)";
    ctx.font = `bold ${Math.min(width, height) * 0.07}px 'Quicksand', sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("✨ Scratch me! ✨", width / 2, height / 2);
  }, [width, height]);

  const getPos = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return { x: 0, y: 0 };
      const rect = canvas.getBoundingClientRect();
      const scaleX = width / rect.width;
      const scaleY = height / rect.height;

      if ("touches" in e) {
        const touch = e.touches[0] || e.changedTouches[0];
        return {
          x: (touch.clientX - rect.left) * scaleX,
          y: (touch.clientY - rect.top) * scaleY,
        };
      }
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    },
    [width, height],
  );

  const scratch = useCallback(
    (x: number, y: number) => {
      const ctx = ctxRef.current;
      if (!ctx) return;
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 28, 0, Math.PI * 2);
      ctx.fill();

      // Sparkle
      sparkleId.current++;
      //   const rect = canvasRef.current?.getBoundingClientRect();
      //   if (rect) {
      //     const sx = (x / width) * rect.width + rect.left;
      //     const sy = (y / height) * rect.height + rect.top;
      //     setSparkles((prev) => [
      //       ...prev.slice(-8),
      //       { x: sx, y: sy, id: sparkleId.current },
      //     ]);
      //     setTimeout(() => {
      //       setSparkles((prev) => prev.filter((s) => s.id !== sparkleId.current));
      //     }, 600);
      //   }
    },
    [width, height],
  );

  const checkReveal = useCallback(() => {
    const ctx = ctxRef.current;
    if (!ctx || revealed) return;
    const imageData = ctx.getImageData(0, 0, width, height);
    let transparent = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparent++;
    }
    const ratio = transparent / (width * height);
    if (ratio >= revealThreshold) {
      setRevealed(true);
      onReveal();
    }
  }, [width, height, revealThreshold, onReveal, revealed]);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    isDrawing.current = true;
    const pos = getPos(e);
    scratch(pos.x, pos.y);
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing.current) return;
    e.preventDefault();
    const pos = getPos(e);
    scratch(pos.x, pos.y);
  };

  const handleEnd = () => {
    isDrawing.current = false;
    checkReveal();
  };

  return (
    <div className="relative inline-block rounded-2xl overflow-hidden shadow-lg">
      {/* Hidden image */}
      <img
        src={imageSrc}
        alt="Valentine surprise"
        className="block"
        style={{ width, height, objectFit: "cover" }}
        draggable={false}
      />
      {/* Scratch overlay */}
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="absolute inset-0 cursor-pointer touch-none"
        style={{ width: "100%", height: "100%" }}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      />
      {/* Sparkles */}
      {/* {sparkles.map((s) => (
        <span
          key={s.id}
          className="fixed pointer-events-none text-xl animate-ping"
          style={{
            left: s.x - 10,
            top: s.y - 10,
            zIndex: 100,
          }}
        >
          ✨
        </span>
      ))} */}
    </div>
  );
};

export default ScratchCard;
