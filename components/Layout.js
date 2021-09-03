import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

/*
children in this layout is what you wrap in the _app.js.
in this case you have wrapped the <component /> that it is the children



*/
