import { useTranslations } from "next-intl";
import { Suspense } from "react";
import Product from "../../components/Product.tsx";
import Loading from "./loading.tsx";

export default function Home() {
  const t = useTranslations("site");
  return (
    <main>
      <h1 className="head_title">{t("title")}</h1>
      <Suspense fallback={<Loading />}>
        <Product />
      </Suspense>
    </main>
  );
}
