import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-bg text-white font-sans">
      <header className="p-4 text-center text-xl font-bold bg-muted-bg shadow-card">FilmyAI 🎬</header>
      <main>{children}</main>
      <footer className="p-4 text-center text-sm text-muted">&copy; {new Date().getFullYear()} FilmyAI. All rights reserved.</footer>
    </div>
  );
};

export default Layout;