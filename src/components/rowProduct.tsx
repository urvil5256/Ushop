import { Card } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";
import { useEffect, useState } from "react";

import { rowData } from "../data/rowDate";

import { title } from "./primitives";
const RowProduct = () => {
  const productData: any[] = rowData.products;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div>
      <section className="flex flex-col items-center justify-center">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Product List</h1>
        </div>
      </section>
      <section className="mt-4 grid grid-cols-1 gap-x-2 gap-y-5 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
        {productData &&
          productData.map((data: any) => (
            <Card key={data.id} className="w-[250px] space-y-5 p-4" radius="lg">
              <Skeleton className="rounded-lg" isLoaded={isLoaded}>
                <div className="h-30 rounded-lg bg-default-300">
                  <img alt="alt..." src={data.images[0]} />
                </div>
              </Skeleton>
              <div className="space-y-3">
                <Skeleton className="w-4/7 rounded-lg" isLoaded={isLoaded}>
                  <div className="h-auto w-auto pl-2 rounded-lg bg-default-200">
                    Name:{" "}
                    <h6 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
                      {data.title}
                    </h6>
                  </div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg" isLoaded={isLoaded}>
                  <div className="h-auto w-auto pl-2 rounded-lg bg-default-200">
                    Brand:{" "}
                    <h6 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
                      {data.brand}
                    </h6>
                  </div>
                </Skeleton>
                <Skeleton className="w-2/3 rounded-lg" isLoaded={isLoaded}>
                  <div className="h-auto pl-2 w-auto rounded-lg bg-default-300">
                    Price:
                    <h6 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
                      {data.price}
                    </h6>
                  </div>
                </Skeleton>
              </div>
            </Card>
          ))}
      </section>
    </div>
  );
};

export default RowProduct;
