import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
  NavLink,
} from "react-router-dom";
import { NiivueCanvasForTest } from "./NiivueCanvasForPlaywrightTest.tsx";
import ReadmeExample from "./ReadmeExample.tsx";
import ModulateScalar from "./demos/ModulateScalar.tsx";
import Atlas from "./demos/Atlas.tsx";
import Viewer from "./viewer.tsx"; // Import the Viewer component
import "./index.css";

// Define the routes
const nonRootRoutes: RouteObject[] = [
  {
    path: "/readme_example",
    element: <Viewer />,
  },
  {
    path: "/modulate_scalar",
    element: <ModulateScalar />,
  },
  {
    path: "/atlas",
    element: <Atlas />,
  },
  {
    path: "/playwright_harness",
    element: <NiivueCanvasForTest />,
  },
];

// Create the router
const router = createBrowserRouter([
  ...nonRootRoutes,
  {
    path: "/", // This path will load the Viewer component
    element: <Viewer />, // Use the Viewer component directly
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
