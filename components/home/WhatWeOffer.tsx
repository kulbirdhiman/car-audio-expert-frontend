"use client";
import React, { useEffect, useState } from "react";
import { getWeeklyHighlights } from "@/store/actions/home";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import TabComponent from './TabComponet';
import ProductCard from './Card';

const WhatWeOffer = () => {
  const [data, setData] = useState<any>({});
  const [apiHit, setApiHit] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const list = async () => {
    try {
      const res = await dispatch(getWeeklyHighlights({})).unwrap();

      if (res.success) {
        console.log("res.data.result", res?.data?.result);
        setApiHit(true);
        setData(res.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    list();
  }, []);

  const tabDataa = [
    {
      id: 1,
      label: "Android stereo's",
      content: (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {(data?.android?.data ?? []).map((product: any, idx: number) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      ),
    },
    {
      id: 2,
      label: "Linux headunit's",
      content: (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {(data?.linux?.data ?? []).map((product: any, idx: number) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      ),
    },
    {
      id: 3,
      label: "Carplay Module's",
      content: (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {(data?.car_play?.data ?? []).map((product: any, idx: number) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="w-[96%] mx-auto p-6">
      {apiHit ? (
        <TabComponent
          title="What We Offer"
          tabs={tabDataa}
          TabClass="float-left flex gap-4"
          TabComponentClass="md:flex justify-between mb-2"
        />
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
    </div>
  );
};

export default WhatWeOffer;
