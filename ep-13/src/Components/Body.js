import React, { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { PromotedRestaurantCard } from "./PromotedRestaurantCard";
import UserContext from "../Utils/UserContext";

function filterData(searchText, restaurants) {
  if (searchText.trim() === "") {
    return restaurants;
  }
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [originalList, setOriginalList] = useState([]); // Original list is kept intact
  const PromotedRestaurantCard1 = PromotedRestaurantCard(RestaurantCard);
  const { userName, setUserName } = useContext(UserContext);

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
    const x = json.data.cards[1].card.card?.gridElements
      ? json.data.cards[1].card.card?.gridElements?.infoWithStyle?.restaurants
      : json.data.cards[3].card.card?.gridElements?.infoWithStyle?.restaurants;

    setRestaurants(x);
    setOriginalList(x);
  }
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    const data = filterData(value, originalList);
    setRestaurants(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return restaurants.length === 0 && searchText === "" ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-evenly">
        <div className="w-full ml-6">
          <input
            type="text"
            className="m-2 p-2 w-6/12"
            placeholder="Search a restaurant you want..."
            value={searchText}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full flex justify-end mr-6">
          <input
            type="text"
            className="m-2 p-2 w-4/12"
            placeholder="Enter Name for Context"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.sla.deliveryTime < 30 ? (
              <PromotedRestaurantCard1 {...restaurant.info} />
            ) : (
              <RestaurantCard {...restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
