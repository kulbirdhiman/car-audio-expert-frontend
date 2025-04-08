"use client";
import React, { useState, useEffect } from "react";
import { Search, XCircle, Filter, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { getDepartment } from "@/store/actions/admin/department";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import { DEPARTMENT_VIEW } from "@/app/constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface SideBarProps {
  showSideBar: boolean;
  setShowSideBar: (value: boolean) => void;
  list: (page: number, searchParams: URLSearchParams, searchTerm: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ showSideBar, setShowSideBar, list }) => {
  const [departments, setDepartments] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { company, model, year, category } = useParams();

  useEffect(() => {
    setSelectedDepartment(searchParams.get("category") || null);

    const fetchDepartments = async () => {
      try {
        const res = await dispatch(getDepartment({ is_view: DEPARTMENT_VIEW.YES })).unwrap();
        if (res.success) {
          setDepartments(res?.data?.result ?? []);
        }
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, [dispatch, searchParams]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    list(1, searchParams, term);
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
    router.push(`${pathname}`);
  };

  const filteredDepartments = departments;

  return (
    <>
      {/* Mobile Floating Filter Button */}
      <button
        className="lg:hidden fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50"
        onClick={() => setIsMobileOpen(true)}
      >
        <Filter />
      </button>

      {/* Desktop Sidebar */}
      <aside className={`${showSideBar ? "md:block" : "hidden"} absolute z-20 lg:relative lg:block bg-white shadow-lg border-gray-200 p-5 space-y-4 h-screen overflow-y-auto border`}>
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
            <button onClick={() => setIsMobileOpen(false)} className="absolute top-3 right-3 text-gray-500">
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
          <h1 className="text-xl text-black">Filter</h1>
          <button onClick={handleClearFilters} className="text-sm flex items-center gap-1 font-bold text-red-500 hover:text-red-700">
            <XCircle size={16} />
            Clear Filters
          </button>
        </div>

        {(company || model || category || year) && (
          <div className="flex gap-3 flex-wrap bg-white my-2 p-2">
            {category && (
              <button onClick={() => removeFilter("category")} className="flex items-center px-3 py-1 bg-blue-950 rounded-full text-white">
                {category}
                <FaTimes size={14} className="ml-2" />
              </button>
            )}
            {company && (
              <button onClick={() => removeFilter("company")} className="flex items-center px-3 py-1 bg-blue-950 rounded-full text-white">
                {company}
                <FaTimes size={14} className="ml-2" />
              </button>
            )}
            {model && (
              <button onClick={() => removeFilter("model")} className="flex items-center px-3 py-1 bg-blue-950 rounded-full text-white">
                {model}
                <FaTimes size={14} className="ml-2" />
              </button>
            )}
            {year && (
              <button onClick={() => removeFilter("year")} className="flex items-center px-3 py-1 bg-blue-950 rounded-full text-white">
                {year}
                <FaTimes size={14} className="ml-2" />
              </button>
            )}
          </div>
        )}

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search"
            className="w-full border pl-10 pr-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none border-gray-300"
          />
        </div>

        {/* Department List */}
        <ul className="space-y-2 mt-3">
          <motion.li
            whileTap={{ scale: 0.9 }}
            className="flex border items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg p-2"
            onClick={handleClearFilters}
          >
            <input
              type="checkbox"
              checked={!selectedDepartment}
              onChange={handleClearFilters}
              className="w-4 h-4 accent-blue-500 cursor-pointer"
            />
            <span className={`text-sm ${!selectedDepartment ? "font-medium text-blue-600" : "text-gray-800"}`}>All</span>
          </motion.li>

          {filteredDepartments.length > 0 ? (
            filteredDepartments.map((department) => (
              <motion.li
                whileTap={{ scale: 0.9 }}
                key={department.id}
                className="flex border items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg p-2"
                onClick={() => handleDepartmentClick(department.slug)}
              >
                <input
                  type="checkbox"
                  checked={selectedDepartment === department.slug}
                  onChange={() => handleDepartmentClick(department.slug)}
                  className="w-4 h-4 accent-blue-500 cursor-pointer"
                />
                <span className={`text-sm ${selectedDepartment === department.slug ? "font-medium text-blue-600" : "text-gray-800"}`}>
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
