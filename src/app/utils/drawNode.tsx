import { CanvasContext } from "../hooks/useCanvas";
import drawRect from "./drawRect";

type DrawNodeProps = {
  context: CanvasContext;
  width?: number;
  height?: number;
  x: number;
  y: number;
};

export default function drawNode({
  context,
  width = 100,
  height = 100,
  x,
  y,
}: DrawNodeProps) {
  drawRect({
    context,
    width,
    height,
    x,
    y,
  });
}
