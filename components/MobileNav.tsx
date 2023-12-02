"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import { Link } from "../utils/navigation.ts";
import { LangToggler } from "./LangToggler.tsx";
import Links from "./Links.tsx";
import { ThemeSwitcher } from "./Switcher.tsx";

const MobileNav = () => {
  const [show, setShow] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="mobilenav_container" ref={mobileNavRef}>
      <div className="mobilenav_toggle">
        <h3 className="mobilenav_logo">
          <Link href="/">Logo</Link>
        </h3>
        <Bars3Icon className="mobilenav_bars" onClick={() => setShow(!show)} />
      </div>
      {show && (
        <div className="mobilenav">
          <XMarkIcon
            className="mobilenav_exit"
            onClick={() => setShow(!show)}
          />
          <div className="mobilenav_links" onClick={() => setShow(!show)}>
            <Links />
          </div>
          <div className="mobilenav_tools">
            <LangToggler />
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
