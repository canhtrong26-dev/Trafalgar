import Image from "next/image";

export default function About() {
  return (
    <section className="flex justify-center gap-50 pt-25 items-center">
      
      <div>
        <Image src="/images/about.png" alt="about" width={400} height={300} />
      </div>

      <div className="flex flex-col gap-10 ">
        <h2 className="w-60 font-bold text-2xl">Leading healthcare providers</h2>
        <hr className=" w-30"/>
        <p className="w-90">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver</p>
        <button className="text-blue-500 bg-white px-6 py-2 rounded-full text-xl self-start border-2 border-blue-500">Learn more</button>

      </div>
    </section>
  );
}