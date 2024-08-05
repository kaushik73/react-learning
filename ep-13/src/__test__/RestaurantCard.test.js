import RestaurantCard from "../Components/RestaurantCard";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PromotedRestaurantCard } from "../Components/PromotedRestaurantCard";

const MockRestaurantCard = PromotedRestaurantCard(RestaurantCard);

it("should render restaurant component", () => {
  render(
    <RestaurantCard
      name="Restaurant Name"
      areaname="Area Name"
      avgRating={4.5}
      cloudinaryImageId="sampleImageId"
      sla={{ slaString: "30 mins" }}
      cuisines={["Italian", "Mexican"]}
      locality="Locality Name"
      totalRatingsString="100+ ratings"
      costForTwo="₹300 for two"
    />
  );

  const name = screen.getByText("Restaurant Name");
  expect(name).toBeInTheDocument();

  const cuisines = screen.getByText("Italian, Mexican");
  expect(cuisines).toBeInTheDocument();

  const areaname = screen.getByText("Area Name");
  expect(areaname).toBeInTheDocument();

  const locality = screen.getByText("Locality Name");
  expect(locality).toBeInTheDocument();

  const costForTwo = screen.getByText("₹300 for two");
  expect(costForTwo).toBeInTheDocument();

  const totalRatingsString = screen.getByText("100+ ratings");
  expect(totalRatingsString).toBeInTheDocument();

  const avgRating = screen.getByText("4.5");
  expect(avgRating).toBeInTheDocument();

  const slaString = screen.getByText("30 mins");
  expect(slaString).toBeInTheDocument();
});

it('should render promoted restaurant card component with "Fast Delivery" label', () => {
  render(
    <MockRestaurantCard
      name="Restaurant Name"
      areaname="Area Name"
      avgRating={4.5}
      cloudinaryImageId="sampleImageId"
      sla={{ deliveryTime: 35, slaString: "30 mins" }}
      cuisines={["Italian", "Mexican"]}
      locality="Locality Name"
      totalRatingsString="100+ ratings"
      costForTwo="₹300 for two"
    />
  );

  const label = screen.getByText("Fast Delivery");
  expect(label).toBeInTheDocument();

  const name = screen.getByText("Restaurant Name");
  expect(name).toBeInTheDocument();

  const cuisines = screen.getByText("Italian, Mexican");
  expect(cuisines).toBeInTheDocument();

  const areaname = screen.getByText("Area Name");
  expect(areaname).toBeInTheDocument();

  const locality = screen.getByText("Locality Name");
  expect(locality).toBeInTheDocument();

  const costForTwo = screen.getByText("₹300 for two");
  expect(costForTwo).toBeInTheDocument();

  const totalRatingsString = screen.getByText("100+ ratings");
  expect(totalRatingsString).toBeInTheDocument();

  const avgRating = screen.getByText("4.5");
  expect(avgRating).toBeInTheDocument();

  const slaString = screen.getByText("30 mins");
  expect(slaString).toBeInTheDocument();
});
