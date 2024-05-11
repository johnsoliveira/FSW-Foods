"use client";

import { useEffect, useState } from "react";
import Header from "@/app/_components/Header";
import { Restaurant } from "@prisma/client";
import RestaurantItem from "@/app/_components/restaurant-item";
import { useSearchParams } from "next/navigation";
import { searchForRestaurants } from "../_actions/search";

const Restaurants = () => {
  const serachParams = useSearchParams();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const searchFor = serachParams.get("search");

  useEffect(() => {
    const fetchResturants = async () => {
      if (!searchFor) return;
      const foundRestaurants = await searchForRestaurants(searchFor);
      setRestaurants(foundRestaurants);
    };
    fetchResturants();
  }, [searchFor]);

  return (
    <>
      <Header />
      <div className="px-5 py-6">
        <h1 className="mb-6 text-lg font-semibold">Restaurantes Encontrados</h1>
        <div className="flex w-full flex-col gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantItem
              restaurant={restaurant}
              key={restaurant.id}
              className="min-w-full max-w-full"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Restaurants;
