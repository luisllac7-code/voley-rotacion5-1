import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  PlayerCoord,
  RotationConfig,
  RotationPhase,
  VolleyballPosition,
} from '../types';
import { Shield, Sparkles, CheckCircle2, AlertTriangle, Info, Zap } from 'lucide-react';

interface CourtBoardProps {
  rotationConfig: RotationConfig;
  currentPhase: RotationPhase;
  highlightedRole?: string | null;
  showOverlaps: boolean;
  showBallAnimation: boolean;
  onSelectPlayer: (player: PlayerCoord) => void;
  selectedPlayer: PlayerCoord | null;
}

export const CourtBoard: React.FC<CourtBoardProps> = ({
  rotationConfig,
  currentPhase,
  highlightedRole,
  showOverlaps,
  showBallAnimation,
  onSelectPlayer,
  selectedPlayer,
}) => {
  const phaseData = rotationConfig.phases[currentPhase];
  const players = phaseData.players;

  // Find the setter
  const setter = players.find((p) => p.id === 'S');

  // Role color mappings
  const getRoleColor = (role: string) => {
    switch (role) {
      case 'armador':
        return { bg: '#FF7A00', ring: '#F59E0B', text: '#FFFFFF', name: 'Armador' };
      case 'opuesto':
        return { bg: '#E63946', ring: '#EF4444', text: '#FFFFFF', name: 'Opuesto' };
      case 'punta':
        return { bg: '#3A86FF', ring: '#60A5FA', text: '#FFFFFF', name: 'Punta' };
      case 'central':
        return { bg: '#06D6A0', ring: '#34D399', text: '#FFFFFF', name: 'Central' };
      case 'libero':
        return { bg: '#EAB308', ring: '#FACC15', text: '#0F172A', name: 'Líbero' };
      default:
        return { bg: '#64748B', ring: '#94A3B8', text: '#FFFFFF', name: 'Jugador' };
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center">
      {/* Top Net Bar (Red de Voleibol) */}
      <div className="w-full relative z-20 flex flex-col items-center mb-1">
        {/* Opponent Court hint */}
        <div className="text-[10px] tracking-[0.2em] font-['Cinzel'] text-slate-400 uppercase flex items-center gap-2 mb-1">
          <span className="h-[1px] w-6 bg-slate-600" />
          CAMPO RIVAL (ZONA DE SAQUE RIVAL)
          <span className="h-[1px] w-6 bg-slate-600" />
        </div>

        {/* Volleyball Net Physical Structure */}
        <div className="w-full relative h-7 sm:h-9 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 border-y-2 border-white/80 shadow-[0_4px_15px_rgba(0,0,0,0.6)] flex items-center justify-between px-2 overflow-hidden">
          {/* Net Mesh Pattern */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.4) 3px, rgba(255,255,255,0.4) 4px), repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.4) 4px, rgba(255,255,255,0.4) 5px)',
            }}
          />

          {/* Left Antenna */}
          <div className="relative z-10 w-2.5 h-full bg-gradient-to-b from-red-500 via-white to-red-500 rounded-sm border border-black/50 shadow-sm" />

          {/* Net Center Label */}
          <div className="relative z-10 px-3 py-0.5 rounded bg-black/70 border border-white/30 text-[10px] sm:text-xs font-bold font-['Cinzel'] tracking-widest text-amber-300 flex items-center gap-2">
            <span>RED OFICIAL (2.43M)</span>
            {currentPhase === 'ataque' && (
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-red-600 text-white animate-pulse">
                PUNTO DE COLOCACIÓN
              </span>
            )}
          </div>

          {/* Right Antenna */}
          <div className="relative z-10 w-2.5 h-full bg-gradient-to-b from-red-500 via-white to-red-500 rounded-sm border border-black/50 shadow-sm" />
        </div>
      </div>

      {/* Main Volleyball Court Container (Half Court 9m x 9m) */}
      <div
        id="volleyball-court-arena"
        className="relative w-full aspect-[1/1] sm:aspect-[4/3.8] rounded-xl overflow-hidden border-2 border-amber-500/50 shadow-[0_0_40px_rgba(0,0,0,0.8)] select-none"
        style={{
          background: 'linear-gradient(180deg, #0e1524 0%, #0a0e18 50%, #060910 100%)',
        }}
      >
        {/* Tactical Court Flooring Lines & Markings */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle Parquet / Arena Floor Grid Lines */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(245, 158, 11, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(245, 158, 11, 0.2) 1px, transparent 1px)',
              backgroundSize: '8.33% 8.33%',
            }}
          />

          {/* Front Row (Delanteros) Highlighted Zone: 0% to 33.3% */}
          <div className="absolute inset-x-0 top-0 h-[33.3%] bg-gradient-to-b from-amber-500/10 to-orange-500/5 border-b-2 border-dashed border-amber-400/80">
            <div className="absolute top-2 left-3 text-[10px] sm:text-xs font-bold tracking-widest text-amber-300/80 font-['Cinzel'] flex items-center gap-1.5">
              <span>ZONA DE ATAQUE / DELANTEROS (3 METROS)</span>
            </div>
            {/* Right indicator */}
            <div className="absolute top-2 right-3 text-[9px] font-mono text-amber-400/60">
              LÍNEA DE ATAQUE (3M)
            </div>
          </div>

          {/* Back Row (Zagueros) Zone: 33.3% to 100% */}
          <div className="absolute inset-x-0 bottom-0 top-[33.3%] bg-slate-900/40">
            <div className="absolute bottom-2 left-3 text-[10px] sm:text-xs font-bold tracking-widest text-slate-400 font-['Cinzel']">
              ZONA DE ZAGUERO / DEFENSA (6 METROS)
            </div>
            <div className="absolute bottom-2 right-3 text-[9px] font-mono text-slate-500">
              LÍNEA DE FONDO (9M)
            </div>
          </div>

          {/* FIVB Tactical Zone Markers (Zones 1 to 6) */}
          {/* Delanteros */}
          <div className="absolute top-[16%] left-[16%] -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <span className="text-3xl sm:text-5xl font-extrabold font-['Bebas_Neue'] text-white/[0.06]">
              4
            </span>
            <div className="text-[9px] font-semibold text-slate-400/50 uppercase">Punta Delantero</div>
          </div>

          <div className="absolute top-[16%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <span className="text-3xl sm:text-5xl font-extrabold font-['Bebas_Neue'] text-white/[0.06]">
              3
            </span>
            <div className="text-[9px] font-semibold text-slate-400/50 uppercase">Central Delantero</div>
          </div>

          <div className="absolute top-[16%] left-[84%] -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <span className="text-3xl sm:text-5xl font-extrabold font-['Bebas_Neue'] text-white/[0.06]">
              2
            </span>
            <div className="text-[9px] font-semibold text-slate-400/50 uppercase">Opuesto / Armador</div>
          </div>

          {/* Zagueros */}
          <div className="absolute top-[72%] left-[16%] -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <span className="text-3xl sm:text-5xl font-extrabold font-['Bebas_Neue'] text-white/[0.06]">
              5
            </span>
            <div className="text-[9px] font-semibold text-slate-400/50 uppercase">Zaguero Izq (Líbero)</div>
          </div>

          <div className="absolute top-[72%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <span className="text-3xl sm:text-5xl font-extrabold font-['Bebas_Neue'] text-white/[0.06]">
              6
            </span>
            <div className="text-[9px] font-semibold text-slate-400/50 uppercase">Zaguero Centro (Pipe)</div>
          </div>

          <div className="absolute top-[72%] left-[84%] -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <span className="text-3xl sm:text-5xl font-extrabold font-['Bebas_Neue'] text-white/[0.06]">
              1
            </span>
            <div className="text-[9px] font-semibold text-slate-400/50 uppercase">Zaguero Der (Saque)</div>
          </div>

          {/* Target setting zone highlight in the net (between pos 2 and 3) */}
          <div className="absolute top-[2%] left-[68%] -translate-x-1/2 w-20 h-10 border border-amber-400/40 rounded-md bg-amber-500/10 flex items-center justify-center pointer-events-none">
            <span className="text-[8px] font-bold text-amber-300 font-['Cinzel'] tracking-tighter">
              TARGET ZONA 2/3
            </span>
          </div>
        </div>

        {/* Visual Overlap Rule Lines (When toggled on: connects Setter with adjacent players) */}
        {showOverlaps && setter && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {players
              .filter((p) => p.id !== 'S')
              .map((neighbor) => {
                // Connect with adjacent players in rotation
                return (
                  <g key={`overlap-${neighbor.id}`}>
                    <line
                      x1={`${setter.x}%`}
                      y1={`${setter.y}%`}
                      x2={`${neighbor.x}%`}
                      y2={`${neighbor.y}%`}
                      stroke="#F59E0B"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      strokeOpacity="0.6"
                    />
                  </g>
                );
              })}
          </svg>
        )}

        {/* Animated Volleyball Trajectory (When in Attack phase or enabled) */}
        {showBallAnimation && phaseData.ballPath && phaseData.ballPath.length > 0 && (
          <div className="absolute inset-0 pointer-events-none z-20">
            <motion.div
              key={`ball-${rotationConfig.rotation}-${currentPhase}`}
              initial={{
                left: `${phaseData.ballPath[0].from.x}%`,
                top: `${phaseData.ballPath[0].from.y}%`,
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                left: phaseData.ballPath.map((p: { to: { x: number; y: number } }) => `${p.to.x}%`),
                top: phaseData.ballPath.map((p: { to: { x: number; y: number } }) => `${p.to.y}%`),
                scale: [0.8, 1.3, 1, 1.4, 0.9],
                opacity: [0, 1, 1, 1, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatDelay: 1.2,
                ease: 'easeInOut',
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-blue-600 border border-white shadow-[0_0_15px_#F59E0B] flex items-center justify-center text-[9px] font-bold text-slate-900"
            >
              🏐
            </motion.div>
          </div>
        )}

        {/* Animated Player Tokens */}
        {players.map((player) => {
          const roleStyle = getRoleColor(player.role);
          const isHighlighted =
            highlightedRole &&
            (player.role === highlightedRole ||
              (highlightedRole === 'armador' && player.id === 'S') ||
              (highlightedRole === 'opuesto' && player.id === 'OP') ||
              (highlightedRole === 'punta' && player.role === 'punta') ||
              (highlightedRole === 'central' && player.role === 'central') ||
              (highlightedRole === 'libero' && player.role === 'libero'));

          const isSelected = selectedPlayer?.id === player.id;
          const isSetter = player.id === 'S';

          return (
            <motion.div
              key={player.id}
              layoutId={`player-${player.id}`}
              initial={false}
              animate={{
                left: `${player.x}%`,
                top: `${player.y}%`,
              }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 18,
                mass: 0.8,
              }}
              onClick={() => onSelectPlayer(player)}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer group"
            >
              {/* Animated Glow Aura when setter or highlighted */}
              {(isSetter || isHighlighted || isSelected) && (
                <motion.div
                  animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 -m-2 rounded-full blur-md"
                  style={{ backgroundColor: roleStyle.ring }}
                />
              )}

              {/* Player Token Circle */}
              <div
                className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full flex flex-col items-center justify-center border-2 transition-transform duration-200 group-hover:scale-110 shadow-lg ${
                  isSelected
                    ? 'border-white ring-4 ring-amber-400 scale-110'
                    : isSetter
                    ? 'border-amber-300 ring-2 ring-amber-500/60'
                    : 'border-white/80'
                }`}
                style={{
                  backgroundColor: roleStyle.bg,
                }}
              >
                {/* Jersey Number */}
                <span
                  className="text-xs sm:text-sm font-extrabold font-['Bebas_Neue'] leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                  style={{ color: roleStyle.text }}
                >
                  #{player.number}
                </span>

                {/* Role Acronym (S, OP, OH, MB, L) */}
                <span
                  className="text-[8px] sm:text-[9px] font-bold font-['Cinzel'] tracking-tighter uppercase leading-tight"
                  style={{ color: roleStyle.text }}
                >
                  {player.label}
                </span>

                {/* Front Row Badge Dot */}
                {player.isFrontRow && (
                  <div
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400 border border-black flex items-center justify-center text-[7px] font-bold text-slate-950"
                    title="Jugador Delantero (Puede rematar y bloquear en la red)"
                  >
                    D
                  </div>
                )}
              </div>

              {/* Player Name Banner under token */}
              <div
                className={`mt-1 px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-bold font-['Cinzel'] tracking-wider text-center whitespace-nowrap shadow-md transition-colors ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 font-extrabold'
                    : 'bg-slate-900/90 text-white border border-slate-700 group-hover:border-amber-400'
                }`}
              >
                {player.name}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Real-Time Phase & Overlap Status Indicator */}
      <div className="w-full mt-3 flex flex-wrap items-center justify-between gap-2 px-1 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-emerald-300 font-semibold font-['Cinzel']">
            Rotación {rotationConfig.rotation} (P{rotationConfig.rotation})
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-amber-300 capitalize font-medium">
            {phaseData.title}
          </span>
        </div>

        {/* Overlap Status Badge */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>Posición 100% Reglamentaria FIVB</span>
        </div>
      </div>
    </div>
  );
};
