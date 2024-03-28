'use client';
import React, { useState, ReactNode } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { SideBarFilter } from '../Filter';

export default function DonorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex h-screen overflow-hidden ">
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header
            donor
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

          <main className="grid justify-between grid-cols-5">
            <div className="min-w-94  ">
              <SideBarFilter />
            </div>
            <div className="overflow-y-auto mx-auto col-start-2 col-span-3  p-2">
              {children}
            </div>
            <div className="left-0">
              <h1>map object</h1>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
