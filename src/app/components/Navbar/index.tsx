import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex-1">
          <h1>Krylios</h1>
        </div>
        <div className="flex-1 gap-x-12">
          <p>Product</p>
        </div>
        <div className="flex-1 justify-end">
          <p>Login</p>
        </div>
      </nav>
    </header>
  );
}
