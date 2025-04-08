"use client";

import { FcClearFilters } from "react-icons/fc";
import React, { useEffect, useState, Suspense } from "react";
import ProductCard from "@/components/product/Card";
import { getProductForShop } from "@/store/actions/admin/product";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import Pagination from "@/components/globals/Pagination";
import CardSkeleton from "@/components/product/CardSkelton";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { FaTimes } from "react-icons/fa";
import SideBar from "@/components/product/SideBar";
import ContactSupport from "@/components/home/ContactSupport";

interface Product {
  id: string;
  [key: string]: any;
}

interface ListCardsContentProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  minPrice: string;
  setMinPrice: (value: string) => void;
  maxPrice: string;
  setMaxPrice: (value: string) => void;
  clearFilters: () => void;
  list: (page: number, searchParams: URLSearchParams, searchTerm?: string) => void;
  tableData: Product[];
  totalRecords: number;
  totalPage: number;
  currentPage: number;
  apiHit: boolean;
  showPagination: number[];
  showSideBar: boolean;
  setShowSideBar: (value: boolean) => void;
  pathname: string;
}

const ListCards = (): any => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const clearFilters = () => {
    setSearchTerm("");
    setMinPrice("");
    setMaxPrice("");
  };

  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const company = typeof params.company === "string" ? params.company : "";
  const model = typeof params.model === "string" ? params.model : "";
  const year = typeof params.year === "string" ? params.year : "";

  const [apiHit, setApiHit] = useState<boolean>(false);
  const [tableData, setTableData] = useState<Product[]>([]);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [totalPage, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showPagination, setShowPagination] = useState<number[]>([]);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const list = async (
    page: number,
    searchParams: URLSearchParams,
    search?: string
  ): Promise<void> => {
    try {
      setApiHit(false);
      setCurrentPage(page);

      const category = searchParams.get("category");

      const data: Record<string, any> = {
        page,
        company,
        model,
        category,
        year,
      };
      if (search) data.search = search;

      const res = await dispatch(getProductForShop(data)).unwrap();

      if (res.success) {
        setApiHit(true);
        setTableData((res.data as any).result);
        setTotalRecords(res.data.totalRecords);
        setShowPagination(res.data.showPagination);
        setTotalPages(res.data.totalPage);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ListCardsContent
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        clearFilters={clearFilters}
        list={list}
        tableData={tableData}
        totalRecords={totalRecords}
        totalPage={totalPage}
        currentPage={currentPage}
        apiHit={apiHit}
        showPagination={showPagination}
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
        pathname={pathname}
      />
    </Suspense>
  );
};

const ListCardsContent: React.FC<ListCardsContentProps> = ({
  searchTerm,
  setSearchTerm,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  clearFilters,
  list,
  tableData,
  totalRecords,
  totalPage,
  currentPage,
  apiHit,
  showPagination,
  showSideBar,
  setShowSideBar,
  pathname,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = useParams();

  const company = typeof params.company === "string" ? params.company : "";
  const model = typeof params.model === "string" ? params.model : "";
  const year = typeof params.year === "string" ? params.year : "";

  const category = searchParams.get("category");

  useEffect(() => {
    list(1, searchParams);
  }, [searchParams]);

  const removeFilter = (key: string) => {
    const updatedParams = new URLSearchParams(searchParams.toString());
    updatedParams.delete(key);
    router.push(`?${updatedParams.toString()}`);
  };

  const removeParams = (key: string) => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const keyIndex = pathSegments.indexOf(key);
    if (keyIndex !== -1) {
      const newPath = `/${pathSegments.slice(0, keyIndex).join("/")}`;
      router.push(newPath);
    }
  };

  return (
    <div className="grid lg:grid-cols-6 grid-cols-1 gap-4 bg-white relative">
      <SideBar
        list={list}
        showSideBar={showSideBar}
        setShowSideBar={() => setShowSideBar(!showSideBar)}
      />
      <div className="col-span-5">
        <div className="relative pb-7 mb-5 sm:mb-0 sm:pb-0">
          <button
            onClick={() => setShowSideBar(!showSideBar)}
            className="absolute right-2 z-10 bg-blue-950 rounded-md gap-2 font-seri text-white flex sm:relative sm:left-[90%] sm:bottom-2 lg:hidden border border-blue-950 px-3 py-1"
          >
            <FcClearFilters /> Filter
          </button>
        </div>

        {/* Filter tags removed for now but can be uncommented if needed */}

        {(!apiHit || tableData.length > 0) && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-3">
              {apiHit
                ? tableData.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                : Array.from({ length: 10 }).map((_, index) => (
                    <CardSkeleton key={index} />
                  ))}
            </div>
            <Pagination
              totalRecords={totalRecords}
              totalPages={totalPage}
              currentPage={currentPage}
              setCurrentPage={(page: number) => list(page, searchParams)}
              limit={4}
              showPagination={showPagination}
              tableDataLength={tableData.length}
            />
          </>
        )}

        {apiHit && tableData.length === 0 && (
          <ContactSupport
            innerDivClass="flex flex-col justify-center text-center md:text-center px-6"
            containerClass="w-full flex flex-col sm:flex-col justify-around gap-8 bg-gray-50 shadow-lg rounded-xl p-8"
          />
        )}
      </div>
    </div>
  );
};

export default ListCards;
