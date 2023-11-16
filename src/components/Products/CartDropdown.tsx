// CartDropdown.js
import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";

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

          // console.log("Product ID:", productId);

          const response = await fetch(`/api/getCartProducts/${productId.id}`);

          if (!response.ok) {
            console.error(
              `Error en la solicitud para el producto ${productId}: ${response.status}`
            );
            throw new Error(
              `Error en la solicitud para el producto ${productId}`
            );
          }

          const productData = await response.json();
          // console.log("Product Data:", productData);

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
    // console.log("Detalles del carrito:", productDetails);
  };

  const calculateTotal = () => {
    return products
      .reduce((total, product) => {
        if (product.details) {
          const productPrice = parseFloat(product.details.product_price) || 0;
          const productQuantity = parseInt(product.id.quantity) || 0;
          return total + productPrice * productQuantity;
        }
        return total;
      }, 0)
      .toFixed(2); // Redondear a dos decimales
  };

  useEffect(() => {
    displayCartItems();
  }, []);

  return (
    <Sheet>
      <div className="gap-2 items-center relative">
        <SheetTrigger
          className="flex gap-2 border p-4 rounded-full items-center relative "
          onClick={() => displayCartItems()}
        >
          <ShoppingCart />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-5 overflow-y-auto ">
          {products.map((product, index) => (
            <div key={index}>
              {product.id !== undefined && (
                <div className="flex items-center gap-3 border-y py-3">
                  <img
                    src={product.details?.product_image}
                    alt=""
                    className="w-32 h-32 object-center"
                  />
                  <div>
                    <p className="text-xs">{product.id.id}</p>
                    <p className="text-xs">Quantity: {product.id.quantity}</p>
                    <SheetHeader className="text-xl font-bold">
                      {product.details?.product_name}
                    </SheetHeader>
                    <p>${product.details?.product_price},00</p>
                  </div>
                </div>
              )}
            </div>
          ))}
          {/* <div className="flex items-center gap-3 border-y py-3">
            <img src="" alt="" className="w-32 h-32 object-center" />
            <div>
              <p className="text-xs">3</p>
              <p className="text-xs">Quantity: 444</p>
              <SheetHeader className="text-xl font-bold">pistola</SheetHeader>
              <p>$44,00</p>
            </div>
          </div> */}

          <Button className="fixed top-2">Checkout</Button>
          <p className="text-lg font-bold">Total:</p>
          <p className="text-lg font-bold">${calculateTotal()}</p>
        </SheetContent>
        <div className="rounded-full w-5 h-5 bg-red-500 flex justify-center items-center absolute -translate-y-4 right-0 text-white text-xs">
          {products.length}
        </div>
      </div>
    </Sheet>
  );
};

export default CartDropdown;
