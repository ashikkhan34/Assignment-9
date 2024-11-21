import React from "react";

const App = () => {
  const saleIsOn = true; // এটি ডাইনামিক হতে পারে

  const bouncingTextStyle = {
    display: "inline-block",
    fontSize: "2rem",
    fontWeight: "bold",
    color: "red",
    animation: "bounce 1.5s infinite",
  };

  const keyframesStyle = `
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-20px);
      }
      60% {
        transform: translateY(-10px);
      }
    }
  `;

  return (
    <div>
      <style>{keyframesStyle}</style>
      {saleIsOn && (
        <div style={bouncingTextStyle}>
          <h1>Sale is On!</h1>
        </div>
      )}
    </div>
  );
};

export default App;
