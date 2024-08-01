// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  name,
  areaname,
  avgRating,
  cloudinaryImageId,
  sla,
  cuisines,
  locality,
  totalRatingsString,
  costForTwo,
}) => {
  const URL = "https://media-assets.swiggy.com/swiggy/";
  return (
    <div className="card">
      <img src={URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h6>{areaname}</h6>
      <h6>{locality}</h6>
      <h6>{costForTwo}</h6>
      <h6>{totalRatingsString}</h6>
      <span>
        <h4
          style={
            avgRating < 4 ? { backgroundColor: "red" } : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{sla.slaString}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
