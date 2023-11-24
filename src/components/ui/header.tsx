import React from "react";
import Link from "next/link";
// import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <>
      <div className="sticky top-0 h-20 w-full bg-zinc-800">
        <div className="container mx-auto h-full px-4">
          <div className="flex h-full items-center justify-between">
            <p className="text-s font-bold text-zinc-100 uppercase">IServ App</p>
            <ul className="hidden gap-x-6 text-white md:flex">
              <li>
                <Link href="/">
                  <p>Escala Fechada</p>
                </Link>
              </li>
              <li>
                <Link href="/Ultimos30Dias">
                  <p>Ultimos 30 dias</p>
                </Link>
              </li>
              <li>
                <Link href="/EventosAbertos">
                  <p>Em Aberto</p>
                </Link>
              </li>
            </ul>
            <div>
              <Button className="mx-2">Sign Up</Button>
              <Button className="mx-2 bg-zinc-500">Login</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
