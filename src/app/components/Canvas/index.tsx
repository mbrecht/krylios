import React from "react";
import useCanvas, { DrawCanvas } from "@/app/hooks/useCanvas";

type CanvasProps = {
  draw: DrawCanvas;
  width: number;
  height: number;
};

export default function Canvas({ draw, width, height }: CanvasProps) {
  const { ref } = useCanvas({ draw, width, height });

  return <canvas ref={ref} width={width} height={height} />;
}
