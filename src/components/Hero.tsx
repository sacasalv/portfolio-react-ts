export function Hero() {
  return (
    <div className="card bg-[#B1C1CC] text-black p-4 shadow-[inset_3px_3px_5px_#5E659E,inset_-3px_-3px_5px_#5E659E] rounded-lg w-dvh">
      <div className="flex align-between justify-center overflow-hidden p-3">
        <img
          src=""
          alt="Foto de perfil"
          className="inline-block size-60 rounded-full ring-2 ring-gray-900 outline"
        />
      </div>
      <div className="mt-4 text-center flex items-center justify-center flex-col gap-4">
        <h2 className="font-bold text-2xl">Who am I?</h2>
        <p className="mt-2 text-2xl text-center w-2xl font-semibold">
          A passionate web developer with a strong enthusiasm for technology. I
          love learning new things, solving problems, and designing clean,
          functional digital experiences.
        </p>
      </div>
    </div>
  );
}
