import React from 'react';
import { motion } from 'motion/react';
import { HaikyuuCharacter } from '../types';
import { Sparkles, Info, Shield, Zap } from 'lucide-react';

interface PlayerRosterBarProps {
  characters: HaikyuuCharacter[];
  selectedCharacter: HaikyuuCharacter | null;
  onSelectCharacter: (char: HaikyuuCharacter) => void;
}

// Custom stylized anime avatar renderer with characteristic hair/jersey colors
export const AnimeAvatar: React.FC<{
  character: HaikyuuCharacter;
  className?: string;
}> = ({ character, className = 'w-full h-full' }) => {
  const getAvatarStyles = () => {
    switch (character.id) {
      case 'Cristhian':
        return {
          hairColor: '#1E293B',
          skinColor: '#FDE047',
          hairPath: 'M30 40 Q50 15 70 40 Q55 30 45 42 Q35 32 30 40 Z',
          eyes: '#38BDF8',
          jersey: '#FF6B00',
          number: '9'
        };
      case 'luis':
        return {
          hairColor: '#F97316',
          skinColor: '#FDE047',
          hairPath: 'M25 45 Q50 10 75 45 Q65 25 50 35 Q35 25 25 45 Z',
          eyes: '#9A3412',
          jersey: '#FF6B00',
          number: '10'
        };
      case 'josue':
        return {
          hairColor: '#78350F',
          skinColor: '#FDE047',
          hairPath: 'M28 42 Q48 16 72 40 Q62 28 50 36 Q38 28 28 42 Z',
          eyes: '#0D9488',
          jersey: '#00A896',
          number: '1'
        };
      case 'Jesus':
        return {
          hairColor: '#365314',
          skinColor: '#FDE047',
          hairPath: 'M32 38 Q50 20 68 38 Q58 32 48 35 Q38 32 32 38 Z',
          eyes: '#4D7C0F',
          jersey: '#7B1FA2',
          number: '1'
        };
      case 'César':
        return {
          hairColor: '#F1F5F9',
          skinColor: '#FDE047',
          hairPath: 'M25 46 Q35 12 50 25 Q65 12 75 46 Q60 30 50 38 Q40 30 25 46 Z',
          eyes: '#EAB308',
          jersey: '#334155',
          number: '4'
        };
      case 'Alessandro':
        return {
          hairColor: '#451A03',
          skinColor: '#FDE047',
          hairPath: 'M26 48 Q35 10 50 22 Q65 10 74 48 Q60 32 50 36 Q40 32 26 48 Z',
          eyes: '#B45309',
          jersey: '#16A34A', // Libero jersey contrast
          number: '4'
        };
      case 'Adrian':
        return {
          hairColor: '#FDE047',
          skinColor: '#FDE047',
          hairPath: 'M30 40 Q50 20 70 40 Q60 30 50 36 Q40 30 30 40 Z',
          eyes: '#EAB308',
          jersey: '#FF6B00',
          number: '11',
          hasGlasses: true
        };
      case 'kuroo':
        return {
          hairColor: '#0F172A',
          skinColor: '#FDE047',
          hairPath: 'M25 45 Q40 10 75 35 Q60 25 50 35 Q35 28 25 45 Z',
          eyes: '#DC2626',
          jersey: '#DC2626',
          number: '1'
        };
      case 'kenma':
        return {
          hairColor: '#EAB308',
          skinColor: '#FDE047',
          hairPath: 'M28 42 Q50 22 72 42 Q60 35 50 40 Q40 35 28 42 Z',
          eyes: '#CA8A04',
          jersey: '#DC2626',
          number: '5'
        };
      case 'atsumu':
        return {
          hairColor: '#F59E0B',
          skinColor: '#FDE047',
          hairPath: 'M28 40 Q50 18 72 40 Q62 28 50 36 Q38 28 28 40 Z',
          eyes: '#854D0E',
          jersey: '#1E293B',
          number: '7'
        };
      default:
        return {
          hairColor: '#334155',
          skinColor: '#FDE047',
          hairPath: 'M30 40 Q50 18 70 40 Z',
          eyes: '#38BDF8',
          jersey: '#FF6B00',
          number: character.number.toString()
        };
    }
  };

  const style = getAvatarStyles();

  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 100 115"
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Aura */}
        <circle cx="50" cy="55" r="45" fill={character.teamColor} fillOpacity="0.15" />

        {/* Neck */}
        <rect x="42" y="60" width="16" height="15" rx="3" fill="#FED7AA" />

        {/* Jersey / Shoulders */}
        <path
          d="M20 115 C20 85 32 72 50 72 C68 72 80 85 80 115 Z"
          fill={style.jersey}
        />
        {/* Jersey Collar */}
        <path d="M42 72 L50 82 L58 72 Z" fill="#FFFFFF" />

        {/* Number on Jersey */}
        <text
          x="50"
          y="102"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="14"
          fontWeight="bold"
          fontFamily="Bebas Neue, sans-serif"
        >
          {style.number}
        </text>

        {/* Face */}
        <path
          d="M32 45 C32 64 42 72 50 72 C58 72 68 64 68 45 C68 32 58 32 50 32 C42 32 32 32 32 45 Z"
          fill="#FED7AA"
        />

        {/* Spiky Anime Hair */}
        <path d={style.hairPath} fill={style.hairColor} />
        {/* Hair highlights / volume */}
        <path
          d="M30 42 C35 25 65 25 70 42 C65 30 35 30 30 42 Z"
          fill={style.hairColor}
        />

        {/* Eyes (Anime fierce look) */}
        <ellipse cx="42" cy="48" rx="3.5" ry="2.5" fill="#0F172A" />
        <ellipse cx="58" cy="48" rx="3.5" ry="2.5" fill="#0F172A" />
        <circle cx="43" cy="47" r="1" fill="#FFFFFF" />
        <circle cx="59" cy="47" r="1" fill="#FFFFFF" />

        {/* Eyebrows angled */}
        <path d="M37 43 L46 45" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
        <path d="M63 43 L54 45" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />

        {/* Glasses for Adrian */}
        {style.hasGlasses && (
          <g stroke="#0F172A" strokeWidth="1.5" fill="none">
            <rect x="36" y="44" width="11" height="8" rx="1.5" />
            <rect x="53" y="44" width="11" height="8" rx="1.5" />
            <line x1="47" y1="48" x2="53" y2="48" />
          </g>
        )}

        {/* Mouth */}
        <path d="M47 58 Q50 60 53 58" stroke="#9A3412" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export const PlayerRosterBar: React.FC<PlayerRosterBarProps> = ({
  characters,
  selectedCharacter,
  onSelectCharacter,
}) => {
  return (
    <section className="relative w-full bg-[#07090e] py-6 border-t border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* Section title styled like the user's reference image:
            "¡SELECCIONA TU BOXEADOR O BOXEADORA!" -> "¡SELECCIONA TU JUGADOR O POSICIÓN!" */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-[1px] w-12 sm:w-28 bg-gradient-to-r from-transparent to-amber-400" />
          <div className="flex items-center gap-2">
            <span className="text-amber-400 text-sm">✦</span>
            <h2 className="text-xs sm:text-sm md:text-base font-bold tracking-[0.25em] text-amber-300 uppercase font-['Cinzel'] text-center drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]">
              ¡SELECCIONA TU JUGADOR O POSICIÓN!
            </h2>
            <span className="text-amber-400 text-sm">✦</span>
          </div>
          <div className="h-[1px] w-12 sm:w-28 bg-gradient-to-l from-transparent to-amber-400" />
        </div>

        {/* Horizontal Scrollable Dock of Character Cards (Exact style of user image) */}
        <div className="flex items-stretch gap-2.5 sm:gap-3 overflow-x-auto pb-4 pt-1 px-1 scrollbar-thin scrollbar-thumb-amber-500/40 scrollbar-track-slate-900/60 snap-x">
          {characters.map((char) => {
            const isSelected = selectedCharacter?.id === char.id;

            return (
              <motion.button
                key={char.id}
                id={`card-player-${char.id}`}
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onSelectCharacter(char)}
                className={`relative flex-shrink-0 w-28 sm:w-32 md:w-36 rounded-md overflow-hidden transition-all duration-300 text-left snap-start cursor-pointer border ${isSelected
                  ? 'border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.5)] ring-1 ring-amber-400'
                  : 'border-amber-500/25 hover:border-amber-400/80 bg-[#0c1017]'
                  }`}
                style={{
                  background: isSelected
                    ? 'linear-gradient(180deg, #161e2e 0%, #0c1017 100%)'
                    : '#0c1017',
                }}
              >
                {/* Character Role Tag Badge at Top */}
                <div className="absolute top-1.5 left-1.5 z-10">
                  <span
                    className="text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider font-['Cinzel'] shadow-sm text-white"
                    style={{
                      backgroundColor:
                        char.role === 'armador'
                          ? '#D97706'
                          : char.role === 'opuesto'
                            ? '#DC2626'
                            : char.role === 'punta'
                              ? '#2563EB'
                              : char.role === 'central'
                                ? '#059669'
                                : '#CA8A04',
                    }}
                  >
                    {char.role.slice(0, 3)} #{char.number}
                  </span>
                </div>

                {/* Team Pill */}
                <div className="absolute top-1.5 right-1.5 z-10 text-[9px] text-slate-400 font-medium">
                  {char.team}
                </div>

                {/* Portrait Area */}
                <div className="relative w-full h-28 sm:h-32 pt-3 flex items-center justify-center bg-gradient-to-b from-slate-900/60 to-[#0c1017]">
                  <AnimeAvatar character={char} className="w-24 h-24 sm:w-28 sm:h-28" />

                  {/* Gradient Shadow at Bottom of Portrait */}
                  <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#0c1017] to-transparent pointer-events-none" />
                </div>

                {/* Gold Nameplate at Bottom (Faithful to the user's reference image) */}
                <div
                  className={`w-full py-1.5 px-2 text-center transition-colors ${isSelected
                    ? 'bg-amber-500/20 text-amber-200 border-t border-amber-400/50'
                    : 'bg-[#090d14] text-amber-100/90 border-t border-amber-500/20'
                    }`}
                >
                  <div className="font-['Cinzel'] font-bold text-[11px] sm:text-xs tracking-[0.15em] uppercase truncate text-amber-200">
                    {char.name}
                  </div>
                  <div className="text-[9px] text-slate-400 tracking-wider truncate font-['Plus_Jakarta_Sans'] capitalize">
                    {char.role}
                  </div>
                </div>

                {/* Selection indicator underline */}
                {isSelected && (
                  <div className="h-0.5 w-full bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 animate-pulse" />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
