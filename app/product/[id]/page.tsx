import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import ProductImage from "./_components/product-image";
import ProductDetail from "./_components/product-detail";

interface ProductPageProps {
  params: {
    id: string;
  };
}
const ProductPage = async ({ params: { id } }: ProductPageProps) => {
  const product = await db.product.findUnique({
    where: {
      id: id,
    },
    include: {
      restaurant: true,
    },
  });

  const juices = await db.product.findMany({
    where: {
      category: {
        name: "Sucos",
      },
      restaurant: {
        id: product?.restaurant?.id,
      },
    },
    include: {
      restaurant: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <div>
      <ProductImage product={product} />
      <ProductDetail product={product} complementaryProducts={juices} />
    </div>
  );
};

export default ProductPage;
