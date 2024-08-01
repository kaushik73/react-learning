import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
  console.log("Body Re-rendered");

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
    setRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setOriginalList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
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
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={handleInputChange}
        />
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard {...restaurant.info} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
