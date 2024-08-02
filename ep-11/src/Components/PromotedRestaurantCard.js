export const PromotedRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="z-20 absolute px-1 py-2 m-2 bg-black text-white">
          Fast Delivery
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};
