export type VolleyballPosition = 'S' | 'OP' | 'OH1' | 'OH2' | 'MB1' | 'MB2' | 'L';

export type RoleCategory = 'armador' | 'opuesto' | 'punta' | 'central' | 'libero';

export type RotationNumber = 1 | 2 | 3 | 4 | 5 | 6;

export type RotationPhase = 'base' | 'recepcion' | 'permuta' | 'ataque';

export interface PlayerCoord {
  id: VolleyballPosition;
  number: number;
  label: string;
  name: string;
  role: RoleCategory;
  roleShort: string;
  x: number; // 0 to 100% (horizontal coordinate on half court)
  y: number; // 0 to 100% (vertical coordinate on half court: 0 = net, 100 = end line)
  isFrontRow: boolean;
  zone: number; // 1 to 6
  actionNote?: string;
}

export interface OverlapRule {
  player1: VolleyballPosition;
  player2: VolleyballPosition;
  relationship: 'delante_de' | 'a_la_derecha_de' | 'a_la_izquierda_de' | 'detras_de';
  description: string;
}

export interface PhaseDetails {
  players: PlayerCoord[];
  title: string;
  description: string;
  keyRule: string;
  passers?: VolleyballPosition[];
  ballPath?: { from: { x: number; y: number }; to: { x: number; y: number }; target: string }[];
}

export interface RotationConfig {
  rotation: RotationNumber;
  title: string;
  setterZone: number;
  subtitle: string;
  difficulty: 'Fácil' | 'Media' | 'Avanzada';
  summary: string;
  phases: Record<RotationPhase, PhaseDetails>;
  overlapWarnings: OverlapRule[];
  tacticalAdvice: string[];
}

export interface PlayerRoleInfo {
  category: RoleCategory;
  title: string;
  shortCode: string;
  roleSubtitle: string;
  color: string;
  badgeBg: string;
  description: string;
  keyDuties: string[];
  rotationRulesIn51: string[];
  skillsRequired: string[];
  haikyuuExamples: string[];
  idealZones: number[];
}

export interface HaikyuuCharacter {
  id: string;
  name: string;
  teamColor: string;
  number: number;
  role: RoleCategory;
  roleTitle: string;
  quote: string;
  avatarSeed: string;
  accentColor: string;
  stats: {
    potencia: number;
    salto: number;
    resistencia: number;
    tecnica: number;
    estrategia: number;
    velocidad: number;
  };
  signatureMove: string;
  description: string;
}
