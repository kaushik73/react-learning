import React, { useState } from "react";
import { restaurantList } from "../Utils/constants";
import RestaurantCard from "./RestaurantCard";
// EP-5 at 52 min
function filterData(searchText, restaurants) {
  console.log(restaurants);
  if (searchText.trim() == "") {
    console.log("inside searchText.trim()", restaurants);
    return restaurants;
  }
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}
Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [originalList] = useState(restaurantList); // Original list is kept intact

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const data = filterData(searchText, originalList);
            // update the state of restaurants list
            setRestaurants(data);
          }}
        ></input>
        <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
