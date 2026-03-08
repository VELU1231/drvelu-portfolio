'use client';

import { useState } from 'react';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import Link from 'next/link';

export default function GameShowcase() {
  const [flappyScore] = useState(0);
  const [gameRunning, setGameRunning] = useState(false);
  const [ticTacBoard, setTicTacBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleFlappyClick = () => {
    setGameRunning(true);
    setTimeout(() => setGameRunning(false), 10000);
  };

  const handleTicTacClick = (index: number) => {
    if (ticTacBoard[index]) return;
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
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />
      <div className="section-container py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Games & Apps
          </h1>
          <p className="text-white/50 text-lg">
            Interactive games and applications built with cutting-edge technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card-hover p-6">
            <h2 className="text-xl font-bold mb-4 text-blue-400">Flappy Bird Clone</h2>
            <p className="text-white/50 text-sm mb-6">
              Classic Flappy Bird game built with React.
            </p>
            <div className="bg-white/[0.03] rounded-xl p-6 mb-4 h-40 flex items-center justify-center">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-400">{flappyScore}</p>
                <p className="text-white/30 text-sm">Score</p>
              </div>
            </div>
            <button
              onClick={handleFlappyClick}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-2.5 px-4 rounded-xl transition-all text-sm border-none"
            >
              {gameRunning ? 'Game Running...' : 'Play Game'}
            </button>
          </div>

          <div className="glass-card-hover p-6">
            <h2 className="text-xl font-bold mb-4 text-violet-400">Tic Tac Toe</h2>
            <p className="text-white/50 text-sm mb-6">
              Classic Tic Tac Toe game.
            </p>
            <div className="grid grid-cols-3 gap-2 mb-6 bg-white/[0.03] p-4 rounded-xl">
              {ticTacBoard.map((cell, index) => (
                <button
                  key={index}
                  onClick={() => handleTicTacClick(index)}
                  className="w-16 h-16 bg-white/[0.05] border border-violet-500/20 rounded-lg text-2xl font-bold text-violet-400 hover:bg-white/[0.1] transition-colors"
                >
                  {cell}
                </button>
              ))}
            </div>
            <button
              onClick={resetTicTac}
              className="w-full bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white font-semibold py-2.5 px-4 rounded-xl transition-all text-sm border-none"
            >
              New Game
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-xl text-sm"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
