"use client"; 
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  UserCircle,
  ChevronLeft,
  ChevronRight,
  Database,
  Lock,
  LogOut,
  Sun,
  Moon,
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
      {/* Navbar */}
      <nav className={`p-4 flex items-center justify-between ${isDarkMode ? "bg-gray-900" : "bg-red-800"}`}>
        <h1 className="text-white text-xl font-extrabold">Vetra</h1>

        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-white hover:text-gray-200 transition-colors duration-200 p-2 rounded-full hover:bg-gray-600"
            >
              <UserCircle size={32} />
            </button>

            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50 dark:bg-gray-800 dark:text-white"
              >
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
        {/* Sidebar */}
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
                  <Link href="/questions" className="hover:underline">Vision</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Sidebar Toggler */}
        <div className="relative flex items-center">
          <div
            className={`h-full transition-all duration-300 ease-in-out ${isSidebarOpen ? "w-2 bg-gradient-to-b from-gray-700 to-gray-400" : "w-1 bg-gray-500"}`}
            style={{ height: "calc(100vh - 60px)" }}
          ></div>

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="absolute -right-4 px-2 py-1 bg-gray-700 text-white flex items-center justify-center rounded-full shadow-md hover:bg-gray-600"
          >
            {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-grow p-4">
          <h2 className={`${isDarkMode ? "text-white" : "text-gray-700"} text-2xl font-semibold`}>
            Welcome to Vetra
          </h2>
          <p className={`${isDarkMode ? "text-white" : "text-gray-700"} mt-4`}>
            Vetra is a leading cybersecurity company, focused on providing cutting-edge solutions to protect businesses and individuals from ever-evolving online threats. Our goal is to ensure that your digital presence remains secure and efficient, no matter what.
          </p>
          <div className="mt-6">
            <h3 className={`${isDarkMode ? "text-white" : "text-gray-700"} text-xl font-semibold`}>
              Our Mission
            </h3>
            <p className={`${isDarkMode ? "text-white" : "text-gray-700"} mt-2`}>
              At Vetra, our mission is to empower individuals and organizations by providing innovative cybersecurity solutions that are proactive, adaptive, and always evolving to stay one step ahead of cyber threats.
            </p>
          </div>
          <div className="mt-6">
            <h3 className={`${isDarkMode ? "text-white" : "text-gray-700"} text-xl font-semibold`}>
              Our Services
            </h3>
            <ul className="mt-2 space-y-2">
              <li className={`${isDarkMode ? "text-white" : "text-gray-700"}`}>- Threat Detection & Prevention</li>
              <li className={`${isDarkMode ? "text-white" : "text-gray-700"}`}>- Data Protection & Encryption</li>
              <li className={`${isDarkMode ? "text-white" : "text-gray-700"}`}>- Vulnerability Assessment & Management</li>
              <li className={`${isDarkMode ? "text-white" : "text-gray-700"}`}>- Security Awareness Training</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
