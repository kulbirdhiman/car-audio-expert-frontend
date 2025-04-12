"use client";
import React, { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { checkVariations } from "@/store/actions/admin/variation";
import VariationsForAddOn from "./VariationsForAddOn";
import { IN_STOCK } from "@/app/constants";

interface ImageType {
  image: string;
}

interface ExtraProduct {
  id: number;
  name: string;
  wholesale_price?: number;
  in_stock: number;
  images: ImageType[];
  department_id: number;
  category_id: number;
}

interface VariationType {
  id: number;
  [key: string]: any;
}

interface AddOnProps {
  extras: ExtraProduct[];
  setAddOns: React.Dispatch<React.SetStateAction<any[]>>;
  addOns: any[];
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function SampleNextArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const AddOn: React.FC<AddOnProps> = ({ extras = [], setAddOns, addOns }) => {
  const [errors, setErrors] = useState<Record<string, any>>({});
  const [variationData, setVariationData] = useState<VariationType[]>([]);
  const [variation, setVariation] = useState<VariationType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentData, setCurrentData] = useState<Partial<ExtraProduct>>({});

  const dispatch = useDispatch<AppDispatch>();

  const handleCheckboxChange = async (data: ExtraProduct) => {
    console.log(data);
    setCurrentData(data);

    if (!addOns.some((r) => r.id === data.id)) {
      const checkData = await checkVariationData(data);
      if (checkData && checkData.length > 0) return;
    }

    setAddOns((prev) => {
      if (prev.some((r) => r.id === data.id)) {
        return prev.filter((item) => item.id !== data.id);
      } else {
        return [
          ...prev,
          {
            ...data,
            quantity: 1,
            variations: variation,
            product_id: data.id,
          },
        ];
      }
    });
    setVariation([]);
  };

  const checkVariationData = async (data: ExtraProduct) => {
    const variations = await dispatch(
      checkVariations({
        product_id: data.id,
        department_id: data.department_id,
        category_id: data.category_id,
        variation_ids: variation.map((v) => v.id),
      })
    );

    const variationList = (variations.payload as any).data.variation;

    if (variationList.length > 0) {
      setVariationData(variationList);
      setIsOpen(true);
      return variationList;
    }
  };

  const addOnVariations = useMemo(() => variation, [variation]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 rounded-lg bg-white m-0 p-0"></div>
    ),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1210,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 618,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <>
      <div className="dark:text-black  p-2">
        <h1 className="font-medium font-sans text-xl">Add On</h1>
        <VariationsForAddOn
          setErrors={setErrors}
          currentData={currentData}
          handleCheckboxChange={handleCheckboxChange}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          errors={errors}
          setVariation={setVariation}
          variation={variation}
          variationData={variationData}
        />
        <div className="relative w-full">
          <div className="slider-container px-5 md:w-full mx-auto">
            <Slider {...settings}>
              {extras.map((product, index) => (
                <div key={index}>
                  <div className="w-[130px] p-3 flex flex-col justify-between rounded-xl relative">
                    <Image
                      src={
                        product.images[0].image.includes("http")
                          ? product.images[0].image
                          : process.env.NEXT_PUBLIC_S3_IMG_URL +
                            product.images[0].image
                      }
                      alt={product.name}
                      width={500}
                      height={200}
                      className="w-full h-[70px] object-contain mb-2"
                    />
                    <p className="text-center   line-clamp-1 text-sm">
                      {product.name}
                    </p>
                    <h1 className="text-base font-avenir-bold mb-1 text-green-600">
                      ${product.wholesale_price ?? "--"}
                    </h1>
                    {product.in_stock !== IN_STOCK ? (
                      <p className="text-red-500 absolute right-0 top-[5px] font-bold text-sm text-center">
                        Out of Stock
                      </p>
                    ) : (
                      <input
                        disabled={product.in_stock !== IN_STOCK}
                        type="checkbox"
                        className="absolute h-4 w-4 right-0 top-[5px]"
                        checked={addOns.some((r) => r.id === product.id)}
                        onChange={() => handleCheckboxChange(product)}
                      />
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOn;
