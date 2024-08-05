import React from "react";
import Header from "../Components/Header";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../Utils/UserContext";
import useOnline from "../Utils/useOnlineStatus";
import cartReducer from "../Utils/cartSlice"; // Replace with your actual cart reducer
import appStore from "../Utils/AppStore";

// Mock the useOnline hook
jest.mock("../Utils/useOnlineStatus", () => jest.fn());

// Mock the UserContext
const mockUserContext = {
  userName: "Test User",
};

// Mock Redux store
const mockStore = configureStore({
  reducer: {
    cart: cartReducer, // Add other reducers as needed
  },
  preloadedState: {
    cart: {
      items: [], // Default state for cart items
    },
  },
});

describe("Header Component", () => {
  beforeEach(() => {
    // Mock the useOnlineStatus hook to return true
    useOnline.mockReturnValue(true);
  });

  it("should load header comp with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <UserContext.Provider value={mockUserContext}>
            <Header />
          </UserContext.Provider>
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" }); // const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();

    const userName = screen.getByText(mockUserContext.userName);
    expect(userName).toBeInTheDocument();

    const onlineStatus = screen.getByText("Online : ✅");
    expect(onlineStatus).toBeInTheDocument();
  });

  it("should render 0 cart items ", () => {
    render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <UserContext.Provider value={mockUserContext}>
            <Header />
          </UserContext.Provider>
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText("Cart (0)");
    expect(cartItems).toBeInTheDocument();
  });

  it("should change Login to Logout on Click", () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={mockUserContext}>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </UserContext.Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });

    expect(logoutButton).toBeInTheDocument();
  });
});
