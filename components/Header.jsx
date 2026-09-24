export default function Header() {
  return (
    <header className="flex items-justify justify-center items-center gap-120 pt-5" >
      
      <h1 className="text-4xl font-bold text-blue-600">Trafalgar</h1>

     
      <nav className="text-gray-600 font-bold flex gap-8 ">
        <a className="hover:text-green-600" href="#">Home</a>
        <a className="hover:text-green-600" href="#">Find a doctor</a>
        <a className="hover:text-green-600" href="#">Apps</a>
        <a className="hover:text-green-600" href="#">Testimonials</a>
      </nav>

      
      <button className="bg-gray-700 flex items-center justify-center p-2 font-bold text-white text-lg text-center w-24 h-10 hover:bg-green-600 hover:text-white rounded-xl">Sign Up</button>
    </header>
  );
}