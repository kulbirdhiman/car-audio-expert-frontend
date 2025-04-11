"use client";
import React, { useState, useEffect } from "react";
import { Search, XCircle, Filter, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { getDepartment } from "@/store/actions/admin/department";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { DEPARTMENT_VIEW } from "@/app/constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface Department {
  id: string;
  slug: string;
  name: string;
}

interface SideBarProps {
  showSideBar: boolean;
  setShowSideBar: (value: boolean) => void;
  list: (page: number, searchParams: URLSearchParams, searchTerm: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ showSideBar, setShowSideBar, list }) => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const paramList = params?.slug as string[] || [];
  const company = paramList[0] || "";
  const model = paramList[1] || "";
  const year = paramList[2] || "";
  const categoryParam = searchParams.get("category");

  useEffect(() => {
    setSelectedDepartment(categoryParam || null);

    const fetchDepartments = async () => {
      try {
        const res = await dispatch(getDepartment({ is_view: DEPARTMENT_VIEW.YES })).unwrap();
        if (res.success) {
          setDepartments((res?.data as any)?.result ?? []);
        }
      } catch (error) {
        console.error("Error fetching departments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, [dispatch, categoryParam]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      list(1, searchParams, searchTerm);
    }, 300);
    return () => clearTimeout(timeout);
  }, [searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleDepartmentClick = (departmentSlug: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (selectedDepartment === departmentSlug) {
      params.delete("category");
      setSelectedDepartment(null);
    } else {
      params.set("category", departmentSlug);
      setSelectedDepartment(departmentSlug);
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  const removeFilter = (key: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleClearFilters = () => {
    setSelectedDepartment(null);
    router.push("/products"); // Navigate to only products page
  };

  return (
    <>
      {/* Mobile Floating Filter Button */}
      <button
        className="lg:hidden fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50"
        aria-label="Open Filters"
        onClick={() => setIsMobileOpen(true)}
      >
        <Filter />
      </button>

      {/* Desktop Sidebar */}
      <aside
        className={`${showSideBar ? "md:block" : "hidden"} absolute z-20 lg:relative lg:block bg-white   p-5 space-y-4 h-screen overflow-y-auto `}
      >
        {renderSidebarContent()}
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 bg-white shadow-lg w-3/4 sm:w-1/2 h-full p-5 overflow-y-auto"
          >
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-3 right-3 text-gray-500"
              aria-label="Close Filters"
            >
              <X size={24} />
            </button>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Filters</h2>
            {renderSidebarContent()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );

  function renderSidebarContent() {
    return (
      <>
        <div className="flex justify-between items-center">
          {/* <h1 className="text-2xl text-black">Filter</h1> */}
          {/* <button
            onClick={handleClearFilters}
            className="text-sm flex items-center gap-1 text-red-500 hover:text-red-700"
          >
            <XCircle size={16} />
            Clear Filters
          </button> */}
        </div>

        {(company || model  || year) && (
        <div className="flex gap-3 overflow-x-scroll hide-scrollbar bg-white my-2 p-2">

           
            {company && (
              <button
                onClick={() => removeFilter("company")}
                className="flex items-center px-2 py-1 bg-gray-600 rounded-full text-white"
              >
                {company}
                <FaTimes size={14} className="ml-2" />
              </button>
            )}
            {model && (
              <button
                onClick={() => removeFilter("model")}
                className="flex items-center px-3 py-1 bg-gray-600 rounded-full text-white"
              >
                {model}
                <FaTimes size={14} className="ml-2" />
              </button>
            )}
            {year && (
              <button
                onClick={() => removeFilter("year")}
                className="flex items-center px-3 py-1 bg-gray-600 rounded-full text-white"
              >
                {year}
                <FaTimes size={14} className="ml-2" />
              </button>
            )}
          </div>
        )}

        {/* All Button */}
        <ul className="space-y-2 mt-3">
          <motion.li
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg p-2"
            onClick={handleClearFilters}
          >
            <input
              type="radio"
              checked={!selectedDepartment}
              onChange={handleClearFilters}
              className="w-4 h-4 accent-blue-500 cursor-pointer"
            />
            <span className={`text-sm ${!selectedDepartment ? "font-medium text-blue-600" : "text-gray-800"}`}>
              All
            </span>
          </motion.li>

          {/* Department List */}
          {loading ? (
            <p className="text-sm text-gray-500">Loading departments...</p>
          ) : departments.length > 0 ? (
            departments.map((department) => (
              <motion.li
                whileTap={{ scale: 0.9 }}
                key={department.id}
                className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg p-2"
                onClick={() => handleDepartmentClick(department.slug)}
              >
                <input
                  type="radio"
                  checked={selectedDepartment === department.slug}
                  onChange={() => handleDepartmentClick(department.slug)}
                  className="w-4 h-4 rounded-full accent-blue-500 cursor-pointer"
                />
                <span
                  className={`text-sm ${
                    selectedDepartment === department.slug ? "font-medium text-blue-600" : "text-gray-800"
                  }`}
                >
                  {department.name}
                </span>
              </motion.li>
            ))
          ) : (
            <p className="text-sm text-gray-500">No departments found.</p>
          )}
        </ul>
      </>
    );
  }
};

export default SideBar;
