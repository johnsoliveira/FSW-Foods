import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import RestaurantImage from "./_components/restaurant-image";

interface RestaurantePageProps {
  params: {
    id: string;
  };
}

const RestaurantePage = async ({ params: { id } }: RestaurantePageProps) => {
  const restaurant = await db.restaurant.findUnique({
    where: {
      id: id,
    },
  });

  if (!restaurant) {
    return notFound();
  }

  return (
    <>
      <RestaurantImage restaurant={restaurant} />
    </>
  );
};

export default RestaurantePage;
