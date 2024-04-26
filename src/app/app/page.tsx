import React from "react";
import Sidebar from "../components/Sidebar";
import Editor from "../components/Editor";

export default function Page() {
  return (
    <div className="flex">
      <Sidebar />
      <Editor />
    </div>
  );
}
