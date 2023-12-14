"use client";

import useSWR from "swr";
import Image from "next/image";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DetailProductPage(props: any) {
  const { params } = props;

  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product?id=${params.id}`,
    fetcher
  );

  if (!data) {
    return <h1>Loading ...</h1>;
  }

  const product = {
    data: data?.data,
  };

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Image
          src={product?.data?.image}
          alt={product?.data?.name}
          className="w-full object-cover aspect-square col-span-2"
          width={500}
          height={500}
        />
        <div className="bg-white p-4 px-6">
          <h3>{product?.data?.name}</h3>
          <p>Price : Rp. {product?.data?.price}</p>
        </div>
      </div>
    </div>
  );
}
