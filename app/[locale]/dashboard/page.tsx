import { useTranslations } from "next-intl";

const Dashboard = () => {
  const t = useTranslations("site");
  return (
    <div className="min-h-[92vh] grid items-center justify-center font-bold">
      <h1 className="text-4xl">{t("page.dashboard")}</h1>
    </div>
  );
};

export default Dashboard;
