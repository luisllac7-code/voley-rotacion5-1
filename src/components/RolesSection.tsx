import React, { useState } from 'react';
import { motion } from 'motion/react';
import { VOLLEYBALL_ROLES } from '../data/rolesData';
import { RoleCategory, PlayerRoleInfo } from '../types';
import {
  Shield,
  Zap,
  Target,
  Users,
  ChevronRight,
  Flame,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface RolesSectionProps {
  onHighlightRoleOnCourt: (role: RoleCategory) => void;
}

export const RolesSection: React.FC<RolesSectionProps> = ({
  onHighlightRoleOnCourt,
}) => {
  const [activeCategory, setActiveCategory] = useState<RoleCategory>('armador');

  const activeRole: PlayerRoleInfo = VOLLEYBALL_ROLES[activeCategory];

  const categories: { id: RoleCategory; label: string; }[] = [
    { id: 'armador', label: 'Colocador / Armador' },
    { id: 'opuesto', label: 'Opuesto' },
    { id: 'punta', label: 'Punta Receptor' },
    { id: 'central', label: 'Central' },
    { id: 'libero', label: 'Líbero' }
  ];

  return (
    <section id="seccion-roles" className="w-full py-10 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Title with metallic Haikyuu accents */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-amber-400" />
          <span className="text-xs sm:text-sm tracking-[0.25em] text-amber-300 uppercase font-semibold font-['Cinzel']">
            ENCICLOPEDIA DE POSICIONES FIVB
          </span>
          <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-amber-400" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Cinzel'] text-white uppercase tracking-tight">
          LOS 5 ROLES DEL VOLEIBOL EN EL SISTEMA 5-1
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
          Descubre las responsabilidades de cada jugador, sus zonas de acción y sus habilidades requeridas.
        </p>
      </div>

      {/* Role Navigation Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              id={`tab-role-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-lg font-['Cinzel'] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer border ${isSelected
                ? 'bg-gradient-to-r from-amber-500 to-orange-600 border-amber-300 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.5)] scale-105'
                : 'bg-slate-900/80 border-slate-700/80 hover:border-amber-500/50 text-slate-300 hover:text-white'
                }`}
            >
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Role Showcase Card */}
      <motion.div
        key={activeRole.category}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border border-amber-500/40 bg-gradient-to-b from-[#101726] via-[#0b0f1a] to-[#070a12] p-6 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Col 1 & 2: Overview and Key Duties */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/20 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="px-2.5 py-0.5 rounded text-xs font-bold text-white uppercase tracking-wider font-['Cinzel'] shadow-sm"
                    style={{ backgroundColor: activeRole.color }}
                  >
                    {activeRole.shortCode}
                  </span>
                  <span className="text-xs text-amber-400 font-bold font-['Cinzel'] uppercase tracking-widest">
                    Zonas ideales: {activeRole.idealZones.join(', ')}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-['Cinzel'] text-white mt-1">
                  {activeRole.title}
                </h3>
                <p className="text-sm text-amber-200/90 font-medium font-['Plus_Jakarta_Sans']">
                  {activeRole.roleSubtitle}
                </p>
              </div>

              <button
                id={`btn-ver-cancha-${activeRole.category}`}
                onClick={() => onHighlightRoleOnCourt(activeRole.category)}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-xs uppercase tracking-wider font-['Cinzel'] shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Zap className="w-4 h-4 fill-slate-950" />
                Resaltar en Simulador 5-1
              </button>
            </div>

            {/* Role Detailed Description */}
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-['Plus_Jakarta_Sans']">
              {activeRole.description}
            </p>

            {/* Key Duties Checklist */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-widest text-amber-300 font-['Cinzel'] mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-amber-400" />
                Responsabilidades Principales en la Cancha:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeRole.keyDuties.map((duty, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-900/70 border border-slate-800 text-xs sm:text-sm text-slate-200 flex items-start gap-2.5 font-['Plus_Jakarta_Sans']"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{duty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5-1 Specific Rules */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <h4 className="text-xs uppercase font-bold tracking-widest text-amber-300 font-['Cinzel'] mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400" />
                Reglas Específicas en el Sistema 5-1:
              </h4>
              <ul className="space-y-1.5">
                {activeRole.rotationRulesIn51.map((rule, idx) => (
                  <li
                    key={idx}
                    className="text-xs sm:text-sm text-amber-100/90 flex items-start gap-2 font-['Plus_Jakarta_Sans']"
                  >
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3: Haikyuu Characters & Skills */}
          <div className="space-y-6">
            {/* Haikyuu Characters Box */}
            <div className="p-5 rounded-xl bg-slate-900/90 border border-amber-500/30">
              <h4 className="text-xs uppercase font-bold tracking-widest text-amber-300 font-['Cinzel'] mb-3 flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-500" />
                Jugadores Emblema en Haikyuu:
              </h4>
              <div className="space-y-2">
                {activeRole.haikyuuExamples.map((example, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-black/40 border border-slate-800 flex items-center justify-between text-xs sm:text-sm font-semibold text-white font-['Cinzel']"
                  >
                    <span>{example}</span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Required Skills */}
            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800">
              <h4 className="text-xs uppercase font-bold tracking-widest text-slate-300 font-['Cinzel'] mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-amber-400" />
                Habilidades y Atributos Clave:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeRole.skillsRequired.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium font-['Plus_Jakarta_Sans']"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
