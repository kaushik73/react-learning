import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantDetail = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const URL = "https://media-assets.swiggy.com/swiggy/";
  const { resId } = useParams();
  async function fetchData() {
    let data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "x-cors-api-key": "temp_3c5dcb786ba062a3ce66c0eadc49c958",
        },
      }
    );
    const json = await data.json();
    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
      "json"
    );
    let rest =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    restaurantData;

    let usefullData = rest.filter((oneRest) => {
      return oneRest.info.id == resId;
    });
    console.log(usefullData, "usefullData", usefullData[0]);
    setRestaurantData(usefullData[0]?.info);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(restaurantData, "restaurantData");

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <div>
      <div className="card">
        <img src={URL + restaurantData.cloudinaryImageId} />
        <h2>{restaurantData.name}</h2>
        <h5>{restaurantData.cuisines.join(", ")}</h5>
        <h6>{restaurantData.areaname}</h6>
        <h6>{restaurantData.locality}</h6>
        <h6>{restaurantData.costForTwo}</h6>
        <h6>{restaurantData.totalRatingsString}</h6>
        <span>
          <h4
            style={
              restaurantData.avgRating < 4
                ? { backgroundColor: "red" }
                : { color: "white" }
            }
          >
            <i className="fa-solid fa-star"></i>
            {restaurantData.avgRating}
          </h4>
          <h4>{restaurantData.sla.slaString}</h4>
        </span>
      </div>
    </div>
  );
};

export default RestaurantDetail;
