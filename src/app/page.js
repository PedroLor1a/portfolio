import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-4/5 h-3/4 border-2 border-transparent rounded-lg bg-white/5 backdrop-blur-sm flex flex-col">
        <div className="flex justify-center items-center p-4 border-b border-none">
          <div className="flex space-x-8 ">
            <Link href="/proyectos">
              <p
                className="text-white cursor-pointer underline decoration-white decoration-1 mx-12 hover:text-[#c566cf] hover:decoration-[#c566cf]"
                style={{ textUnderlineOffset: "8px" }}>
                Proyectos
              </p>
            </Link>
            <Link href="/sobremi">
              <p
                className="text-white cursor-pointer underline decoration-white decoration-1 mx-12 hover:text-[#c566cf] hover:decoration-[#c566cf]"
                style={{ textUnderlineOffset: "8px" }}>
                Sobre mi
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-between pr-4">
          <div className="flex flex-col justify-center items-start w-2/5 h-full p-6 mx-28 my-10">
            <h1 className="text-7xl font-bold mb-4 text-white">Hola!</h1>
            <p className="text-white text-3xl font-medium">
              Bienvenido a mi Portfolio! Soy Pedro Loria, desarrollador web
              FullStack.
            </p>
          </div>
          <Image
            alt="yo"
            src="/fotoCVEdit.png"
            width={320}
            height={1000}
            className="mr-20 transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}
