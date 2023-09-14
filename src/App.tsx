import { Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Subscribed from "./views/Subscribed";

function App() {
  return (
    <div className="flex h-[100dvh] w-full items-center justify-center md:h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscribed" element={<Subscribed />} />
      </Routes>
    </div>
  );
}

export default App;
