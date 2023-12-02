import { HomeIcon } from "@heroicons/react/24/solid";
import { Link } from "../utils/navigation.ts";
import { useTranslations } from "next-intl";

const Links = () => {
  const t = useTranslations("site");
  return (
    <>
      <Link href="/">
        <HomeIcon className="mobilenav_home" />
      </Link>
      <Link href="/products">{t("navigation.products")}</Link>
      <Link href="/dashboard">{t("navigation.dashboard")}</Link>
      <Link href="/contact">{t("navigation.contact")}</Link>
      <Link href="/about">{t("navigation.about")}</Link>
    </>
  );
};

export default Links;
