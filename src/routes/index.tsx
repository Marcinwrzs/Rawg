import React from "react";
const Home = React.lazy(() => import("@/pages/Home/Home"));
const NotFound = React.lazy(() => import("@/pages/NotFount/NotFound"));

export const routes = [
  {
    index: true,
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Home />
      </React.Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <NotFound />
      </React.Suspense>
    ),
  },
];
