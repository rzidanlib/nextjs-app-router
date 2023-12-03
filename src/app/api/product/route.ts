import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Nike Air Max Excee",
    price: 1279000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cdfc7c74-b911-4661-b1e5-a5f7d7a48b81/air-max-excee-shoe-lPbXqt.png",
  },
  {
    id: 2,
    title: "Nike Air Max Pulse",
    price: 2379000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8535fa44-afb6-4a64-aac4-3a9b769af79e/air-max-pulse-shoes-zD62r3.png",
  },
  {
    id: 3,
    title: "Nike Air Max 1",
    price: 2199000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/beb813ac-f826-4cc9-a716-7a2adc2ddd32/air-max-1-shoes-ZCSX34.png",
  },
  {
    id: 4,
    title: "Nike Air Max 1",
    price: 2199000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/beb813ac-f826-4cc9-a716-7a2adc2ddd32/air-max-1-shoes-ZCSX34.png",
  },
  {
    id: 5,
    title: "Nike Air Max 1",
    price: 2199000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/beb813ac-f826-4cc9-a716-7a2adc2ddd32/air-max-1-shoes-ZCSX34.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "success",
        data: detailProduct,
      });
    }

    return NextResponse.json({
      status: 404,
      message: "not found",
      data: {},
    });
  }

  const products = await retrieveData("products");

  return NextResponse.json({ status: 200, message: "success", data: products });
}
