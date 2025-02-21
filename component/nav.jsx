import React from 'react';
import Link from 'next/link';


export default function Nav() {
  return (
    <div className="nav-container">
      <h1><Link href="/">Home</Link></h1>
      <h1><Link href="about">About</Link></h1>
      <h1><Link href="/questions">Questions</Link></h1>
      
    
    </div>
  );
}

