import React, { useState, useEffect } from "react";

const useRestaurantDetail = (resId) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData(resId) {
    let data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "x-cors-api-key": "temp_3c5dcb786ba062a3ce66c0eadc49c958",
        },
      }
    );
    const json = await data.json();
    let rest =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    restaurantData;

    let usefullData = rest.filter((oneRest) => {
      return oneRest.info.id == resId;
    });
    setRestaurantData(usefullData[0]?.info);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData(resId);
  }, []);
  return [restaurantData, isLoading];
};
export default useRestaurantDetail;
