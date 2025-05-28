import React from "react";
import Header from "@/components/Header/Header";
import SideNav from "@/components/SideNav/SideNav";

export function Root({ children }: { children: React.ReactNode }) {
  return (
    <div className="root-container">
      <Header />
      <div className="root-content-wrapper">
        <SideNav />
        <main className="root-main">{children}</main>
      </div>
    </div>
  );
}
