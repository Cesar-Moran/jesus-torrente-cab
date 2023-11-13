// CartDropdown.js
import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const CartDropdown = () => {
  const [products, setProducts] = useState<Array<{ id: any; details: any }>>(
    []
  );

  const displayCartItems = async () => {
    // Obtener el contenido actual del localStorage
    const storedItems = localStorage.getItem("products");
    const existingItems = storedItems ? JSON.parse(storedItems) : [];

    const productDetails = await Promise.all(
      existingItems.map(async (productId: any) => {
        try {
          if (!productId) {
            console.error("ID del producto no definido:", productId);
            throw new Error("ID del producto no definido");
          }

          console.log("Product ID:", productId);

          const response = await fetch(
            `http://localhost:4000/getCartProducts/${productId.id}`
          );

          if (!response.ok) {
            console.error(
              `Error en la solicitud para el producto ${productId}: ${response.status}`
            );
            throw new Error(
              `Error en la solicitud para el producto ${productId}`
            );
          }

          const productData = await response.json();
          console.log("Product Data:", productData);

          // Devolver un objeto con los detalles del producto
          return {
            id: productId,
            details: productData.length > 0 ? productData[0] : null,
          };
        } catch (error) {
          console.error(`Error al procesar el producto ${productId}:`, error);

          // Manejar el error y devolver un objeto con el ID del producto
          return {
            id: productId,
            details: null,
          };
        }
      })
    );

    setProducts(productDetails);

    // Hacer algo con los detalles del producto, por ejemplo, mostrarlos en la consola
    console.log("Detalles del carrito:", productDetails);
  };

  useEffect(() => {
    displayCartItems();
  }, []);

  return (
    <Sheet>
      <button className="gap-2 items-center relative">
        <SheetTrigger
          className="flex gap-2 border p-4 rounded-full"
          onClick={() => displayCartItems()}
        >
          <ShoppingCart />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-5">
          {products.map((product, index) => (
            <div key={index}>
              {product.id !== undefined && (
                <div>
                  <p className="text-xs">{product.id.id}</p>
                  <p className="text-xs">
                    Quantity: {product.id.quantity}
                  </p>{" "}
                  {/* Muestra la propiedad 'quantity' */}
                  {/* Accede a la propiedad 'id' del objeto */}
                  <img src={product.details?.product_image} alt="" />
                  <div>
                    <p className="text-xl">{product.details?.product_name}</p>
                    <p>${product.details?.product_price},00</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </SheetContent>
        <div className="rounded-full w-5 h-5 bg-red-500 flex justify-center items-center absolute -translate-y-4 right-0 text-white text-xs">
          {products.length}
        </div>
      </button>
    </Sheet>
  );
};

export default CartDropdown;
