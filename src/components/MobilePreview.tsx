import { useState } from "react";

const ICONOS = [
  "instagram.png",
  "linkedin.png",
  "twitter.png",
  "github.png",
  "gmail.png",
];

export function MobilePreview() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`fixed bottom-0 left-0 w-2xs h-96 ms-40 transition-transform duration-700 ease-out cursor-pointer ${isExpanded ? "translate-y-0" : "translate-y-80"} border-t-6 border-l-6 border-r-6 rounded-t-[50px] p-2 border-black bg-[url(./../public/images/fondo-movil.jpg)] bg-center bg-origin-content bg-content bg-no-repeat`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="bg-white/1 backdrop-blur-[2px] h-full rounded-t-[30px] grid grid-cols-3 gap-2">
        <div className="absolute top-0 left-21 bg-black border-black-100 rounded-2xl w-25 h-8"></div>
        {ICONOS.map((i) => (
          <div key={i} className="mt-20">
            <img
              src={`/iconos/redesSociales/${i}`}
              alt="Iconos"
              className="inline-block size-15"
            />
          </div>
        ))}
        
      </div>
    </div>
  );
}
