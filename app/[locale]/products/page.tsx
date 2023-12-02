import { useTranslations } from "next-intl";
import { Suspense } from "react";
import Product from "../../../components/Product.tsx";
import Loading from "./loading.tsx";

const Products = () => {
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

export default Products;
