import { useEffect, useState } from "react";
import { storage } from "../firebase";

import { ref, listAll, getDownloadURL } from "firebase/storage";
import { Loader2Icon } from "lucide-react";

const Shop = () => {
  const [products, setProducts] = useState([
    {
      product_id: "",
      product_name: "",
      product_description: "",
      product_price: "",
      product_image: "",
      product_quantity: "",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    try {
      setIsLoading(true);

      const response = await fetch("http://localhost:4000/getProducts");
      if (!response.ok) {
        console.error("Failed to fetch product data");
        return;
      }

      const data = await response.json();
      setProducts(data);

      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="flex items-center  gap-8 p-8">
      {isLoading ? (
        <Loader2Icon className="animate-spin" />
      ) : (
        products.map((product) => (
          <div
            key={product.product_id}
            className="p-8 container   bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            {isLoading ? (
              <Loader2Icon />
            ) : (
              <div className="">
                <img
                  className=" rounded-t-lg  w-full h-32 "
                  src={product.product_image}
                  alt="Product image"
                />
                <a href="#">
                  <h5 className="text-xl text-start font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.product_name}
                  </h5>
                </a>

                <div className="flex justify-between items-center text-start gap-3">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${product.product_price}
                  </span>
                  <a
                    href="#"
                    className="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Shop;
