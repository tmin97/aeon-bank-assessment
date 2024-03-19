import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Calculator from "~/answers/challenge1";
import Navbar from "~/answers/challenge2";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* For Challenge 1 */}
    {/* <Calculator /> */}
    {/* For Challenge 2 */}
    {/* <Navbar /> */}
    <Toaster richColors position="top-center" />
  </React.StrictMode>
);
