import React from "react";

export const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Chamika Edirisinghe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
