import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import useRestaurantDetail from "../Utils/useRestaurentDetail";
import RecommendedItem from "./RecommendedItem";

const RestaurantDetail = () => {
  const URL = "https://media-assets.swiggy.com/swiggy/";
  const { resId } = useParams();
  const [restaurantData, isLoading] = useRestaurantDetail(resId);
  const [recommendedData, setRecommendedData] = useState([]);
  const [isOpen, setIsOpen] = useState(null);

  async function getRecommendedData() {
    let data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "x-cors-api-key": "temp_3c5dcb786ba062a3ce66c0eadc49c958",
        },
      }
    );

    const json = await data.json();
    const x = json.data.cards[1].card.card?.gridElements
      ? json.data.cards[1].card.card?.gridElements?.infoWithStyle?.restaurants
      : json.data.cards[3].card.card?.gridElements?.infoWithStyle?.restaurants;
    setRecommendedData(x);
  }

  useEffect(() => {
    getRecommendedData();
  }, []);
  console.log(recommendedData, "recData");
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <div className="card">
        <img src={URL + restaurantData?.cloudinaryImageId} />
        <h2>{restaurantData?.name}</h2>
        <h5>{restaurantData?.cuisines.join(", ")}</h5>
        <h6>{restaurantData?.areaname}</h6>
        <h6>{restaurantData?.locality}</h6>
        <h6>{restaurantData?.costForTwo}</h6>
        <h6>{restaurantData?.totalRatingsString}</h6>
        <span>
          <h4
            style={
              restaurantData?.avgRating < 4
                ? { backgroundColor: "red" }
                : { color: "white" }
            }
          >
            <i className="fa-solid fa-star"></i>
            {restaurantData?.avgRating}
          </h4>
          <h4>{restaurantData?.sla?.slaString}</h4>
        </span>
      </div>
      <div className="">
        <ul className="flex flex-wrap flex-col">
          {" "}
          {recommendedData.map((item, index) => {
            return (
              <li>
                <RecommendedItem
                  key={index}
                  recommendedData={item.info}
                  handleOpen={() => {
                    setIsOpen((prevIndex) => {
                      return prevIndex == index ? null : index;
                    });
                  }}
                  showAccordian={isOpen == index ? true : false}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetail;
