'use client';
import { useState } from 'react';
import { Footer } from '@/app/components/Footer';
function GameShowcase() {
  const [flappyScore, setFlappyScore] = useState(0);
  const [gameRunning, setGameRunning] = useState(false);
  const [ticTacBoard, setTicTacBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleFlappyClick = () => {
    if (gameRunning) {
      setFlappyScore(0);
    }
    setGameRunning(!gameRunning);
    setGameRunning(true);
    setTimeout(() => setGameRunning(false), 10000);
  };

  const handleTicTacClick = (index) => {
    if (ticTacBoard[index]) {
      return;
    }
    const newBoard = [...ticTacBoard];
    newBoard[index] = isXNext ? 'X' : 'O';
    setTicTacBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetTicTac = () => {
    setTicTacBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Games & Apps</h1>
          <p className="text-xl text-gray-300">Explore interactive games and applications built with cutting-edge technologies.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg p-8 border border-cyan-500/30 hover:border-cyan-500 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Flappy Bird Clone</h2>
            <p className="text-gray-300 mb-6">Classic Flappy Bird game built with React. Click to make the bird jump and avoid obstacles!</p>
            <div className="bg-slate-900 rounded-lg p-6 mb-4 h-40 flex items-center justify-center">
              <div className="text-center">
                <p className="text-3xl font-bold text-cyan-400">{flappyScore}</p>
                <p className="text-gray-400">Score</p>
              </div>
            </div>
            <button onClick={handleFlappyClick} className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded transition-colors">
              {gameRunning ? 'Game Running...' : 'Play Game'}
            </button>
          </div>

          <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg p-8 border border-purple-500/30 hover:border-purple-500 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Tic Tac Toe</h2>
            <p className="text-gray-300 mb-6">Classic Tic Tac Toe game. Play against the simple AI or another player!</p>
            <div className="grid grid-cols-3 gap-2 mb-6 bg-slate-900 p-4 rounded-lg">
              {ticTacBoard.map((cell, index) => (
                <button key={index} onClick={() => handleTicTacClick(index)} className="w-16 h-16 bg-slate-800 border border-purple-500 rounded text-2xl font-bold text-purple-400 hover:bg-slate-700 transition-colors">
                  {cell}
                </button>
              ))}
            </div>
            <button onClick={resetTicTac} className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition-colors">
              New Game
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="/" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Back to Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GameShowcase;
