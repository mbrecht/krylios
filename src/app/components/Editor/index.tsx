"use client";

import React, { useEffect, useRef } from "react";
import Canvas from "../Canvas";
import { DrawCanvasProps } from "@/app/hooks/useCanvas";
import drawNode from "@/app/utils/drawNode";

export default function Editor() {
  const draw = ({ context, width, height }: DrawCanvasProps) => {
    if (context) {
      context.clearRect(0, 0, width, height);
      drawNode({ context, x: 0, y: 0 });
    }
  };

  return <Canvas draw={draw} width={500} height={500} />;
}
