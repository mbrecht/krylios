"use client";

import React, { useRef } from "react";
import Sidebar from "@/components/Sidebar";

export default function Page() {
  const editorParentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-grow w-screen h-11/12">
      <Sidebar className="flex h-11/12" />
    </div>
  );
}
