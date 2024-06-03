import { CanvasContext } from "../hooks/useCanvas";
import { Node } from "../types/Node";
import drawRect from "./drawRect";

type DrawNodeProps = {
  context: CanvasContext;
} & Node;

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
