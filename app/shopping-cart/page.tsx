"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  calculatePrice,
  calculateSubTotal,
  deleteCart,
  localCartData,
  myCart,
} from "@/store/actions/cart";
import DeleteModal from "@/components/globals/DeleteModel";
import { AppDispatch } from "@/store/store";
import { USER_ROLE } from "../constants";
import { useRouter } from "next/navigation";

interface CartItem {
  id: number;
  slug: string;
  images: any;
  is_free: number;
  name: string;
  price: number;
  discount_price: number;
  regular_price: number;
  quantity: number;
  cartID: string;
  variations: any;
}

const Page: React.FC = () => {
  const { cartCount } = useSelector((state: any) => state.cart);
  const { loading, user } = useSelector((state: any) => state.auth);
  const [data, setData] = useState<any>({ result: [] });
  const [open, setOpen] = useState(false);
  const [delCart, setDelCart] = useState<CartItem | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleAddQty = async (item: CartItem) => {
    if (item.quantity >= 50) return;
    const updatedItem = { ...item, quantity: item.quantity + 1 };
    await dispatch(localCartData(updatedItem));
    getMyCarts();
  };

  const handleSubtractQty = async (item: CartItem) => {
    if (item.quantity <= 1) return;
    const updatedItem = { ...item, quantity: item.quantity - 1 };
    await dispatch(localCartData(updatedItem));
    getMyCarts();
  };

  const getMyCarts = async () => {
    try {
      if (user && !loading) {
        if (user.role !== USER_ROLE.admin) {
          const res = await dispatch(myCart({})).then((r) => r.payload);
          setData(res);
        }
      } else {
        const t = localCartData();
        setData(t);
      }
    } catch (error) {
      console.error("Error fetching cart data", error);
    }
  };

  const deleteCartF = async (item: CartItem) => {
    await dispatch(deleteCart({ ...item, id: item.id, cartCount }));
    getMyCarts();
  };

  const delCartF = () => {
    if (delCart) {
      deleteCartF(delCart);
      setOpen(false);
      setDelCart(null);
    }
  };

  useEffect(() => {
    getMyCarts();
  }, [user, loading]);

  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="font-bold text-3xl mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.result.map((item: CartItem) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 bg-white shadow-sm relative"
          >
            {item.is_free === 1 && (
              <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-md rotate-[-15deg]">
                FREE
              </span>
            )}
            <Link href={`/product/${item.slug}`}>
              <Image
                src={
                  item.images[0].image.includes("http")
                    ? item.images[0].image
                    : process.env.NEXT_PUBLIC_S3_IMG_URL + item.images[0].image
                }
                alt={item.name}
                width={300}
                height={200}
                className="rounded w-full object-contain max-h-[200px]"
              />
            </Link>

            <div className="mt-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-600">
                {item.variations?.length > 0 &&
                  item.variations.map((v, idx) => (
                    <div key={idx}>
                      <strong>{v.name}:</strong>{" "}
                      {v.options.map((op) => op.name).join(", ")}
                    </div>
                  ))}
              </p>

              <div className="flex justify-between items-center mt-3">
                <p className="text-gray-800 font-medium">
                  ₹
                  {item.discount_price > 0
                    ? item.discount_price
                    : item.regular_price}
                </p>

                <div className="flex items-center gap-2">
                  {item.is_free !== 1 ? (
                    <>
                      <button
                        onClick={() => handleSubtractQty(item)}
                        className="px-3 py-1 border text-lg font-bold"
                      >
                        -
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        onClick={() => handleAddQty(item)}
                        className="px-3 py-1 border text-lg font-bold"
                      >
                        +
                      </button>
                    </>
                  ) : (
                    <span>Qty: 1</span>
                  )}
                </div>
              </div>

              <div className="flex justify-between mt-2">
                <span className="text-black font-semibold">
                  Total: ₹{calculatePrice(item)}
                </span>
                <button
                  onClick={() => {
                    setDelCart(item);
                    setOpen(true);
                  }}
                >
                  <RiDeleteBin6Line className="text-xl text-red-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {data.result.length > 0 && (
        <div className="bg-[#F9F9F9] text-black p-5 mt-10 max-w-md ml-auto">
          <h2 className="font-extrabold text-2xl mb-4">Cart Total</h2>
          <div className="flex justify-between text-lg font-bold mb-5">
            <span>Total</span>
            <span>₹{calculateSubTotal(data.result)}</span>
          </div>
          <Link
            href="/checkout"
            className="bg-amazon_blue text-white py-2 px-4 rounded w-full text-center block"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}

      <DeleteModal setOpen={setOpen} open={open} deleteRecord={delCartF} />
    </div>
  );
};

export default Page;
