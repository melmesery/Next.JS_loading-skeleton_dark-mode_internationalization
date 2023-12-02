import { useTranslations } from "next-intl";

const Dashboard = () => {
  const t = useTranslations("site");
  return (
    <div className="page_container">
      <h1 className="page_title">{t("page.dashboard")}</h1>
    </div>
  );
};

export default Dashboard;
