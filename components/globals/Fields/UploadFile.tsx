"use client";

import React from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { toast } from "react-hot-toast";
import axios from "axios";
import Image from "next/image";

const UploadImage: React.FC <any> = ({
  values,
  setValues,
  customClass,
  index,
  errors,
  isArrayFormat = true,
  deleteFiles,
  setDeleteFiles
  
}) => {
  const updateValues = (key:any, value:any) => {
    console.log(value ,"this is image data");

    setValues((prev:any) => {
      const newImages = [...(prev.images || [])];
      newImages[key] = value;
      return { ...prev, images: newImages };
    });
  };

  const handleMinus = (i:any) => {
    setValues((prev:any) => {
      const newData = { ...prev };
      // Filter out the image at index i
      newData.images = newData.images.filter((_:any, ind:any) => ind !== i);
      return newData;
    });
  };

  const handleFileChange = async (event:any) => {
    const file = event.target.files;
    console.log(file , "this is image files")
    if (!file) return;
    const existingImage = values.images;
    if (existingImage) {
      setDeleteFiles([...deleteFiles,existingImage ])
    }
    const formDat = new FormData();
    formDat.append("file", file);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_ADDRESS}/v1/upload`,
        formDat,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("response.data?.data",response.data?.data?.data?.key);
      
      toast.success("Image uploaded successfully");
      // updateValues(index, { image: response.data?.data?.url });
      updateValues(index, { image:response.data?.data?.data?.key });
    } catch {
      toast.error("Image is not uploaded");
    }
  };

  return (
    <div className={customClass ? customClass : ""}>
      <label className="block mt-6 text-lg font-medium">Images</label>
      <div className="flex items-center gap-2">
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          accept=".jpg,.jpeg,.png,.webp"
          className="cursor-pointer w-full border-2 px-2 py-1 rounded focus:border-primary-300 focus:ring focus:ring-primary-200"
        />
        {values.images?.[index]?.image && (
          <Image
            width={100}
            height={100}
            src={
              values.images[index].image.includes("http")
                ? values.images[index].image
                : process.env.NEXT_PUBLIC_S3_IMG_URL + values.images[index].image
            }
            
            alt="Uploaded Preview"
            className="w-16 h-auto object-cover rounded border"
          />
        )}
        {isArrayFormat &&
          (index === 0 ? (
            <button
              type="button"
              onClick={() => updateValues(values.images.length, { image: "" })}
            >
              <PlusIcon className="h-10 p-1 border-2 rounded hover:bg-[#F9BC60]" />
            </button>
          ) : (
            <button type="button" onClick={() => handleMinus(index)}>
              <MinusIcon className="h-10 p-1 border-2 rounded hover:bg-[#F9BC60]" />
            </button>
          ))}
      </div>
      {errors?.images?.[index] && (
        <p className="text-red-500 mt-1">
          {errors.images[index]}
        </p>
      )}
      {values.is_color === "1" && (
        <div className="mt-5">
          <label className="block text-lg font-medium">Color</label>
          <input
            onChange={(e) =>
              updateValues(index, {
                ...values.images[index],
                color: e.target.value,
              })
            }
            className="block w-11/12 border-2 rounded-lg h-10 px-4 py-3"
          />
          {errors?.images?.[index]?.color_message && (
            <p className="text-red-500 mt-1">
              {errors.images[index].color_message}
            </p>
          )}
        </div>
      )}
    </div>
  );
};




export default UploadImage;



export const setImageErrors = (values:any, setErrors:any) => {
  const newErrors:any = {};
  let is_error = false;
  values.images.forEach((field:any, index:any) => {
 
    console.log(field.image , "this is image");
    
      if (!field.image) {
        is_error = true;
        newErrors[index] = "Image is required";
      }

 
  });
  console.log(newErrors);

  setErrors((prevValues:any) => ({
    ...prevValues,
   images: newErrors 
  }));
  return is_error;
};