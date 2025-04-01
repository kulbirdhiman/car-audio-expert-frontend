"use client"
import React, { useState, useEffect } from "react";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to change loading state after 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup function
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>Page Content</p>}
    </div>
  );
};

export default Page;
