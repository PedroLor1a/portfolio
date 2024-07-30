import Link from "next/link"

const ProyectPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-4/5 h-3/4 border-2 border-transparent rounded-lg bg-white/5 backdrop-blur-sm flex flex-col">
        <div className="flex justify-center items-center p-4 border-b border-none">
          <div className="flex space-x-8">
            <Link href="/">
              <p
                className="text-white cursor-pointer underline decoration-white decoration-1 mx-12"
                style={{ textUnderlineOffset: "8px" }}>
                Home
              </p>
            </Link>
            <Link href={"/sobremi"}>
              <p
                className="text-white cursor-pointer underline decoration-white decoration-1 mx-12"
                style={{ textUnderlineOffset: "8px" }}>
                Sobre mi
              </p>
            </Link>
          </div>
        </div>
        <div class="card-container flex justify-around space-x-10 mb-20">

  <div class="card w-80  rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:bg-white/15 mx-2 my-8">
    <div class="card__content p-6 ">
      <p class="card__title text-xl font-bold mb-4 text-white">Ecommerce TuSueño</p>
      <p class="card__description mb-4 text-white">
        Ecommerce realizado para un emprendimiento de Colombia sobre alcancías personalizadas
      </p>
      <p class="card__description mb-4 text-white">
        Stack tecnológico: Javascript | Node.js | Express | SQL | Sequelize | PostgreSQL | React | Redux | CSS
      </p>
      <Link href="https://tu-suenio-front.vercel.app/" target="_blank" rel="noreferrer">
        <button class="card__button bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 mx-2">
          Live Demo
        </button>
      </Link>
      <Link href="https://github.com/PedroLor1a/tu-suenio-front" target="_blank" rel="noreferrer">
        <button class="card__button bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 ">
          Source Code
        </button>
      </Link>
    </div>
  </div>

  <div class="cardPF w-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:bg-white/15 mx-2 my-8">
    <div class="card__content p-6">
      <p class="card__title text-xl font-bold mb-4 text-white">FakeStore</p>
      <p class="card__description mb-4 text-white">
        Proyecto que representaría una página web de ropa, donde se puede ver la imagen y el costo que tiene
      </p>
      <p class="card__description mb-4 text-white">
        Stack tecnológico: Javascript | NextJs | TailwindCSS | Material-UI | SQL | MongoDB
      </p>
      <a href="https://github.com/PedroLor1a/ecommerce" target="_blank" rel="noreferrer">
        <button class="card__button bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
          Source Code
        </button>
      </a>
    </div>
  </div>
  <div class="cardPI w-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:bg-white/15 mx-2 my-8">
    <div class="card__content p-6">
      <p class="card__title text-xl font-bold mb-4 text-white">DragonBall Z</p>
      <p class="card__description mb-4 text-white">
        Proyecto donde se ve a los diferentes personajes del anime, sus respectivos planetas y transformaciones.
      </p>
      <p class="card__description mb-4 text-white">
        Stack tecnológico: Javascript | NextJs | TailwindCSS | PostgreSQL | SQL 
      </p>
      <a href="https://github.com/PedroLor1a/DragonBallZ" target="_blank" rel="noreferrer">
        <button class="card__button bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
          Source Code
        </button>
      </a>
      <Link href="https://dragon-ball-z-teal.vercel.app/" target="_blank" rel="noreferrer">
        <button class="card__button bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 mx-2">
          Live Demo
        </button>
      </Link>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default ProyectPage
