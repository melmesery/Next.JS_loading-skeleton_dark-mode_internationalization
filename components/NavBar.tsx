import { HomeIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
import { Link } from "../utils/navigation.ts";
import { LangToggler } from "./LangToggler.tsx";
import { ThemeSwitcher } from "./Switcher.tsx";

export default function NavBar() {
  const t = useTranslations("site");

  return (
    <div className="navbar_container">
      <div className="navbar_links">
        <Link href="/">
          <HomeIcon className="navbar_home" />
        </Link>
        <Link href="/products">{t("navigation.products")}</Link>
        <Link href="/dashboard">{t("navigation.dashboard")}</Link>
        <Link href="/contact">{t("navigation.contact")}</Link>
        <Link href="/about">{t("navigation.about")}</Link>
      </div>
      <div className="navbar_tools">
        <ThemeSwitcher />
        <LangToggler />
      </div>
    </div>
  );
}
