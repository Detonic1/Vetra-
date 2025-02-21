"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  UserCircle,
  ChevronLeft,
  ChevronRight,
  Database,
  Lock,
  Settings,
  FileText,
  LogOut,
  Sun,
  Moon,
  CreditCard,
  Globe,
  Shield,
  Activity,
} from "lucide-react";
import "../styles/index.css";

export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="relative w-full">
      {/* Only one Nav component here */}
      <nav className={`p-4 flex items-center justify-between ${isDarkMode ? "bg-gray-900" : "bg-red-800"}`}>
      <h1 className="text-white text-xl font-extrabold">Vetra</h1>


        <div className="flex items-center space-x-4">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-white hover:text-gray-200 transition-colors duration-200">
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-white hover:text-gray-200 transition-colors duration-200 p-2 rounded-full hover:bg-gray-600"
            >
              <UserCircle size={32} />
            </button>

            {isDropdownOpen && (
              <div ref={dropdownRef} className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50 dark:bg-gray-800 dark:text-white">
                <div className="space-y-3">
                  <h2 className="font-semibold text-lg">Welcome</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Create an account or login</p>
                  <div className="mt-4 space-y-2">
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Login</button>
                    <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700">
                      Sign Up
                    </button>
                  </div>
                  <button className="w-full flex items-center justify-center text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-500">
                    <LogOut size={20} className="mr-2" /> Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="flex">
        <div
          className={`transition-all duration-300 ease-in-out ${isDarkMode ? "bg-gray-800" : "bg-gray-900"} text-white ${isSidebarOpen ? "w-56" : "w-0"} overflow-hidden`}
          style={{ height: "calc(100vh - 60px)" }}
        >
          {isSidebarOpen && (
            <div className="p-4 space-y-4">
              <h2 className="text-lg font-semibold flex items-center">
                <Database size={20} className="mr-2" /> API
              </h2>
              <li className="flex items-center">
                  <Lock size={18} className="mr-2" />
                  <Link href="/about" className="hover:underline">About</Link>
                </li>
              <ul className="pl-4 mt-2 space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Lock size={18} className="mr-2" />
                  <Link href="/questions" className="hover:underline">Questions</Link>
                </li>
               
              </ul>
            </div>
          )}
        </div>

        <div className="relative flex items-center">
          <div className={`h-full transition-all duration-300 ease-in-out ${isSidebarOpen ? "w-2 bg-gradient-to-b from-gray-700 to-gray-400" : "w-1 bg-gray-500"}`} style={{ height: "calc(100vh - 60px)" }}></div>

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="absolute -right-4 px-2 py-1 bg-gray-700 text-white flex items-center justify-center rounded-full shadow-md hover:bg-gray-600"
          >
            {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        <div className="flex-grow p-4">
          <p className={`${isDarkMode ? "text-white" : "text-gray-700"}`}>Coming Soon...</p>
        </div>
      </div>
    </div>
  );
}
