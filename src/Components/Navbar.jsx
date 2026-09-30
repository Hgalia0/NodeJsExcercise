export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-slate-950 text-white">
      <a href="/" className="text-xl font-bold">
        MyApp
      </a>

      <div className="flex gap-6">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}