import { useState, useEffect } from "react";
import svg1 from "../../assets/svg/market.svg";
import svg2 from "../../assets/svg/consulting.svg";
import svg3 from "../../assets/svg/cognity.svg";

const items = [
  { id: 1, src:svg1, text: "Market research" },
  { id: 2, src:svg2, text: "Strategic Consulting" },
  { id: 3, src:svg3, text: "Cognitive Solution" },
];

export default function Swiper() {
  const [boxList, setBoxList] = useState(items);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true); 
      setTimeout(() => {
        
        setBoxList((prev) => [...prev.slice(1), prev[0]]);
        setIsSliding(false); 
      },200); 
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
   
      <div className="w-3/4 mx-auto py-10 overflow-hidden relative">
        <div
          className={`flex gap-4 ${isSliding ? "transition-transform duration-200 ease-in-out" : ""}`}
          style={{ transform: isSliding ? "translateX(-33.33%)" : "translateX(0)" }}
        >
          {boxList.map((item) => (
            <div
              key={item.id}
              className={`w-1/2 md:w-[33%]  flex flex-col p-10 gap-8 hover:-translate-y-2 transition-all duration-300 ease-in-out rounded-2xl shadow-xl bg-white text-black`}
            >
              <img className="w-12 h-12 " src={item.src} alt="" />
              <h1 className="font-bold text-2xl">{item.text}</h1>
              <p className="text-xl text-gray-600">One make creepeth, man bearing theira firmament.</p>
            </div>
          ))}
        </div>
      </div>
 
  );
}
