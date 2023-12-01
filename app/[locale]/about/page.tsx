import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("site");
  return (
    <div className="min-h-[92vh] grid items-center justify-center font-bold">
      <h1 className="text-4xl">{t("page.about")}</h1>
    </div>
  );
};

export default About;
