export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-xl">

        <p className="text-blue-400 mb-3 text-center">
          GET IN TOUCH
        </p>

        <h1 className="text-6xl font-bold text-center mb-10">
          Contact Us
        </h1>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-xl bg-slate-900 border border-slate-700 px-5 py-4 outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded-xl bg-slate-900 border border-slate-700 px-5 py-4 outline-none focus:border-blue-500"
          />

          <textarea
            rows="5"
            placeholder="Your message"
            className="w-full rounded-xl bg-slate-900 border border-slate-700 px-5 py-4 outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-4 font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </main>
  );
}