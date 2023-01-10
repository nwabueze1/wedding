import React from "react";
import Styles from "./Styles.module.scss";
import { Inter } from "@next/font/google";
import Navlist from "../NavList";
import NavListItem from "../NavListItem";
import Navlogo from "../NavLogo";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <nav className={`${inter.className} ${Styles.navbar}`}>
      <Navlist>
        <NavListItem href="/">Home</NavListItem>
        <NavListItem href="/">About</NavListItem>
        <NavListItem href="/">Gallery</NavListItem>
        <NavListItem href="/">
          <Navlogo />
        </NavListItem>
        <NavListItem href="/">The Wedding</NavListItem>
        <NavListItem href="/">Blog</NavListItem>
        <NavListItem href="/">Page</NavListItem>
        <NavListItem href="/">RSVP</NavListItem>
      </Navlist>
    </nav>
  );
}
