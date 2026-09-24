import Image from "next/image";



export default function Hero() {
  return (
    <section className="flex justify-center items-center gap-80 pt-18">
      
      <div className="flex-col gap-10 flex " >
        <h2 className=" text-4xl font-[Mulish]" >Virtual healthcare for you</h2>
        <p className=" text-sm text-gray-400">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
        <button className="hover:text-yellow-500 hover:bg-green-600 text-white font-bold text-sm bg-blue-600 p-3 w-35 h-10 flex  items-center flex justify-center  rounded-full">Consult today</button>
      </div>

     

      <div>
        <Image src="/images/hero.png" alt="hero" width={500} height={400} />
      </div>
    </section>
  );
}