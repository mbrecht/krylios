import { useEffect, useRef } from "react";

export type CanvasContext = CanvasRenderingContext2D | null;

export type DrawCanvasProps = {
  context: CanvasContext;
  width: number;
  height: number;
};

export type DrawCanvas = (props: DrawCanvasProps) => void;

type UseCanvasProps = {
  draw: DrawCanvas;
  width: number;
  height: number;
};

export default function useCanvas({ draw, width, height }: UseCanvasProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      draw({ context, width, height });
    }
  }, [draw]);

  return { ref };
}
