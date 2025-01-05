import React from "react";
import { Menu, ChevronDown } from "lucide-react";

const Header = ({ onMenuClick }) => {
  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-full px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={onMenuClick}
              >
                <Menu size={24} />
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <div className="">
                <img
                  src="https://via.placeholder.com/150x50"
                  alt="Logo"
                  className="h-12 w-12 rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-blue-500">
                  OPERATIONS ADMIN
                </span>
                <div className="flex flex-row">
                  <span className="text-sm text-gray-600">Rahul Lad </span>
                  <ChevronDown size={16} className="text-gray-400 mt-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
