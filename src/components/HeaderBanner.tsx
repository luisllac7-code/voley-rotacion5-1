import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Flame, Shield, Sparkles } from 'lucide-react';

interface HeaderBannerProps {
  onExploreClick: () => void;
  onRolesClick: () => void;
  onQuizClick: () => void;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = ({
  onExploreClick,
  onRolesClick,
  onQuizClick,
}) => {
  return (
    <header className="relative w-full overflow-hidden bg-gradient-to-b from-[#05070a] via-[#0b0e17] to-[#090b10] border-b border-amber-500/20 text-white">
      {/* Background Anime Energy / Particles & Vignette */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-orange-600/25 via-amber-500/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-orange-500/10 blur-[100px] rounded-full" />
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-amber-400/10 blur-[100px] rounded-full" />
      </div>

      {/* Atmospheric Diagonal Metallic Structure (Inspired by user's reference image) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 overflow-hidden">
        <div className="w-[1100px] h-[1100px] border-[28px] border-amber-400/30 rounded-full rotate-45 transform scale-110 blur-[1px]" />
        <div className="absolute w-[980px] h-[980px] border-[16px] border-amber-600/20 rounded-full -rotate-45" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-8 pb-10 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        {/* Giant Metallic Cross & Wings Emblem (Inspired by reference image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: -15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mb-3 flex items-center justify-center"
        >
          {/* Stylized metallic golden emblem */}
          <div className="relative flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36">
            <svg
              viewBox="0 0 160 160"
              className="w-full h-full drop-shadow-[0_0_35px_rgba(245,158,11,0.5)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="goldMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF1B8" />
                  <stop offset="25%" stopColor="#F59E0B" />
                  <stop offset="50%" stopColor="#B45309" />
                  <stop offset="75%" stopColor="#FBBF24" />
                  <stop offset="100%" stopColor="#78350F" />
                </linearGradient>
                <linearGradient id="chromeMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="50%" stopColor="#CBD5E1" />
                  <stop offset="100%" stopColor="#64748B" />
                </linearGradient>
              </defs>

              {/* Dynamic Anime / Volleyball Wings */}
              <path
                d="M80 15 L98 62 L145 68 L108 98 L122 145 L80 118 L38 145 L52 98 L15 68 L62 62 Z"
                stroke="url(#goldMetal)"
                strokeWidth="4"
                fill="rgba(15, 23, 42, 0.7)"
              />
              <path
                d="M80 32 L92 68 L130 73 L100 96 L110 132 L80 112 L50 132 L60 96 L30 73 L68 68 Z"
                fill="url(#goldMetal)"
                fillOpacity="0.85"
              />

              {/* Volleyball inner curved seam lines */}
              <circle cx="80" cy="80" r="26" stroke="#FFFFFF" strokeWidth="2.5" fill="#0c1017" />
              <path d="M62 80 C62 66 74 54 80 54" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M80 106 C86 106 98 94 98 80" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M62 88 C76 88 88 76 88 62" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>

        {/* Small top header category */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2 mb-2"
        >
          <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-amber-400" />
          <span className="text-[12px] sm:text-sm tracking-[0.35em] text-amber-300 uppercase font-semibold font-['Cinzel']">
            SISTEMA TÁCTICO & VOLLEYBALL MASTERCLASS
          </span>
          <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-amber-400" />
        </motion.div>

        {/* Epic Main Title in Cinematic Style (Inspired by reference image typography) */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-['Cinzel'] uppercase"
        >
          <span className="bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            VOLEY - ROTACIÓN 5-1
          </span>
          <span className="block mt-1 text-2xl sm:text-4xl md:text-5xl font-['Bebas_Neue'] tracking-wider bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]">
            ROLES DE CANCHA
          </span>
        </motion.h1>

        {/* Subtitle Information / Match Metadata Badge like "LA VELADA" (Date / Location in gold) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-amber-200/90 font-['Cinzel']"
        >
          <span className="flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
            1 COLOCADOR • 5 REMATADORES
          </span>

        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <button
            id="btn-ver-simulador"
            onClick={onExploreClick}
            className="group relative px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 font-bold text-sm sm:text-base tracking-wider uppercase font-['Bebas_Neue'] shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              <Flame className="w-5 h-5 text-yellow-300" />
              Simulador Animado 5-1
            </span>
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button
            id="btn-ver-roles"
            onClick={onRolesClick}
            className="px-5 py-2.5 rounded-full bg-slate-900/80 border border-amber-500/40 hover:border-amber-400 text-amber-200 hover:text-white font-semibold text-sm tracking-wider uppercase font-['Cinzel'] hover:bg-slate-800/80 transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <Shield className="w-4 h-4 text-amber-400" />
            Roles & Posiciones
          </button>

          <button
            id="btn-ver-test"
            onClick={onQuizClick}
            className="px-5 py-2.5 rounded-full bg-slate-900/80 border border-orange-500/40 hover:border-orange-400 text-orange-200 hover:text-white font-semibold text-sm tracking-wider uppercase font-['Cinzel'] hover:bg-slate-800/80 transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <Trophy className="w-4 h-4 text-orange-400" />
            Test Táctico
          </button>
        </motion.div>
      </div>

      {/* Golden trim border like boxing show banner */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-400/80 to-transparent shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
    </header>
  );
};
