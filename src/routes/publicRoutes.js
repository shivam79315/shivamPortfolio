import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Skelton from "../components/Skelton/Skelton"; // Correct spelling for Skeleton
import CV from "../components/CV/CV";

// Lazy load the Home component
const Home = lazy(() => import("../components/Home/Home"));

const PublicRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show Skeleton for at least 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <Suspense fallback={<Skelton />}>
      {isLoading ? (
        <Skelton />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Skelton" element={<Skelton />} />
          <Route path="/cv" element={<CV />} />
          {/* Add other routes here */}
        </Routes>
      )}
    </Suspense>
  );
};

export default PublicRoutes;
