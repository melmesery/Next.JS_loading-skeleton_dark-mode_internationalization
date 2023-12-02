import { useTranslations } from "next-intl";
import React, { Suspense } from "react";
import Product from "../../../components/Product.tsx";
import Loading from "./loading.tsx";

const page = () => {
  const t = useTranslations("site");
  return (
    <div>
      <h1 className="page_address">{t("page.home.address")}</h1>
      <Suspense fallback={<Loading />}>
        <Product />
      </Suspense>
    </div>
  );
};

export default page;
