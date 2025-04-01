"use client";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import TabComponent from "./TabComponet";

const ProductSection = dynamic(() => import("./Product"), { ssr: false });
// const TabComponent = dynamic(() => import("../globals/TabComponent"), { ssr: false });

const LightingSection= () => {
  const [data, setData] = useState<any>({});
  const [apiHit, setApiHit] = useState(false);

//   const list = useCallback(async () => {
//     try {
//       const res = await dispatch(getAudioProduct({})).unwrap();
//       if (res.success) {
//         setApiHit(true);
//         setData(res.data.result);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     list();
//   }, [list]);

  const tabDataa = useMemo(() => [
    { id: 2, label: "Electrical", content: <ProductSection  /> },
    { id: 3, label: "smart Lamps", content: <ProductSection  /> },
    // { id: 1, label: "Amplifier's", content: <ProductSection data={data?.amplifier} img={"/k_play.jpg"} /> },
    // { id: 4, label: "SubBoofer Box's", content: <ProductSection data={data?.subBooferBox} img={"/boofer.jpg"} /> },
  ], [data]);

  return (
    <div className="min-h-[620px]"> {/* Prevents shifting */}
       <TabComponent title="Lighting & Electrical" tabs={tabDataa} />
    </div>
  );
};

export default LightingSection;
