import { useState } from "react";
import ProductCard from "../components/product-card";

const Search = () => {
  const [search, setSearch] = useState("");
  const [short, setShort] = useState("");
  const [maxPrice, setMaxPrice] = useState(10000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const addtoCartHandler = () => {};
  const isPrevPage = true;
  const isNextPage = true;

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filtes</h2>
        <div>
          <h4>Max Price:</h4>
          <select
            name=""
            value={short}
            onChange={(e) => setShort(e.target.value)}
          >
            <option value="asc">Price(Low To High)</option>
            <option value="dsc">Price(High To Low)</option>
          </select>
        </div>
        <div>
          <h4>Max Price: {maxPrice || ""}</h4>

          <input
            type="range"
            value={maxPrice}
            min={100}
            max={100000}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <h4>Catrgory</h4>
          <select
            name=""
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="laptop">Laptop</option>
            <option value="camera">camera</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search by Name.."
          name=""
          id=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="search-product-list">
          <ProductCard
            productId="234sdf"
            name="Macbook"
            price={25210}
            stock={55}
            handler={addtoCartHandler}
            photo="https://m.media-amazon.com/images/I/316ArzLeJ2L._SY445_SX342_QL70_FMwebp_.jpg"
          />
        </div>
        <article>
          <button
            disabled={!isPrevPage}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </button>
          <span>
            {page} of {4}
          </span>
          <button
            disabled={!isNextPage}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </article>
      </main>
    </div>
  );
};

export default Search;
