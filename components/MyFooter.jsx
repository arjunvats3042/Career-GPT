import React from "react";

const MyFooter = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-12 bg-muted/50">
      <hr className="w-5/6 border-t border-gray-500 mb-4" />
      <h1 className="text-2xl text-white font-arsenal">
        {" "}
        CareerGPT™ {new Date().getFullYear()}
      </h1>
      <p className="text-sm text-white">Made by Arjun.</p>
    </footer>
  );
};

export default MyFooter;
