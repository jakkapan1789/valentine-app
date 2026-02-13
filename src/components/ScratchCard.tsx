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

  //   const sparkleId = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    ctxRef.current = ctx;

    // Draw overlay
    const grad = ctx.createLinearGradient(0, 0, width, height);
    // grad.addColorStop(0, "hsl(340, 80%, 75%)");
    // grad.addColorStop(0.5, "hsl(350, 70%, 70%)");
    // grad.addColorStop(1, "hsl(340, 60%, 80%)");
    grad.addColorStop(0, "hsla(340, 74%, 62%, 1.00)");
    grad.addColorStop(0.5, "hsla(340, 64%, 62%, 1.00)");
    grad.addColorStop(1, "hsla(340, 72%, 64%, 1.00)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Draw hint text
    ctx.fillStyle = "hsla(0, 0%, 100%, 0.70)";
    ctx.font = `bold ${Math.min(width, height) * 0.07}px 'Quicksand', sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    // ctx.fillText(" Scratch me! ", width / 2, height / 2);
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
  const lastPoint = useRef<{ x: number; y: number } | null>(null);

  const scratch = useCallback((x: number, y: number) => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    ctx.globalCompositeOperation = "destination-out";
    ctx.lineWidth = 50; // ขนาด brush
    ctx.lineCap = "round"; // หัวกลม
    ctx.lineJoin = "round"; // ต่อเส้นเนียน

    ctx.beginPath();

    if (lastPoint.current) {
      ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    } else {
      ctx.arc(x, y, 25, 0, Math.PI * 2);
      ctx.fill();
    }

    lastPoint.current = { x, y };
  }, []);

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
    lastPoint.current = pos;
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
    lastPoint.current = null;
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
    </div>
  );
};

export default ScratchCard;
