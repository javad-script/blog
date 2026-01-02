import { Aside } from "@/app/(main)/page";
import ArticleCard from "@/components/ArticleCard";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="relative my-container grid grid-rows-[1fr-auto] grid-cols-1 lg:grid-rows-1 lg:grid-cols-[1fr_auto] gap-6 my-8">
        <div className="w-full lg:w-full relative space-y-6 min-h-[calc(100svh-168px)]">
          {/* Contents */}
          {children}
        </div>
        <Aside />
      </main>
      <Footer />
    </>
  );
}
