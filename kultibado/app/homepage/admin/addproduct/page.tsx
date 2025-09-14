"use client";
import Image from "next/image";
import AddProductForm from "./components/addproductform";

export default function AddProduct() {
  return (
    <div>
      <div className = "pt-10">
        <AddProductForm></AddProductForm>
      </div>
    </div>
  );
}
