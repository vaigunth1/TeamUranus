import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";


import Loader from "./components/Loader/Loader";
import Space from "./components/Space/Space";
import Scroll from "./components/Scroll/Scroll";
import Players from "./components/Players/Players";
import Achievements from "./components/Achievement/Achievement";

import Home from "./pages/Home";
import Contact from "./components/Contact/Contact";
import Aboutpage from "./components/About/About";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {/* Animated Space Background */}
      <Space />
      <Scroll />

      {/* Website Routes */}
     <Routes>

    <Route path="/" element={<Home />} />

    <Route path="/players" element={<Players />} />

    <Route path="/about" element={<Aboutpage />} />

    <Route path="/achievements" element={<Achievements />} />

    <Route path="/contact" element={<Contact />} />

</Routes>
    </>
  );
}

export default App;