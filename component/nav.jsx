import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Next.js optimized image

export default function Nav() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 16px",  // Reduced padding for a smaller navbar
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        width: "100%",
        backgroundColor: "#2C3E50",  // Professional dark blue color
      }}
    >
      {/* Logo */}
      <div>
        <Image src="/images/logo.png" alt="Logo" width={70} height={50} />
      </div>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "25px" }}>
        <h1 style={{ margin: "0", fontSize: "16px", fontWeight: "500", color: "#ECF0F1" }}>
          <Link href="/">Home</Link>
        </h1>
        <h1 style={{ margin: "0", fontSize: "16px", fontWeight: "500", color: "#ECF0F1" }}>
          <Link href="/about">About</Link>
        </h1>
        <h1 style={{ margin: "0", fontSize: "16px", fontWeight: "500", color: "#ECF0F1" }}>
          <Link href="/questions">Vision</Link>
        </h1>
      </div>
    </div>
  );
}
