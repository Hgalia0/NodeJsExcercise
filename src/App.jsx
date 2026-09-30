import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  const path = window.location.pathname;

  let page;

  if (path === "/about") {
    page = <About />;
  } else if (path === "/contact") {
    page = <Contact />;
  } else {
    page = <Home />;
  }

  return (
    <>
      <Navbar />
      {page}
    </>
  );
}

export default App;