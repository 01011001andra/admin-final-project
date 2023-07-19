import React, { useState, useEffect } from "react";

const Loading = () => {
  const [dotCount, setDotCount] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prevCount) => (prevCount === 3 ? 1 : prevCount + 1));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderDots = () => {
    const dots = [];
    for (let i = 1; i <= dotCount; i++) {
      dots.push(
        <span key={i} className="loading loading-ring loading-lg"></span>
      );
    }
    return dots;
  };

  return (
    <div className="flex flex-col h-full w-full items-center justify-center gap-3">
      <span className="text-3xl font-bold w-full text-center">Loading...</span>
      <div>{renderDots()}</div>
    </div>
  );
};

export default Loading;
