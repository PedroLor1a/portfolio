import Image from "next/image"
import Link from "next/link"
const SobreMiPage = () => {
  return (
<div className="h-screen w-screen flex items-center justify-center">
  <div className="w-4/5 h-3/4 border-2 border-transparent rounded-lg bg-white/5 backdrop-blur-sm flex flex-col">
    <div className="flex justify-center items-center p-4 border-b border-none">
      <div className="flex space-x-8">
        <Link href="/">
          <p
            className="text-white cursor-pointer underline decoration-white decoration-1 mx-12 hover:text-[#c566cf] hover:decoration-[#c566cf]"
            style={{ textUnderlineOffset: "8px" }}>
            Home
          </p>
        </Link>
        <Link href="/proyectos">
          <p
            className="text-white cursor-pointer underline decoration-white decoration-1 mx-12 hover:text-[#c566cf] hover:decoration-[#c566cf]"
            style={{ textUnderlineOffset: "8px" }}>
            Proyectos
          </p>
        </Link>
      </div>
    </div>
    <div className="flex flex-1 items-center justify-between px-4">
      <div className="flex flex-col justify-center items-start w-2/5 h-full p-6 mx-12 my-10">
        <h1 className="text-7xl font-bold mb-10 text-white">Sobre mi</h1>
        <p className="text-white text-lg font-normal">
        ¡Hola! Soy Pedro Loria, desarrollador web FullStack y graduado del Bootcamp de SoyHenry. Tengo experiencia en proyectos individuales y grupales, aplicando SCRUM y mejores prácticas. Soy comprometido, trabajador y siempre buscando mejorar mis habilidades. Si te interesa mi trabajo o quieres colaborar, ¡contáctame!
¡Gracias por visitar mi portfolio! 
</p>
      <div>
         <Link href="https://drive.google.com/file/d/1Ag9mGfyGeAnq_wUUpotlqwbO7sntcQOE/view?usp=sharing" target="_blank" rel="noreferrer">
        <button class="card__button bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 mx-2 my-4">
          Mi CV!
        </button>
      </Link>
      <Link href="https://www.linkedin.com/in/pedroloria/" target="_blank" rel="noreferrer">
        <button class="card__button bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 mx-2 my-4">
          Linkedin
        </button>
      </Link>
      <Link href="https://github.com/PedroLor1a" target="_blank" rel="noreferrer">
        <button class="card__button bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 mx-2 my-4">
          Github
        </button>
      </Link>
      </div>
       
      </div>
      <div className="grid grid-cols-3 gap-4 w-2/5 p-6 mx-12 my-10">
        <Image alt="next" src="/next.png" width={60} height={20} />
        <Image alt="react" src="/react.png" width={60} height={20} />
        <Image alt="redux" src="/redux.png" width={60} height={20} />
        <Image alt="tailwind" src="/tailwind.png" width={60} height={20} />
        <Image alt="css" src="/CSS.png" width={60} height={20} />
        <Image alt="html" src="/html.png" width={60} height={20} />
        <Image alt="javascript" src="/js.png" width={50} height={20} />
        <Image alt="node" src="/node.png" width={60} height={20} />
        <Image alt="postgres" src="/postgres.png" width={60} height={20} />
        <Image alt="sql" src="/sql.png" width={60} height={20} />
        <Image alt="firebase" src="/firebase.png" width={60} height={20} />
        <Image alt="sequelize" src="/sequelize.png" width={60} height={20} />
      </div>
    </div>
  </div>
</div>


  )
}

export default SobreMiPage
