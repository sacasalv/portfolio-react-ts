import { useState } from "react";

export function MobilePreview() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full h-96 transition-transform duration-700 ease-out cursor-pointer ${isExpanded ? 'translate-y-0' : 'translate-y-80'}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="border-8 rounded-t-lg border-black bg-[url(./../public/images/fondo-movil.jpg)] bg-center bg-origin-content bg-content bg-no-repeat w-2xs h-[500px] ms-40">
        <div className="bg-white/1 backdrop-blur-[2px] h-full grid grid-cols-3 gap-2">
          <div className="mt-20">
            <img
              src="/public/iconos/instagram.png"
              alt="Iconos"
              className="inline-block size-15"
            />
          </div>
          <div className="mt-20">
            <img
              src="/public/iconos/linkedin.png"
              alt="Iconos"
              className="inline-block size-15"
            />
          </div>
          <div className="mt-20">
            <img
              src="/public/iconos/gorjeo.png"
              alt="Iconos"
              className="inline-block size-15"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
