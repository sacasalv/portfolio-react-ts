export function Footer({ className = "" }) {
  return (
    <div className={className}>
      <div className="border-8 rounded-t-lg border-black bg-[url(./../public/image/probando.avif)] bg-center bg-origin-content bg-cover bg-no-repeat w-2xs h-[500px] ms-40">
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
              src="/public/iconos/gmail.png"
              alt="Iconos"
              className="inline-block size-15"
            />
          </div>
          <div className="mt-20">
            <img
              src="/public/iconos/gmail.png"
              alt="Iconos"
              className="inline-block size-15"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}
