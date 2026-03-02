export function Footer({ className = "" }) {
  const imageUrls = [
    "gmail.png",
    "gorjeo.png",
    "instagram.png",
    "linkedin.png",
    "signo-de-github.png",
  ];

  return (
    <div className={className}>
      <div className="border-8 rounded-t-lg border-black bg-[url(./../public/image/probando.avif)] bg-center bg-origin-content bg-cover bg-no-repeat w-2xs h-[500px] ms-40">
        <div className="bg-white/1 backdrop-blur-[2px] h-full">
          <div className=" grid grid-cols-3 gap-2">
            {imageUrls.map((src, i) => (
              <div key={i} className="mt-20 ">
                <img
                  src={`./../../public/iconos/redesSociales/${src}`}
                  alt="Iconos"
                  className="inline-block size-15"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
