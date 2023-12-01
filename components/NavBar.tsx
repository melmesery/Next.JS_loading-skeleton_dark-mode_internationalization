import { LangToggler } from "./LangToggler.tsx";
import Links from "./Links.tsx";
import { ThemeSwitcher } from "./Switcher.tsx";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar_links">
        <Links />
      </div>
      <div className="flex flex-row items-center">
        <ThemeSwitcher />
        <LangToggler />
      </div>
    </div>
  );
}
