import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleDeleteItem = () => {
    dispatch(removeItem());
  };

  return (
    <div className="min-h-40">
      <div className="flex justify-between items-center  m-2 min-h-20">
        <div className="min-h-25  overflow-hidden mx-auto">
          <span className=" font-bold h-20 text-center text-4xl ">Cart</span>
        </div>
        <div className="mr-5">
          <button
            onClick={handleClearCart}
            className="m-1 p-1 rounded-lg bg-black text-white"
          >
            Clear Cart
          </button>
        </div>
      </div>
      <div className="text-center">
        {cartItems.length == 0 && <p>Add Some Items, Do Shopping</p>}
      </div>
      <ul className="m-2 p-2 bg-cyan-50">
        {cartItems.map((item) => {
          return (
            <li
              className="m-2 p-2 text-pretty border border-b-blue-900"
              key={item}
            >
              Name: {item?.name}
              <h6>{item?.locality}</h6>
              <h6>{item?.costForTwo}</h6>
              <h6>{item?.totalRatingsString}</h6>
              <button onClick={handleDeleteItem}> Delete Item</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
