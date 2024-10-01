import React from "react";

function Modal({ moves, handleClick }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-500 ease-in-out">
      <div className="absolute h-96 w-96 bg-gray-600 text-white rounded-xl flex items-center justify-center flex-col gap-3">
        <div className="text-center">
          <h1 className="font-bold text-2xl">YOU WINNN!!</h1>
          <span className="font-semibold text-xl">WITH {moves} MOVES!!</span>
        </div>
        <div>
          <button
            className="text-xl text-white font-semibold bg-slate-700 py-3 px-2 rounded-lg hover:bg-slate-600 transition-all duration-300"
            onClick={() => handleClick()}
          >
            NEW GAME
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
