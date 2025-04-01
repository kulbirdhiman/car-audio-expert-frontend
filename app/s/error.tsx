"use client"; // Required for error boundaries

import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Error caught:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-red-500">Oops! Something went wrong.</h1>
      <p className="text-gray-600">{error.message}</p>
      <button 
        onClick={reset} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
        Try Again
      </button>
    </div>
  );
}
