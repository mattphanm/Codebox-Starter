import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-red-600 mb-6">
        🚀 Welcome to My First Next.js + Tailwind Page!
      </h1>
      <p className="max-w-prose text-lg text-gray-700 text-center mb-6">
        Hello! My name is Matthew Phan, and I am a 3rd-year student at Cal Poly SLO. A fun fact about me is that I have had a lot of pets in the past, ranging from dogs, a parrot, fish, a kitten, a lizard, and a turtle. I cannot deal with insects though. 
      </p>
      <button className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-orange-400 transition">
        Hire Me Please!
      </button>
      {/* <img src="/next.svg" alt="Next.js Logo" className="h-16 mt-6" />    */}
      <img src="upp.png" alt="" className="h-20 mt-6=" />
      </main>
  );
}