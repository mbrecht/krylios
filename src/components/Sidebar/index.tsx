import React from "react";

type SidebarProps = {
  className: string;
};

export default function Sidebar({ className }: SidebarProps) {
  return (
    <aside className={className}>
      <p>test</p>
      <p>2</p>
    </aside>
  );
}
