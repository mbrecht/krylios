import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 w-screen h-1/12">
        <div className="flex-1 text-center">
          <Link href={"/"}>
            <h1>Krylios</h1>
          </Link>
        </div>
        <div className="flex-1 text-center gap-x-12">
          <p>Product</p>
        </div>
        <div className="flex-1 text-center justify-end">
          <Link href={"/login"}>
            <p>Login</p>
          </Link>
        </div>
      </nav>
    </header>
  );
}
