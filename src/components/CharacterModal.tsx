import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HaikyuuCharacter } from '../types';
import { X, Sparkles, Trophy, Zap, Shield, Target, Play } from 'lucide-react';
import { AnimeAvatar } from './PlayerRosterBar';

interface CharacterModalProps {
  character: HaikyuuCharacter | null;
  onClose: () => void;
  onViewInCourt: (role: string) => void;
}

export const CharacterModal: React.FC<CharacterModalProps> = ({
  character,
  onClose,
  onViewInCourt,
}) => {
  if (!character) return null;

  const statLabels: Record<string, string> = {
    potencia: 'Potencia de Remate',
    salto: 'Salto Vertical',
    resistencia: 'Resistencia Física',
    tecnica: 'Técnica & Toque',
    estrategia: 'Inteligencia Táctica',
    velocidad: 'Velocidad de Reacción',
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md">
        {/* Backdrop click to close */}
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border border-amber-500/40 bg-gradient-to-b from-[#111724] via-[#0d121c] to-[#080b11] text-white shadow-[0_0_50px_rgba(0,0,0,0.9)] p-5 sm:p-7 z-10 scrollbar-thin scrollbar-thumb-amber-500/30"
        >
          {/* Close button */}
          <button
            id="btn-close-modal"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-amber-500/20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header area with avatar, name and team */}
          <div className="flex flex-col sm:flex-row items-center gap-5 border-b border-amber-500/20 pb-5">
            <div className="relative w-28 h-32 flex-shrink-0 rounded-lg bg-slate-900/90 border border-amber-500/40 p-2 flex items-center justify-center shadow-lg">
              <AnimeAvatar character={character} className="w-24 h-28" />
              <span className="absolute bottom-1 right-1 text-xs font-bold px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 font-['Bebas_Neue']">
                #{character.number}
              </span>
            </div>

            <div className="text-center sm:text-left flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <span className="px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 font-['Cinzel']">
                  Facultad de Ingenieria
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider bg-orange-600/30 text-orange-200 border border-orange-500/30 font-['Cinzel']">
                  {character.roleTitle}
                </span>
              </div>

              {/* Quote */}
              <p className="mt-2 text-xs sm:text-sm italic text-amber-200/90 font-['Plus_Jakarta_Sans'] bg-black/40 p-2.5 rounded-lg border-l-2 border-amber-400">
                "{character.quote}"
              </p>
            </div>
          </div>

          {/* Signature Move */}
          <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent border border-amber-500/30 flex items-center gap-3">
            <div className="p-2 rounded-md bg-amber-500/20 text-amber-300">
              <Zap className="w-5 h-5 text-amber-400 animate-pulse" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-amber-400 font-['Cinzel']">
                Técnica Especial / Habilidad Emblema
              </div>
              <div className="text-sm sm:text-base font-bold text-white font-['Plus_Jakarta_Sans']">
                {character.signatureMove}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-['Plus_Jakarta_Sans']">
            {character.description}
          </p>

          {/* Stats Breakdown */}
          <div className="mt-5">
            <h4 className="text-xs uppercase font-bold tracking-widest text-amber-300 font-['Cinzel'] mb-3 flex items-center gap-2">
              <Target className="w-4 h-4 text-amber-400" />
              Parámetros de Jugador (Estilo Haikyuu)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5">
              {Object.entries(character.stats).map(([statKey, value]) => (
                <div key={statKey} className="flex flex-col gap-1">
                  <div className="flex justify-between text-xs text-slate-300 font-medium">
                    <span>{statLabels[statKey] || statKey}</span>
                    <span className="font-bold text-amber-400">{value} / 100</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${value}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action button: View role on court */}
          <div className="mt-6 pt-4 border-t border-amber-500/20 flex flex-col sm:flex-row justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs uppercase tracking-wider font-['Cinzel'] transition-colors"
            >
              Cerrar
            </button>
            <button
              id="btn-ver-en-rotacion"
              onClick={() => {
                onViewInCourt(character.role);
                onClose();
              }}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-xs uppercase tracking-wider font-['Cinzel'] shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              Ver su Rol en la Rotación 5-1
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
