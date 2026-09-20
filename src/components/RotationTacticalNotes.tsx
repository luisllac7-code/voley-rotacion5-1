import React from 'react';
import { motion } from 'motion/react';
import { RotationConfig, RotationPhase, PlayerCoord } from '../types';
import {
  ShieldAlert,
  HelpCircle,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  UserCheck,
  Flame,
} from 'lucide-react';

interface RotationTacticalNotesProps {
  rotationConfig: RotationConfig;
  currentPhase: RotationPhase;
  selectedPlayer: PlayerCoord | null;
  onClearSelectedPlayer: () => void;
}

export const RotationTacticalNotes: React.FC<RotationTacticalNotesProps> = ({
  rotationConfig,
  currentPhase,
  selectedPlayer,
  onClearSelectedPlayer,
}) => {
  const currentPhaseData = rotationConfig.phases[currentPhase];

  return (
    <div className="w-full bg-[#0b0f19] border border-amber-500/30 rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,0.6)] text-white space-y-4">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-amber-500/20 pb-3 gap-2">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-amber-400 font-['Cinzel']">
            EXPLICACIÓN TÁCTICA 5-1
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold font-['Cinzel'] text-white">
            {rotationConfig.title}: {currentPhaseData.title}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-300 text-xs font-semibold font-['Cinzel']">
            Dificultad: {rotationConfig.difficulty}
          </span>
        </div>
      </div>

      {/* Selected Player Focus Card (If a player on court was clicked) */}
      {selectedPlayer ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3.5 rounded-lg bg-gradient-to-r from-amber-500/20 via-orange-500/15 to-transparent border border-amber-400/60 flex items-start justify-between"
        >
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-amber-500 text-slate-950 font-extrabold font-['Bebas_Neue'] flex items-center justify-center text-base flex-shrink-0">
              #{selectedPlayer.number}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-white font-['Cinzel']">
                  {selectedPlayer.name} ({selectedPlayer.roleShort})
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/60 text-amber-300 font-mono">
                  Zona {selectedPlayer.zone} • {selectedPlayer.isFrontRow ? 'Delantero' : 'Zaguero'}
                </span>
              </div>
              <p className="mt-1 text-xs text-amber-100/90 font-['Plus_Jakarta_Sans']">
                {selectedPlayer.actionNote || 'Posicionamiento táctico en esta fase.'}
              </p>
            </div>
          </div>
          <button
            onClick={onClearSelectedPlayer}
            className="text-[11px] text-slate-400 hover:text-white underline cursor-pointer"
          >
            Ver todos
          </button>
        </motion.div>
      ) : null}

      {/* Phase Description */}
      <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
        <div className="text-xs font-bold uppercase tracking-wider text-amber-300 font-['Cinzel'] mb-1 flex items-center gap-1.5">
          <Lightbulb className="w-4 h-4 text-amber-400" />
          ¿Qué ocurre en esta fase?
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-['Plus_Jakarta_Sans']">
          {currentPhaseData.description}
        </p>
      </div>

      {/* Tactical Key Rule */}
      <div className="p-3 rounded-lg bg-slate-900/60 border border-amber-500/20">
        <div className="text-xs font-bold uppercase tracking-wider text-orange-400 font-['Cinzel'] mb-1 flex items-center gap-1.5">
          <CheckCircle className="w-4 h-4 text-orange-400" />
          Regla Clave del Sistema:
        </div>
        <p className="text-xs text-amber-200/90 font-['Plus_Jakarta_Sans']">
          {currentPhaseData.keyRule}
        </p>
      </div>

      {/* Critical Overlap Rules (Evitar Falta de Posición) */}
      <div className="p-3.5 rounded-lg bg-red-950/20 border border-red-500/30">
        <div className="text-xs font-bold uppercase tracking-wider text-red-400 font-['Cinzel'] mb-2 flex items-center gap-1.5">
          <ShieldAlert className="w-4 h-4 text-red-400" />
          Reglas de Overlap (Para evitar Falta de Posición en P{rotationConfig.rotation}):
        </div>
        <ul className="space-y-1.5">
          {rotationConfig.overlapWarnings.map((rule, idx) => (
            <li
              key={idx}
              className="text-xs text-red-200/90 flex items-start gap-2 font-['Plus_Jakarta_Sans']"
            >
              <span className="text-red-400 font-bold">•</span>
              <span>{rule.description}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Coach Tactical Tips */}
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-amber-300 font-['Cinzel'] mb-2 flex items-center gap-1.5">
          <Flame className="w-4 h-4 text-orange-500" />
          Consejos del Entrenador Ukai:
        </div>
        <div className="grid grid-cols-1 gap-2">
          {rotationConfig.tacticalAdvice.map((advice, i) => (
            <div
              key={i}
              className="text-xs text-slate-300 bg-black/40 p-2.5 rounded-md border-l-2 border-amber-500 flex items-start gap-2 font-['Plus_Jakarta_Sans']"
            >
              <ArrowRight className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
              <span>{advice}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
