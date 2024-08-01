import { useParams } from "react-router-dom";
import useRestaurantDetail from "../Hooks/useRestaurentDetail";

const RestaurantDetail = () => {
  const { resId } = useParams();
  const [restaurantData, isLoading] = useRestaurantDetail(resId);
  const URL = "https://media-assets.swiggy.com/swiggy/";

  return isLoading ? (
    <p>Loading...</p>
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
