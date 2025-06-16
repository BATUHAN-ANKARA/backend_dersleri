import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    socket.on("clickCount", (newCount) => {
      setCount(newCount);
    });
    return () => socket.off("clickCount");
  }, []);

  const handleClick = () => {
    socket.emit("click");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Beni Tıkla!
      </button>
      <p className="mt-4 text-xl">Toplam Tıklama: {count}</p>
    </div>
  );
}
