import { useEffect, useState } from "react";
import { Loader2Icon } from "lucide-react";

const Shop = () => {
  const [products, setProducts] = useState([
    {
      id: "",
      product_name: "",
      product_description: "",
      product_price: 0,
      product_image: "",
      product_quantity: 0,
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://jesus-torrente-cab-server.onrender.com/getProducts"
      );
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

  const addToCart = (id: string) => {
    // Obtener el contenido actual del localStorage
    const storedItems = localStorage.getItem("products");
    const existingItems = storedItems ? JSON.parse(storedItems) : [];

    // Verificar si el producto ya está en el carrito
    const existingProductIndex = existingItems.findIndex(
      (item: any) => item.id === id
    );

    if (existingProductIndex !== -1) {
      // Si el producto ya está en el carrito, incrementar la cantidad
      existingItems[existingProductIndex].quantity += 1;
    } else {
      // Si el producto no está en el carrito, agregarlo con cantidad 1
      existingItems.push({ id, quantity: 1 });
    }

    // Almacenar la lista actualizada en el localStorage
    localStorage.setItem("products", JSON.stringify(existingItems));

    console.log(`Producto ${id} agregado al carrito.`);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="flex flex-col md:flex-row items-center  gap-8 p-8">
      {isLoading ? (
        <Loader2Icon className="animate-spin mx-auto" />
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            className="p-8 container max-w-lg bg-white border  border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700"
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
                    ${product.product_price},00
                  </span>
                  <button
                    className="text-white bg-red-500 hover:bg-red-800
                      focus:ring-4 focus:outline-none focus:ring-blue-300
                      font-medium rounded-lg text-sm px-5 py-2.5 "
                    onClick={() => addToCart(product.id)}
                  >
                    Add to cart
                  </button>
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
