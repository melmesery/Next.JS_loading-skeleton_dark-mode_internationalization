import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("site");
  return (
    <div className="page_container">
      <h1 className="page_title">{t("page.contact")}</h1>
    </div>
  );
};

export default Contact;
