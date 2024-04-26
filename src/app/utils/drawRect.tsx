import { CanvasContext } from "../hooks/useCanvas";

type DrawRectProps = {
  context: CanvasContext;
  color?: string | CanvasGradient | CanvasPattern;
  width: number;
  height: number;
  x: number;
  y: number;
};

export default function drawRect({
  context,
  color = "red",
  width,
  height,
  x,
  y,
}: DrawRectProps) {
  if (context) {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
  }
}
