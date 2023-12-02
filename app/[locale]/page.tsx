import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("site");
  return (
    <main>
      <div className="homepage_container">
        <h1 className="homepage_address">{t("title")}</h1>
        <h2 className="homepage_title">{t("page.home.title")}</h2>
      </div>
    </main>
  );
}
