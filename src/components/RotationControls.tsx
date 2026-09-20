import React from 'react';
import { motion } from 'motion/react';
import { RotationNumber, RotationPhase } from '../types';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  RotateCw,
  Eye,
  Sliders,
  Sparkles,
} from 'lucide-react';

interface RotationControlsProps {
  currentRotation: RotationNumber;
  currentPhase: RotationPhase;
  isPlaying: boolean;
  playSpeed: number;
  showOverlaps: boolean;
  showBallAnimation: boolean;
  onSelectRotation: (rot: RotationNumber) => void;
  onSelectPhase: (phase: RotationPhase) => void;
  onTogglePlay: () => void;
  onNextPhase: () => void;
  onPrevPhase: () => void;
  onToggleOverlaps: () => void;
  onToggleBallAnimation: () => void;
  onChangeSpeed: (speed: number) => void;
}

const PHASES: { id: RotationPhase; label: string; step: number; short: string }[] = [
  { id: 'base', label: '1. Posición Base', step: 1, short: 'Base' },
  { id: 'recepcion', label: '2. Recepción (K1)', step: 2, short: 'Pase' },
  { id: 'permuta', label: '3. Permuta / Sprint', step: 3, short: 'Permuta' },
  { id: 'ataque', label: '4. Remate & Cobertura', step: 4, short: 'Ataque' },
];

export const RotationControls: React.FC<RotationControlsProps> = ({
  currentRotation,
  currentPhase,
  isPlaying,
  playSpeed,
  showOverlaps,
  showBallAnimation,
  onSelectRotation,
  onSelectPhase,
  onTogglePlay,
  onNextPhase,
  onPrevPhase,
  onToggleOverlaps,
  onToggleBallAnimation,
  onChangeSpeed,
}) => {
  return (
    <div className="w-full bg-[#0b0f19] border border-amber-500/30 rounded-xl p-4 sm:p-5 shadow-[0_4px_25px_rgba(0,0,0,0.6)]">
      {/* Rotations 1 to 6 Pills */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-bold uppercase tracking-widest text-amber-300 font-['Cinzel'] flex items-center gap-1.5">
            <span>ROTACIÓN DEL SISTEMA 5-1:</span>
          </label>
          <span className="text-[11px] text-slate-400 font-medium font-['Cinzel']">
            Colocador en Zona {currentRotation === 1 ? '1 (Zaguero)' : currentRotation === 2 ? '2 (Delantero)' : currentRotation === 3 ? '3 (Centro Delantero)' : currentRotation === 4 ? '4 (Delantero Izq)' : currentRotation === 5 ? '5 (Zaguero Izq)' : '6 (Zaguero Centro)'}
          </span>
        </div>

        {/* 6 Rotation Tabs */}
        <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
          {([1, 2, 3, 4, 5, 6] as RotationNumber[]).map((rot) => {
            const isSelected = currentRotation === rot;
            const isSetterFront = rot === 2 || rot === 3 || rot === 4;

            return (
              <button
                key={rot}
                id={`btn-rotation-P${rot}`}
                onClick={() => onSelectRotation(rot)}
                className={`relative py-2 px-1 sm:px-2 rounded-lg font-['Cinzel'] font-bold text-center transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-gradient-to-b from-amber-500 to-orange-600 border-amber-300 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.5)] scale-102'
                    : 'bg-slate-900/90 border-slate-700/80 hover:border-amber-500/60 text-slate-300 hover:text-white'
                }`}
              >
                <div className="text-sm sm:text-base font-extrabold font-['Bebas_Neue']">
                  P{rot}
                </div>
                <div className="text-[8px] sm:text-[9px] uppercase tracking-tighter truncate opacity-90">
                  {isSetterFront ? 'S Delantero' : 'S Zaguero'}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Phase Stepper (Base -> Recepción -> Permuta -> Ataque) */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-bold uppercase tracking-widest text-amber-300 font-['Cinzel']">
            FASE TÁCTICA DEL PUNTO:
          </label>
          <span className="text-[11px] text-amber-400 font-semibold font-['Cinzel']">
            Paso {PHASES.find((p) => p.id === currentPhase)?.step} de 4
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {PHASES.map((phase) => {
            const isCurrent = currentPhase === phase.id;

            return (
              <button
                key={phase.id}
                id={`btn-phase-${phase.id}`}
                onClick={() => onSelectPhase(phase.id)}
                className={`relative py-2 px-2 sm:px-3 rounded-lg text-xs font-bold font-['Cinzel'] tracking-wider text-left transition-all border cursor-pointer ${
                  isCurrent
                    ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-amber-400 text-amber-200 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-600 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{phase.label}</span>
                  {isCurrent && (
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Playback Controls & Speed */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800">
        {/* Play / Pause and Next/Prev */}
        <div className="flex items-center gap-2">
          <button
            id="btn-prev-phase"
            onClick={onPrevPhase}
            title="Fase anterior"
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          <button
            id="btn-play-pause-sequence"
            onClick={onTogglePlay}
            className={`px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider font-['Cinzel'] flex items-center gap-2 transition-all cursor-pointer ${
              isPlaying
                ? 'bg-red-500 hover:bg-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-white" />
                Pausar Animación
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-slate-950" />
                Animación Continua
              </>
            )}
          </button>

          <button
            id="btn-next-phase"
            onClick={onNextPhase}
            title="Siguiente fase"
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
          >
            <SkipForward className="w-4 h-4" />
          </button>

          {/* Speed selector */}
          <div className="hidden sm:flex items-center gap-1 ml-2 bg-slate-900 px-2 py-1 rounded-lg border border-slate-800">
            <span className="text-[10px] text-slate-400 font-mono mr-1">Velocidad:</span>
            {[0.5, 1, 1.5].map((speed) => (
              <button
                key={speed}
                onClick={() => onChangeSpeed(speed)}
                className={`px-1.5 py-0.5 rounded text-[10px] font-bold font-mono transition-colors ${
                  playSpeed === speed
                    ? 'bg-amber-500 text-slate-950'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>
        </div>

        {/* Feature Toggles: Overlaps & Ball Trajectory */}
        <div className="flex items-center gap-2">
          <button
            id="toggle-overlaps"
            onClick={onToggleOverlaps}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-['Cinzel'] flex items-center gap-1.5 transition-colors border ${
              showOverlaps
                ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            Líneas de Overlap
          </button>

          <button
            id="toggle-ball-trajectory"
            onClick={onToggleBallAnimation}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-['Cinzel'] flex items-center gap-1.5 transition-colors border ${
              showBallAnimation
                ? 'bg-orange-500/20 border-orange-400 text-orange-300'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Animar Balón
          </button>
        </div>
      </div>
    </div>
  );
};
