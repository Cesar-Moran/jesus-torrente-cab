import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const AddProduct = () => {
  const [product, setProduct] = useState({
    product_name: "",
    product_description: "",
    product_price: "",
    product_image: "",
    product_quantity: "",
  });

  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [imageList, setImageList] = useState<string[]>([]);

  const imageListRef = ref(storage, "products-images/");
  const cardStyles = {
    formcontrol: "border p-3 rounded-lg ",
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  const onSubmit = async (ev: any) => {
    ev.preventDefault();
    if (imageUpload == null) return;
    const imageRef = ref(storage, `products-images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setProduct(() => ({
            ...product,
            product_image: url,
          }));
        });
      })
      .catch((error) => console.log(error.message));

    await fetch("http://localhost:4000/createProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  };

  return (
    <div className="container main-container">
      <div className="flex flex-col gap-9">
        <form
          className="mt-5 mb-5 flex flex-col gap-9 items-start"
          onSubmit={onSubmit}
        >
          <div className="form-group">
            <input
              type="text"
              className={cardStyles.formcontrol}
              id="productname"
              placeholder="Enter Product Name"
              name="product_name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className={cardStyles.formcontrol}
              id="price"
              placeholder="Product Price"
              name="product_price"
              onChange={handleChange}
            />
          </div>
          <div className="form-group flex flex-col gap-2 text-start">
            <label htmlFor="image">Product Image:</label>
            <input
              type="file"
              className={cardStyles.formcontrol}
              id="image"
              name="product_image"
              onChange={(event) => {
                handleChange(event);
                if (event.target.files && event.target.files.length > 0) {
                  setImageUpload(event.target.files[0]);
                }
              }}
            />
          </div>
          <div>
            <input
              type="number"
              className={cardStyles.formcontrol}
              placeholder="Product Quantity"
              name="product_quantity"
              onChange={handleChange}
            />
          </div>
          <div className="form-group flex flex-col text-start gap-4 w-full">
            <label className="text-xl">Product Description:</label>
            <textarea
              className={cardStyles.formcontrol}
              rows={5}
              id="productdesc"
              name="product_description"
              onChange={handleChange}
            ></textarea>
          </div>
          <Button type="submit" className="">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
