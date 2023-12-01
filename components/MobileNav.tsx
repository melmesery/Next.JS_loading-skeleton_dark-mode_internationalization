// "use client";

// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import { useState } from "react";
// import { LangToggler } from "./LangToggler.tsx";
// import Links from "./Links.tsx";
// import { ThemeSwitcher } from "./Switcher.tsx";

// const MobileNav = () => {
//   const [show, setShow] = useState(false);
//   return (
//     <div className="sm:hidden">
//       <div className="flex flex-row items-center justify-between p-5">
//         <h3 className="font-bold">Logo</h3>
//         <Bars3Icon className="mobileNav_bars" onClick={() => setShow(!show)} />
//       </div>
//       {show && (
//         <div className="w-[70%] min-h-screen fixed top-0 right-0 bg-slate-700 text-white flex flex-col items-center justify-center gap-10">
//           <XMarkIcon
//             className="mobileNav_bars absolute top-5 left-5"
//             onClick={() => setShow(!show)}
//           />
//           <div className="flex flex-col items-center gap-14 font-bold">
//             <Links />
//           </div>
//           <div className="flex flex-row items-center gap-5">
//             <LangToggler />
//             <ThemeSwitcher />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MobileNav;

"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect, useRef } from "react";
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
    <div className="sm:hidden" ref={mobileNavRef}>
      <div className="flex flex-row items-center justify-between p-5">
        <h3 className="font-bold">Logo</h3>
        <Bars3Icon className="mobileNav_bars" onClick={() => setShow(!show)} />
      </div>
      {show && (
        <div className="w-[70%] min-h-screen fixed top-0 right-0 bg-slate-700 text-white flex flex-col items-center justify-center gap-10">
          <XMarkIcon
            className="mobileNav_bars absolute top-5 left-5"
            onClick={() => setShow(!show)}
          />
          <div className="flex flex-col items-center gap-14 font-bold" onClick={() => setShow(!show)}>
            <Links />
          </div>
          <div className="flex flex-row items-center gap-5">
            <LangToggler />
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
