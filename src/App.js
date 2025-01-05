import React, { useEffect, useState } from "react";
import Body from "./components/layout/Body";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import { BrowserRouter } from "react-router";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <BrowserRouter>
        <div className="max-h-screen flex overflow-hidden">
          {isSidebarOpen && <Sidebar />}
          <div className="flex-1">
            <Header onMenuClick={toggleSidebar} />
            <main className="flex-1 p-6 bg-gray-50 max-h-screen overflow-y-auto">
              <Body />
            </main>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
