import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Learn from "./pages/Learn";
import Practice from "./pages/Practice";
import Projects from "./pages/Projects";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/onboarding",
    element: <div>Onboarding Flow (No bottom nav here!)</div>,
  },
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Learn /> }, // Default view
      { path: "learn", element: <Learn /> },
      { path: "practice", element: <Practice /> },
      { path: "projects", element: <Projects /> },
      { path: "leaderboard", element: <Leaderboard /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
