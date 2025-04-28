"use client"
import React, { Suspense } from "react";
import dynamic from "next/dynamic";

// ✅ Dynamically import the client component and disable SSR
const ListCards = dynamic(() => import("@/components/product/ListCards"), {
  ssr: false,
});

const Page = () => {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <ListCards />
    </Suspense>
  );
};

export default Page;
