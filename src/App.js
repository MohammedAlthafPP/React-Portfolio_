import Spline from "./components/spline/Spline";
import NavBar from "./components/navbar/NavBar";
import MainSection from "./components/mainSection/MainSection";
import { AnimatePresence } from "framer-motion";

import "./App.css";

function App() {
  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen  min-h-screen flex-col items-center justify-center relative bg-primary">
        <NavBar />
        <div className="relative " id="home">
          <Spline />
          <div className="absolute bottom-10 w-full justify-center items-center flex">
            <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl">
              <p className="text-textBase">Press and Drag to orbit</p>
            </div>
          </div>
        </div>
        {/* Main section */}
        <MainSection />
      </div>
    </AnimatePresence>
  );
}

export default App;
