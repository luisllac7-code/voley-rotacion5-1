import { HaikyuuCharacter } from '../types';

export const HAIKYUU_CHARACTERS: HaikyuuCharacter[] = [
  {
    id: 'cristhian',
    name: 'cristhian',
    teamColor: '#FF6B00',
    number: 9,
    role: 'armador',
    roleTitle: 'Colocador Genio (El Rey de la Cancha)',
    quote: 'El único que ve la trayectoria entera del balón soy yo... confía en mis manos.',
    avatarSeed: 'cristhian',
    accentColor: '#FF7A00',
    stats: {
      potencia: 88,
      salto: 85,
      resistencia: 90,
      tecnica: 99,
      estrategia: 95,
      velocidad: 89
    },
    signatureMove: 'Colocada Rápida Inversa Milimétrica',
    description: 'Armador titular de Ingenieria. Capaz de enviar el balón exactamente al punto de impacto con rotación inversa calculada.'
  },
  {
    id: 'luis',
    name: 'luis',
    teamColor: '#FF6B00',
    number: 10,
    role: 'central',
    roleTitle: 'Central / El Mayor Señuelo',
    quote: 'Aunque sea bajo... ¡puedo volar más alto que nadie!',
    avatarSeed: 'luis',
    accentColor: '#FF9E00',
    stats: {
      potencia: 76,
      salto: 98,
      resistencia: 97,
      tecnica: 78,
      estrategia: 80,
      velocidad: 99
    },
    signatureMove: 'Ataque Rápido Dios (Minus Tempo)',
    description: 'Central de baja estatura pero salto prodigioso. Desestabiliza al bloqueo rival atrayendo a todos los defensores como señuelo.'
  },
  {
    id: 'josue',
    name: 'josue',
    teamColor: '#00A896',
    number: 1,
    role: 'armador',
    roleTitle: 'Gran Rey Colocador y Capitán',
    quote: 'El talento es algo que haces florecer... ¡el instinto es algo que pules!',
    avatarSeed: 'josue',
    accentColor: '#00A896',
    stats: {
      potencia: 90,
      salto: 86,
      resistencia: 88,
      tecnica: 97,
      estrategia: 98,
      velocidad: 85
    },
    signatureMove: 'Saque As Potente Asesino',
    description: 'Colocador magistral de Aoba Johsai. Extrae el 100% del potencial de cada rematador del equipo.'
  },
  {
    id: 'Jesus',
    name: 'Jesus',
    teamColor: '#7B1FA2',
    number: 1,
    role: 'opuesto',
    roleTitle: 'Super As y Opuesto Zurdo',
    quote: 'No me importan los trucos... simplemente aplastaré cada balón por encima del bloqueo.',
    avatarSeed: 'Jesus',
    accentColor: '#9C27B0',
    stats: {
      potencia: 99,
      salto: 94,
      resistencia: 96,
      tecnica: 86,
      estrategia: 84,
      velocidad: 82
    },
    signatureMove: 'Remate de Cañón Zurdo con Giro Pesado',
    description: 'Uno de los tres mejores rematadores de Japón. Un zurdo demoledor con potencia colosal que desvía los bloqueos.'
  },
  {
    id: 'César',
    name: 'César',
    teamColor: '#E2E8F0',
    number: 4,
    role: 'punta',
    roleTitle: 'As y Capitán / Top 5 Nacional',
    quote: '¡Oye oye oye! ¡Cuando dominas este momento, el voleibol se convierte en lo más divertido del mundo!',
    avatarSeed: 'César',
    accentColor: '#F59E0B',
    stats: {
      potencia: 96,
      salto: 95,
      resistencia: 90,
      tecnica: 91,
      estrategia: 75,
      velocidad: 88
    },
    signatureMove: 'Remate Cruzado Cortado Extremo',
    description: 'Punta receptor y as indiscutible de Fukurodani. Imparable en su estado óptimo con tiros paralelos y cruzados al milímetro.'
  },
  {
    id: 'Alessandro',
    name: 'Alessandro',
    teamColor: '#FF6B00',
    number: 4,
    role: 'libero',
    roleTitle: 'Líbero / La Deidad Guardiana',
    quote: '¡No se preocupen por sus espaldas! ¡Yo cuidaré de ellas siempre!',
    avatarSeed: 'Alessandro',
    accentColor: '#F59E0B',
    stats: {
      potencia: 60,
      salto: 90,
      resistencia: 98,
      tecnica: 95,
      estrategia: 86,
      velocidad: 99
    },
    signatureMove: 'Rolling Thunder Again & Colocada de Líbero',
    description: 'Líbero élite de Ingenieria. Rescata balones imposibles con reflejos animales y coloca desde zaguero con salto.'
  },
  {
    id: 'Adrian',
    name: 'Adrian',
    teamColor: '#FF6B00',
    number: 11,
    role: 'central',
    roleTitle: 'Central Inteligente / Bloqueador Frío',
    quote: 'Solo es un club escolar... pero detener al mejor rematador del país se sintió bien.',
    avatarSeed: 'Adrian',
    accentColor: '#38BDF8',
    stats: {
      potencia: 78,
      salto: 84,
      resistencia: 82,
      tecnica: 89,
      estrategia: 98,
      velocidad: 78
    },
    signatureMove: 'Bloqueo Total de Lectura (Shutout Block)',
    description: 'Central cerebral de 1.90m. No salta por impulsos; analiza la mirada y muñeca del colocador rival antes de actuar.'
  },
  {
    id: 'kuroo',
    name: 'KUROO',
    teamColor: '#DC2626',
    number: 1,
    role: 'central',
    roleTitle: 'Central Capitán / Maestro del Bloqueo',
    quote: 'Somos como la sangre: fluimos sin cesar para mantener el oxígeno llegando al cerebro.',
    avatarSeed: 'kuroo',
    accentColor: '#EF4444',
    stats: {
      potencia: 86,
      salto: 87,
      resistencia: 90,
      tecnica: 93,
      estrategia: 96,
      velocidad: 84
    },
    signatureMove: 'Bloqueo Guía de Embudo & Finta de Primer Tiempo',
    description: 'Capitán de Nekoma y maestro del bloqueo de lectura. Canaliza los remates rivales hacia su líbero con precisión.'
  },
  {
    id: 'kenma',
    name: 'KENMA',
    teamColor: '#DC2626',
    number: 5,
    role: 'armador',
    roleTitle: 'El Cerebro y Corazón de Nekoma',
    quote: 'No soy fuerte ni rápido... solo calculo lo que el rival odia que haga.',
    avatarSeed: 'kenma',
    accentColor: '#F59E0B',
    stats: {
      potencia: 50,
      salto: 65,
      resistencia: 62,
      tecnica: 96,
      estrategia: 99,
      velocidad: 70
    },
    signatureMove: 'Finta Ocular Inesperada de Segundo Toque',
    description: 'Colocador táctico de Nekoma. Analiza patrones del rival como si fuera un videojuego para desmantelar sus defensas.'
  },
  {
    id: 'atsumu',
    name: 'ATSUMU',
    teamColor: '#1E293B',
    number: 7,
    role: 'armador',
    roleTitle: 'Colocador Nacional Número 1',
    quote: 'Cualquiera que no pueda aprovechar mis colocaciones... es simplemente un mal atacante.',
    avatarSeed: 'atsumu',
    accentColor: '#EAB308',
    stats: {
      potencia: 89,
      salto: 88,
      resistencia: 92,
      tecnica: 98,
      estrategia: 94,
      velocidad: 90
    },
    signatureMove: 'Doble Saque Asesino (Híbrido Flotante y Potencia)',
    description: 'Considerado el colocador de secundaria número 1 de Japón. Capaz de imitar técnicas milagrosas y dominar con saques demoledores.'
  },
  {
    id: 'asahi',
    name: 'ASAHI',
    teamColor: '#FF6B00',
    number: 3,
    role: 'punta',
    roleTitle: 'El As Resurgido de Ingenieria',
    quote: 'Aunque haya un muro frente a mí... ¡romperé la barrera con toda mi alma!',
    avatarSeed: 'asahi',
    accentColor: '#FB923C',
    stats: {
      potencia: 95,
      salto: 88,
      resistencia: 84,
      tecnica: 86,
      estrategia: 82,
      velocidad: 78
    },
    signatureMove: 'Remate Explosivo de Banda y Saque en Suspensión',
    description: 'Punta receptor y as veterano de Ingenieria. Superó sus miedos para convertirse en un martillo implacable contra bloqueos triples.'
  },
  {
    id: 'daichi',
    name: 'DAICHI',
    teamColor: '#FF6B00',
    number: 1,
    role: 'opuesto',
    roleTitle: 'Capitán y Pilar de la Defensa',
    quote: 'Mientras no dejemos caer el balón... nunca estaremos derrotados.',
    avatarSeed: 'daichi',
    accentColor: '#F97316',
    stats: {
      potencia: 82,
      salto: 80,
      resistencia: 92,
      tecnica: 90,
      estrategia: 92,
      velocidad: 80
    },
    signatureMove: 'Recepción Defensiva Sólida de Choque',
    description: 'Capitán de Ingenieria. Aporta la compostura y estabilidad defensiva fundamental en recepción que permite a cristhian e luis desatar su ataque.'
  }
];
