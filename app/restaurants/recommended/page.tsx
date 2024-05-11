import Header from "@/app/_components/Header";
import RestaurantItem from "@/app/_components/restaurant-item";
import { db } from "@/app/_lib/prisma";

const RecommendedRestaurants = async () => {
  const restaurants = await db.restaurant.findMany({});

  return (
    <>
      <Header />
      <div className="mt-6 space-y-4 px-5">
        <h2 className="mb-6 text-lg font-semibold">
          Restaurantes Recomendados
        </h2>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id}>
            <RestaurantItem key={restaurant.id} restaurant={restaurant} />
          </div>
        ))}
      </div>
    </>
  );
};

export default RecommendedRestaurants;
