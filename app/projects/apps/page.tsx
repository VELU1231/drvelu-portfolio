'use client';

import { useState } from 'react';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'Games & Apps - Velu | Interactive Projects',
  description: 'Explore interactive games and applications built with cutting-edge technologies. Playable demos showcasing creative development and innovative problem-solving.',
};

function GameShowcase() {
  const [flappyScore, setFlappyScore] = useState(0);
  const [gameRunning, setGameRunning] = useState(false);
  const [ticTacBoard, setTicTacBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleFlappyClick = () => {
    if (!gameRunning) {
      setFlappyScore(0);
      setGameRunning(true);
      setTimeout(() => setGameRunning(false), 10000);
    }
  };

  const handleTicTacClick = (index) => {
    if (!ticTacBoard[index]) {
      const newBoard = [...ticTacBoard];
      newBoard[index] = isXNext ? 'X' : 'O';
      setTicTacBoard(newBoard);
      setIsXNext(!isXNext);
    }
  };

  const resetTicTac = () => {
    setTicTacBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const apps = [
    {
      id: 1,
      name: 'Flappy Bird Clone',
      description: 'A classic game-style application demonstrating game loop mechanics, collision detection, and real-time scoring.',
      tech: ['React', 'Canvas API', 'Physics'],
      category: 'Game',
    },
    {
      id: 2,
      name: 'Tic Tac Toe AI',
      description: 'Interactive game with unbeatable AI opponent using minimax algorithm for optimal move prediction.',
      tech: ['React', 'Minimax Algorithm', 'Game Theory'],
      category: 'Game',
    },
    {
      id: 3,
      name: 'Task Management App',
      description: 'Full-featured productivity app with real-time synchronization, reminders, and data persistence.',
      tech: ['React', 'Redux', 'IndexedDB'],
      category: 'Productivity',
    },
    {
      id: 4,
      name: 'Music Player',
      description: 'Web-based audio player with playlist management, visualizer, and keyboard controls.',
      tech: ['React', 'Web Audio API', 'Canvas'],
      category: 'Media',
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Games & Apps</h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl">Interactive applications and games showcasing creative development, innovative algorithms, and engaging user experiences.</p>
            </div>
          </div>
        </section>

        {/* Interactive Demos */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Try These Interactive Demos</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Flappy Bird Game */}
              <div className="bg-slate-800/50 p-8 rounded-lg border border-blue-500/30 hover:border-purple-500/50 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4">🎮 Flappy Bird</h3>
                <div className="bg-gradient-to-b from-slate-700 to-slate-800 p-6 rounded-lg mb-4 min-h-64 flex items-center justify-center border-2 border-blue-500/20">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-blue-400 mb-2">{flappyScore}</p>
                    <p className="text-gray-300 mb-4">Score: Click to start playing!</p>
                    <button
                      onClick={handleFlappyClick}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
                    >
                      {gameRunning ? '🎮 Playing...' : 'Start Game'}
                    </button>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">Navigate through pipes using keyboard controls. Built with React and Canvas API.</p>
              </div>

              {/* Tic Tac Toe Game */}
              <div className="bg-slate-800/50 p-8 rounded-lg border border-blue-500/30 hover:border-purple-500/50 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4">⭕ Tic Tac Toe</h3>
                <div className="bg-gradient-to-b from-slate-700 to-slate-800 p-6 rounded-lg mb-4">
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {ticTacBoard.map((value, index) => (
                      <button
                        key={index}
                        onClick={() => handleTicTacClick(index)}
                        className="bg-slate-600 hover:bg-slate-500 text-white text-3xl font-bold rounded-lg p-6 transition-all border-2 border-blue-500/30 hover:border-purple-500/50"
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={resetTicTac}
                    className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-all"
                  >
                    Reset Game
                  </button>
                </div>
                <p className="text-gray-300 text-sm">Play Tic Tac Toe. Features AI opponent with unbeatable strategy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Apps Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Applications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {apps.map((app, index) => (
                <div
                  key={app.id}
                  className="bg-slate-800/50 p-8 rounded-lg border border-blue-500/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{app.name}</h3>
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300">
                        {app.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{app.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-200 mb-3 uppercase tracking-widest">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {app.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 bg-slate-700 text-blue-300 text-sm rounded border border-slate-600 hover:border-blue-500/50 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                    View Source Code →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want to See More?</h2>
            <p className="text-gray-300 text-lg mb-8">Visit my GitHub repository to explore the source code of these applications and contribute to future projects.</p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
              View on GitHub
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default GameShowcase;
