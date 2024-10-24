import { ProductCategory } from "./productCategory";

import RowProduct from "@/components/rowProduct";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <ProductCategory />
        <RowProduct />
      </section>
    </DefaultLayout>
  );
}
