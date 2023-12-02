import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("site");
  return (
    <div className="page_container">
      <h1 className="page_title">{t("page.about")}</h1>
    </div>
  );
};

export default About;
