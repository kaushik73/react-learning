// import React from "react";
// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import Body from "../Components/Body"; // Adjust the import path as necessary
// import UserContext from "../Utils/UserContext";
// import { BrowserRouter } from "react-router-dom";

// // Mock data to be used in tests
// const mockRestaurants = [
//   {
//     info: {
//       id: "1",
//       name: "Pizza Place",
//       cuisines: ["Italian"],
//       sla: { deliveryTime: 25 },
//       cloudinaryImageId: "sampleImageId1",
//       totalRatingsString: "100+ ratings",
//       costForTwo: "₹300 for two",
//     },
//   },
//   {
//     info: {
//       id: "2",
//       name: "Sushi Spot",
//       cuisines: ["Japanese"],
//       sla: { deliveryTime: 45 },
//       cloudinaryImageId: "sampleImageId2",
//       totalRatingsString: "200+ ratings",
//       costForTwo: "₹500 for two",
//     },
//   },
// ];

// // Mock fetch to return mock data
// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () =>
//       Promise.resolve({
//         data: {
//           cards: [
//             {},
//             {
//               card: {
//                 card: {
//                   gridElements: {
//                     infoWithStyle: { restaurants: mockRestaurants },
//                   },
//                 },
//               },
//             },
//             {},
//             {},
//           ],
//         },
//       }),
//   })
// );

// test("search functionality works correctly", async () => {
//   const mockSetUserName = jest.fn();

//   render(
//     <BrowserRouter>
//       <UserContext.Provider
//         value={{ userName: "", setUserName: mockSetUserName }}
//       >
//         <Body />
//       </UserContext.Provider>
//     </BrowserRouter>
//   );

//   // Verify Shimmer is displayed initially
//   expect(screen.getByText(/loading/i)).toBeInTheDocument();

//   // Wait for restaurants to be loaded
//   await waitFor(() =>
//     expect(screen.getByText("Pizza Place")).toBeInTheDocument()
//   );

//   // Verify both restaurants are displayed initially
//   expect(screen.getByText("Pizza Place")).toBeInTheDocument();
//   expect(screen.getByText("Sushi Spot")).toBeInTheDocument();

//   // Simulate search input
//   fireEvent.change(
//     screen.getByPlaceholderText("Search a restaurant you want..."),
//     { target: { value: "Pizza" } }
//   );

//   // Verify only the filtered restaurant is displayed
//   expect(screen.getByText("Pizza Place")).toBeInTheDocument();
//   expect(screen.queryByText("Sushi Spot")).not.toBeInTheDocument();

//   // Clear search input
//   fireEvent.change(
//     screen.getByPlaceholderText("Search a restaurant you want..."),
//     { target: { value: "" } }
//   );

//   // Verify both restaurants are displayed again
//   expect(screen.getByText("Pizza Place")).toBeInTheDocument();
//   expect(screen.getByText("Sushi Spot")).toBeInTheDocument();
// });
