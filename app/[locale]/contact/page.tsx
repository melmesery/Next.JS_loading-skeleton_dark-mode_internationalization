import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("site");
  return (
    <div className="min-h-[92vh] grid items-center justify-center font-bold">
      <h1 className="text-4xl">{t("page.contact")}</h1>
    </div>
  );
};

export default Contact;
