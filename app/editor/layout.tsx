import { SidebarLayout } from "@/component/Sidebar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
  <div className="w-full flex">
    <SidebarLayout/>
    {children}
    </div>
  )
}