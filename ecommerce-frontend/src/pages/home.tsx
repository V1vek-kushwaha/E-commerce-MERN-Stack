import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {
  const addtoCartHandler =()=>{
    //logic hare
  }
  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to={"/search"} className="findmore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          productId="234sdf"
          name="Macbook"
          price={25210}
          stock={55}
          handler={addtoCartHandler}
          photo="https://m.media-amazon.com/images/I/316ArzLeJ2L._SY445_SX342_QL70_FMwebp_.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
