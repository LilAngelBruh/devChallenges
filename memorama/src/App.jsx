import { useState } from "react";
import Board from "./components/board/Board";

function App() {
  return (
    <div className="display flex justify-center items-center flex-col py-5 px-3">
      <h1 className="text-4xl font-bold text-white">Memory Game</h1>
      <Board />
    </div>
  );
}

export default App;
