import React from "react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold">My Bare-Bones App</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto py-8">
        <div className="text-center">
          <h2 className="text-3xl mb-4">Welcome to My Bare-Bones App</h2>
          <p className="text-lg">
            This is a minimal web application with a simple structure that you can modify and build upon.
          </p>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2023 My Bare-Bones App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;