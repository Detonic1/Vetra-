import React from 'react';
import Link from 'next/link';


export default function Nav() {
  return (
    <div className="nav-container">
      <h1><Link href="/">Home</Link></h1>
      <h1><Link href="/authentication">Authentication</Link></h1>
      <h1><Link href="/Settings">Settings</Link></h1>
      <h1><Link href="/Documentation">Documentation</Link></h1>
      <h1><Link href="/Payments">Payments</Link></h1>
      <h1><Link href="/Webhooks">Webhooks</Link></h1>
      <h1><Link href="/cybersecurity">Cyber Security</Link></h1>
      <h1><Link href="/Analytics">Analytics</Link></h1>
    </div>
  );
}

