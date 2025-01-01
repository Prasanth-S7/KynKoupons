import { type LucideIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { House, Ticket, Trophy, Award } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom"

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
  const location = useLocation();
  return (
    <SidebarGroup>
      <div className={`flex space-x-3 rounded-xl py-2 items-center pl-3 mb-2 cursor-pointer ${location.pathname === "/" ? "bg-white/10 text-black" : ""}`} onClick={() => navigate("/")}>
        <div>
          <House></House>
        </div>
        <SidebarGroupLabel className="truncate text-white text-md">Home</SidebarGroupLabel>
      </div>
      {/* <div className="flex space-x-3 items-center pl-3 mb-5 cursor-pointer " onClick={() => navigate("/insights")}>
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
      </div> */}
      {/* <div className={`flex space-x-3 rounded-xl py-2 items-center pl-3 mb-5 cursor-pointer ${location.pathname === "/create-coupon" ? "bg-white/10 text-black" : ""}`} onClick={() => navigate("/create-coupon")}>
        <div className="col-span-2">
          <Ticket></Ticket>
        </div>
        <SidebarGroupLabel className="col-span-6 truncate text-white text-md">Create Coupon</SidebarGroupLabel>
      </div> */}
      <div className={`flex space-x-3 rounded-xl py-2 items-center pl-3 mb-2 cursor-pointer ${location.pathname === "/achievements" ? "bg-white/10 text-black" : ""}`} onClick={() => navigate("/achievements")}>
        <div className="col-span-2">
          <Trophy></Trophy>
        </div>
        <SidebarGroupLabel className="col-span-6 truncate text-white text-md">Achievements</SidebarGroupLabel>
      </div>
      <div className={`flex space-x-3 rounded-xl py-2 items-center pl-3 mb-2 cursor-pointer ${location.pathname === "/titles" ? "bg-white/10 text-black" : ""}`} onClick={() => navigate("/titles")}>
        <div className="col-span-2">
          <Award></Award>
        </div>
        <SidebarGroupLabel className="col-span-6 truncate text-white text-md">Titles</SidebarGroupLabel>
      </div>
      <div className={`flex space-x-3 rounded-xl py-2 items-center pl-3 mb-2 cursor-pointer ${location.pathname === "/levels" ? "bg-white/10 text-black" : ""}`} onClick={() => navigate("/levels")}>
        <div className="col-span-2">
          <Ticket></Ticket>
        </div>
        <SidebarGroupLabel className="col-span-6 truncate text-white text-md">Levels</SidebarGroupLabel>
      </div>
      <div className={`flex space-x-3 rounded-xl py-2 items-center pl-3 mb-2 cursor-pointer ${location.pathname === "/leaderboard" ? "bg-white/10 text-[#7F8487]" : ""}`} onClick={() => navigate("/leaderboard")}>
        <div className="col-span-2">
          <svg width="30px" height="30px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#D3D3D3">
            <path d="M15 21H9V12.6C9 12.2686 9.26863 12 9.6 12H14.4C14.7314 12 15 12.2686 15 12.6V21Z" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M20.4 21H15V18.1C15 17.7686 15.2686 17.5 15.6 17.5H20.4C20.7314 17.5 21 17.7686 21 18.1V20.4C21 20.7314 20.7314 21 20.4 21Z" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M9 21V16.1C9 15.7686 8.73137 15.5 8.4 15.5H3.6C3.26863 15.5 3 15.7686 3 16.1V20.4C3 20.7314 3.26863 21 3.6 21H9Z" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M10.8056 5.11325L11.7147 3.1856C11.8314 2.93813 12.1686 2.93813 12.2853 3.1856L13.1944 5.11325L15.2275 5.42427C15.4884 5.46418 15.5923 5.79977 15.4035 5.99229L13.9326 7.4917L14.2797 9.60999C14.3243 9.88202 14.0515 10.0895 13.8181 9.96099L12 8.96031L10.1819 9.96099C9.94851 10.0895 9.67568 9.88202 9.72026 9.60999L10.0674 7.4917L8.59651 5.99229C8.40766 5.79977 8.51163 5.46418 8.77248 5.42427L10.8056 5.11325Z" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </div>
        <SidebarGroupLabel className="col-span-6 truncate text-white text-md">Leaderboard</SidebarGroupLabel>
      </div>
    </SidebarGroup>
  );
}
