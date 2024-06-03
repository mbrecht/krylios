import { CanvasContext } from "../hooks/useCanvas";
import { Node } from "../types/Node";

type DrawRectProps = {
  context: CanvasContext;
} & Node;

export default function drawRect({
  context,
  color = "blue",
  width,
  height,
  x,
  y,
  radii = [10],
  lineWidth = 4,
}: DrawRectProps) {
  if (context) {
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    context.beginPath();
    context.roundRect(x, y, width, height, radii);
    context.stroke();
  }
}
