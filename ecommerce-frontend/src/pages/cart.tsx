import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";

const cartItems = [
{
  productID :"adfad",
  photo:"https://imgs.search.brave.com/daQJKFUpDWzxl-VpQkJOkVCc86kY_BqtnWLBmeWnRcs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvbWFjYm9vay9z/bWFsbC9tYWNib29r/X1BORzc2LnBuZw",
  name:"Macbook",
  price:30000,
  quantity :4,
  stock:10,

}


];
const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subTotal + tax + shippingCharges;
const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);
  useEffect(()=>{
      const timeOutId = setTimeout(()=>{
        if (Math.random() >0.5){
            setIsValidCouponCode(true)
        }else{
          setIsValidCouponCode(false)
        }
      },1000)
      return ()=>{
        clearTimeout(timeOutId);
        setIsValidCouponCode(false)
      };
  },[couponCode])
  return (
    <div className="cart">
      <main>
    
        {cartItems.length > 0 ? (
          cartItems.map((i,index)=>(<CartItem cartItam={i} key={index}/>))
        ):(
          <h1>No Item Added</h1>
        ) }
      </main>
      <aside>
          <p>Subtotal :₹{subTotal}</p>
          <p>Shipping Charges :₹{shippingCharges}</p>
          <p>Tax :₹{tax}</p>
          <p>
            Discount:<em>- ₹{discount}</em>
          </p>
          <p>
            <b>Total :₹{total}</b>{" "}
          </p>

          <input
            type="text"
            placeholder="Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          { couponCode && (
            isValidCouponCode ? (
              <span className="green">
                {discount} off using the <code>{couponCode}</code>
              </span>
            ) : (
              <span className="red">
                Invalid Coupon Code <VscError />
              </span>
            )
          )}

          {cartItems.length>0 && <Link to="/shipping">CheckOut</Link>}
        </aside>
    </div>
  );
};

export default Cart;
