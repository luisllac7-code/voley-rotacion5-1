import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { HeaderBanner } from './components/HeaderBanner';
import { PlayerRosterBar } from './components/PlayerRosterBar';
import { CharacterModal } from './components/CharacterModal';
import { CourtBoard } from './components/CourtBoard';
import { RotationControls } from './components/RotationControls';
import { RotationTacticalNotes } from './components/RotationTacticalNotes';
import { RolesSection } from './components/RolesSection';
import { RotationQuizModal } from './components/RotationQuizModal';
import { ROTATIONS_CONFIG } from './data/rotationData';
import { HAIKYUU_CHARACTERS } from './data/charactersData';
import {
  RotationNumber,
  RotationPhase,
  PlayerCoord,
  HaikyuuCharacter,
  RoleCategory,
} from './types';
import {
  Trophy,
  Flame,
  Shield,
  Sparkles,
  HelpCircle,
  RotateCcw,
  Layers,
  ArrowDown,
  Tv,
} from 'lucide-react';

export default function App() {
  // Rotations & Phases State
  const [currentRotation, setCurrentRotation] = useState<RotationNumber>(1);
  const [currentPhase, setCurrentPhase] = useState<RotationPhase>('base');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playSpeed, setPlaySpeed] = useState<number>(1);
  const [showOverlaps, setShowOverlaps] = useState<boolean>(true);
  const [showBallAnimation, setShowBallAnimation] = useState<boolean>(true);

  // Selected player / character
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerCoord | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<HaikyuuCharacter | null>(null);
  const [highlightedRole, setHighlightedRole] = useState<string | null>(null);

  // Modals
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);

  // Auto-play Sequencer effect
  useEffect(() => {
    if (!isPlaying) return;

    const phaseSequence: RotationPhase[] = ['base', 'recepcion', 'permuta', 'ataque'];

    const duration = Math.round(2400 / playSpeed);
    const timer = setInterval(() => {
      setCurrentPhase((prevPhase) => {
        const currentIndex = phaseSequence.indexOf(prevPhase);
        if (currentIndex < phaseSequence.length - 1) {
          return phaseSequence[currentIndex + 1];
        } else {
          // Loop back to base of same rotation
          return 'base';
        }
      });
    }, duration);

    return () => clearInterval(timer);
  }, [isPlaying, playSpeed]);

  const activeConfig = ROTATIONS_CONFIG[currentRotation];

  // Handlers
  const handleSelectRotation = (rot: RotationNumber) => {
    setCurrentRotation(rot);
    setCurrentPhase('base');
    setSelectedPlayer(null);
  };

  const handleSelectPhase = (phase: RotationPhase) => {
    setCurrentPhase(phase);
  };

  const handleNextPhase = () => {
    const phases: RotationPhase[] = ['base', 'recepcion', 'permuta', 'ataque'];
    const idx = phases.indexOf(currentPhase);
    if (idx < phases.length - 1) {
      setCurrentPhase(phases[idx + 1]);
    } else {
      // Advance rotation or loop to base
      setCurrentPhase('base');
    }
  };

  const handlePrevPhase = () => {
    const phases: RotationPhase[] = ['base', 'recepcion', 'permuta', 'ataque'];
    const idx = phases.indexOf(currentPhase);
    if (idx > 0) {
      setCurrentPhase(phases[idx - 1]);
    } else {
      setCurrentPhase('ataque');
    }
  };

  const handleHighlightRoleOnCourt = (role: RoleCategory) => {
    setHighlightedRole(role);
    // Scroll smoothly to simulator
    const courtEl = document.getElementById('simulador-cancha');
    if (courtEl) {
      courtEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#07090e] text-[#f2f4f8] flex flex-col font-['Plus_Jakarta_Sans'] selection:bg-orange-500 selection:text-white">
      {/* 1. Epic Cinematic Header (Inspired by reference image & Haikyuu) */}
      <HeaderBanner
        onExploreClick={() => {
          document.getElementById('simulador-cancha')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onRolesClick={() => {
          document.getElementById('seccion-roles')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onQuizClick={() => setIsQuizOpen(true)}
      />

      {/* 2. Character Selection Dock (Fighter Selection Bar from user's image) */}
      <PlayerRosterBar
        characters={HAIKYUU_CHARACTERS}
        selectedCharacter={selectedCharacter}
        onSelectCharacter={(char) => setSelectedCharacter(char)}
      />

      {/* 3. Main Court & 5-1 Interactive Simulator Section */}
      <main id="simulador-cancha" className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-6 py-8">
        {/* Section title banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 border-b border-amber-500/20 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 font-['Cinzel']">
                PIZARRA TÁCTICA INTERACTIVA
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cinzel'] text-white">
              SISTEMA DE ROTACIÓN 5-1 ANIMADO
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                handleSelectRotation(currentRotation === 6 ? 1 : ((currentRotation + 1) as RotationNumber));
              }}
              className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-400 text-slate-300 hover:text-white text-xs font-semibold font-['Cinzel'] flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
              Girar Rotación (+1)
            </button>
            <button
              onClick={() => setIsQuizOpen(true)}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 text-xs font-bold font-['Cinzel'] flex items-center gap-1.5 cursor-pointer shadow-md hover:brightness-110"
            >
              <Trophy className="w-3.5 h-3.5 fill-slate-950" />
              Probar mi Conocimiento
            </button>
          </div>
        </div>

        {/* 5-1 System Quick Explanation Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          <div className="p-3.5 rounded-xl bg-[#0c1017] border border-amber-500/20 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 font-bold">1</div>
            <div>
              <div className="text-xs font-bold text-amber-300 uppercase font-['Cinzel']">
                ¿Por qué se llama 5-1?
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Porque juegan <strong className="text-white">5 rematadores</strong> y <strong className="text-amber-400">1 único colocador</strong> en cancha. Brinda regularidad y ritmo ofensivo permanente.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0c1017] border border-amber-500/20 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 font-bold">2</div>
            <div>
              <div className="text-xs font-bold text-orange-300 uppercase font-['Cinzel']">
                La Penetración del Colocador
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Cuando el colocador es zaguero (P1, P6, P5), <strong className="text-white">penetra velozmente a la red</strong> tras el saque para que siempre haya 3 atacantes en primera línea.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0c1017] border border-amber-500/20 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 font-bold">3</div>
            <div>
              <div className="text-xs font-bold text-emerald-300 uppercase font-['Cinzel']">
                Regla de Falta de Posición
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Hasta el instante del golpe del sacador, ningún jugador puede sobrepasar a sus compañeros adyacentes (delante/detrás o izquierda/derecha).
              </p>
            </div>
          </div>
        </div>

        {/* Tactical Simulator Workspace Grid (Court on left/center, Controls & Notes on right/center) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Court Board (7 Cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <CourtBoard
              rotationConfig={activeConfig}
              currentPhase={currentPhase}
              highlightedRole={highlightedRole}
              showOverlaps={showOverlaps}
              showBallAnimation={showBallAnimation}
              onSelectPlayer={(p) => setSelectedPlayer(p)}
              selectedPlayer={selectedPlayer}
            />

            {/* Quick helper tag */}
            <p className="text-[11px] text-slate-400 text-center mt-3 font-['Plus_Jakarta_Sans']">
              💡 Haz clic en cualquier jugador en la cancha para inspeccionar su movimiento específico en esta fase.
            </p>
          </div>

          {/* Controls & Tactical Analysis Panel (5 Cols on desktop) */}
          <div className="lg:col-span-5 space-y-4">
            <RotationControls
              currentRotation={currentRotation}
              currentPhase={currentPhase}
              isPlaying={isPlaying}
              playSpeed={playSpeed}
              showOverlaps={showOverlaps}
              showBallAnimation={showBallAnimation}
              onSelectRotation={handleSelectRotation}
              onSelectPhase={handleSelectPhase}
              onTogglePlay={() => setIsPlaying(!isPlaying)}
              onNextPhase={handleNextPhase}
              onPrevPhase={handlePrevPhase}
              onToggleOverlaps={() => setShowOverlaps(!showOverlaps)}
              onToggleBallAnimation={() => setShowBallAnimation(!showBallAnimation)}
              onChangeSpeed={(spd) => setPlaySpeed(spd)}
            />

            <RotationTacticalNotes
              rotationConfig={activeConfig}
              currentPhase={currentPhase}
              selectedPlayer={selectedPlayer}
              onClearSelectedPlayer={() => setSelectedPlayer(null)}
            />
          </div>
        </div>
      </main>

      {/* 4. Complete Roles Encyclopedia Section */}
      <RolesSection onHighlightRoleOnCourt={handleHighlightRoleOnCourt} />

      {/* 5. Character Detail Modal (When a player is clicked in the bottom dock) */}
      <CharacterModal
        character={selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
        onViewInCourt={(role) => handleHighlightRoleOnCourt(role as RoleCategory)}
      />

      {/* 6. Interactive Quiz Modal */}
      <RotationQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />

      {/* Footer with anime signature */}
      <footer className="w-full bg-[#05070a] border-t border-amber-500/20 py-8 px-4 text-center text-xs text-slate-400 mt-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-amber-400 font-['Cinzel'] text-sm font-bold tracking-widest uppercase">
            <span>✦ TACTICA 5-1 SIMULATOR ✦</span>
          </div>
          <p className="max-w-xl text-slate-400">
            Guía interactiva basada en el reglamento oficial FIVB y el sistema táctico 5-1 de colocador único.
            Desarrollado por <strong>LUIS LLACSA</strong>
          </p>
        </div>
      </footer>
    </div>
  );
}
