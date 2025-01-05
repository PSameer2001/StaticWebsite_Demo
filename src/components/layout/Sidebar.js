import React from "react";
import {
  LayoutGrid,
  Users,
  BarChart3,
  Package,
  Database,
  Calendar,
  FileText,
  Gift,
  UserCheck,
  Wrench,
  Banknote,
  HandCoins,
} from "lucide-react";
import { NavLink } from "react-router";

const MenuItem = ({ icon: Icon, text, url }) => (
  <NavLink
    to={url}
    className={({ isActive }) => (isActive ? "bg-gray-700 text-white" : "text-gray-400 hover:bg-gray-700 hover:text-white")}
  >
    <div
      className={`flex items-center space-x-3 px-4 py-2 text-sm`}
    >
      <Icon size={18} />
      <span>{text}</span>
    </div>
  </NavLink>
);

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutGrid, text: "MLP Dashboard", url: "/dashboard" },
    { icon: LayoutGrid, text: "RLP Dashboard", url: "/dashboard" },
    { icon: Wrench, text: "View Mechanic", url: "/" },
    { icon: Users, text: "View Retailer", url: "/" },
    { icon: BarChart3, text: "User Insights", url: "/" },
    { icon: Database, text: "SKU-wise Data", url: "/" },
    { icon: Package, text: "Slab-based Consumption", url: "/" },
    { icon: Calendar, text: "View Redemption", url: "/" },
    { icon: FileText, text: "View Expiry", url: "/" },
    { icon: Gift, text: "View Transaction", url: "/" },
    { icon: Banknote, text: "View E-Transfer", url: "/" },
    { icon: HandCoins, text: "Rewards Catalogue", url: "/" },
    { icon: UserCheck, text: "User Activity", url: "/" },
    { icon: LayoutGrid, text: "RLP Dashboard", url: "/dashboard" },
  ];

  return (
    <div className="w-44 bg-gray-800">
      <div className="p-4 sticky top-0 z-10 bg-gray-800">
        <img
          src="https://via.placeholder.com/150x50"
          alt="Logo"
          className="h-12"
        />
        <label className="text-white">Engine Club</label>
      </div>
      <div className="mt-4 text-gray-400 text-xs px-4">MENU</div>
      <nav className="mt-2 h-2/3 overflow-y-auto">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            text={item.text}
            url={item.url}
          />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
