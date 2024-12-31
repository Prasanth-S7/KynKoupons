"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";
import React from "react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { House, Ticket, Search, FileText } from "lucide-react";
import {useNavigate} from "react-router-dom" 

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {

  const navigate = useNavigate();
  return (
    <SidebarGroup>
      <div className="flex space-x-3 items-center pl-3 mb-5 cursor-pointer" onClick={() => navigate("/")}>
        <div>
          <House></House>
        </div>
        <SidebarGroupLabel className="truncate text-white text-md">Home</SidebarGroupLabel>
      </div>
      <div className="flex space-x-3 items-center pl-3 mb-5 cursor-pointer " onClick={() => navigate("/insights")}>
        <div className="col-span-2">
          <Search></Search>
        </div>
        <SidebarGroupLabel className="col-span-6 truncate text-white text-md">Insights</SidebarGroupLabel>
      </div>
      <div className="flex space-x-3 items-center pl-3 mb-5 cursor-pointer" onClick={() => navigate("/reports")}>
        <div className="col-span-2">
          <FileText></FileText>
        </div>
        <SidebarGroupLabel className="col-span-6 truncate text-white text-md">Reports</SidebarGroupLabel>
      </div>
      <div className="flex space-x-3 items-center pl-3 mb-5 cursor-pointer" onClick={() => navigate("/create-coupon")}>
        <div className="col-span-2">
          <Ticket></Ticket>
        </div>
        <SidebarGroupLabel className="col-span-6 truncate text-white text-md">Create Coupon</SidebarGroupLabel>
      </div>
    </SidebarGroup>
  );
}
