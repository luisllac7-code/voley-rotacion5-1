import { PlayerRoleInfo } from '../types';

export const VOLLEYBALL_ROLES: Record<string, PlayerRoleInfo> = {
  armador: {
    category: 'armador',
    title: 'Colocador / Armador',
    shortCode: 'S (Setter)',
    roleSubtitle: 'El Cerebro Táctico y Distribuidor del Juego',
    color: '#FF7A00',
    badgeBg: 'bg-gradient-to-r from-amber-500 to-orange-600',
    description:
      'En el sistema 5-1, existe un ÚNICO colocador en cancha durante todo el partido. Es quien toca el segundo balón para armar el ataque. Cuando está de zaguero (rotaciones 1, 6 y 5), penetra velozmente hacia la red para colocar, permitiendo tener 3 atacantes delanteros en todo momento.',
    keyDuties: [
      'Tomar el segundo toque siempre que sea posible con voleo limpio de manos altas.',
      'Analizar el bloqueo rival y distribuir el balón al atacante con mejor ventaja táctica.',
      'Realizar la penetración desde zonas zagueras (1, 6, 5) a la zona de colocación (entre zona 2 y 3).',
      'Cuando está delantero (rotaciones 2, 3, 4), puede realizar fintas de colocador ("segundo toque"), remates sorpresivos o bloqueo efectivo.',
      'Liderar el ritmo ofensivo del equipo e imponer jugadas rápidas o combinadas.'
    ],
    rotationRulesIn51: [
      'En P1, P6 y P5 (zaguero): NO puede rematar ni bloquear por encima de la red.',
      'En recepción: NUNCA debe recibir el primer pase; sus compañeros lo protegen para que quede libre hacia la red.',
      'Debe respetar estrictamente la posición relativa con su delantero y jugadores adyacentes antes del golpe del sacador.'
    ],
    skillsRequired: ['Visión periférica', 'Técnica de muñecas impecable', 'Velocidad de reacción', 'Toma de decisiones bajo presión', 'Liderazgo'],
    haikyuuExamples: ['Tobio cristhian (Ingenieria)', 'Toru josue (Aoba Johsai)', 'Kozume Kenma (Nekoma)', 'Atsumu Miya (Inarizaki)'],
    idealZones: [2, 3]
  },
  opuesto: {
    category: 'opuesto',
    title: 'Opuesto',
    shortCode: 'OP (Opposite)',
    roleSubtitle: 'El Principal Martillo Ofensivo',
    color: '#E63946',
    badgeBg: 'bg-gradient-to-r from-red-500 to-rose-700',
    description:
      'Se sitúa diametralmente opuesto al colocador en la rotación (cuando el colocador está en zona 1, el opuesto está en zona 4; cuando el colocador está en zona 2, el opuesto está en zona 5, etc.). Es el principal artillero encargado de solventar balones difíciles o "balones calientes" cuando el pase no es perfecto.',
    keyDuties: [
      'Atacar con máxima contundencia desde zona 2 cuando está delantero.',
      'Atacar balones de zaguero por zona 1 ("ataque de zaga") cuando el colocador está delantero.',
      'En la mayoría de los sistemas 5-1 modernos, queda exento de recibir el saque rival para concentrarse 100% en la carrera de remate.',
      'Formar el bloqueo contra el punta receptor rival en zona 2 de la red.',
      'Ser la vía de escape en situaciones de contrataque con balones altos y abiertos.'
    ],
    rotationRulesIn51: [
      'Suele ubicarse en la esquina opuesta o detrás de los receptores en fase de recepción.',
      'Cuando está de zaguero, puede despegar detrás de la línea de 3 metros para rematar por zona 1.',
      'Asegura que siempre haya al menos 3 opciones ofensivas vivas en la cancha.'
    ],
    skillsRequired: ['Potencia de remate extraordinaria', 'Gran salto vertical', 'Capacidad para superar bloqueos dobles', 'Ataque zaguero (zona 1)', 'Bloqueo sólido'],
    haikyuuExamples: ['Wakatoshi Jesus (Shiratorizawa)', 'Daichi Sawamura (Ingenieria - perfil defensivo)', 'Osamu Miya (Inarizaki)'],
    idealZones: [2, 1]
  },
  punta: {
    category: 'punta',
    title: 'Punta Receptor',
    shortCode: 'OH (Outside Hitter)',
    roleSubtitle: 'El Motor Completo: Recepción y Remate por 4',
    color: '#3A86FF',
    badgeBg: 'bg-gradient-to-r from-blue-500 to-indigo-600',
    description:
      'El equipo cuenta con dos puntas receptores (OH1 y OH2) situados opuestos entre sí. Son los jugadores más completos del voleibol moderno: deben soportar la presión del saque rival mediante una recepción estable y, segundos después, correr para rematar con fuerza por zona 4.',
    keyDuties: [
      'Formar la línea principal de recepción de saque junto al Líbero (habitualmente sistema de 3 pasadores).',
      'Rematar balones altos, tensos y rápidos por la banda izquierda (zona 4).',
      'Ejecutar el ataque zaguero central por zona 6 (conocido como ataque "Pipe").',
      'Proteger la diagonal o paralela en defensa cuando el rival ataca por su zona.',
      'Asistir en cobertura de los remates de sus compañeros.'
    ],
    rotationRulesIn51: [
      'Uno de los dos puntas siempre está en primera línea y el otro en segunda línea.',
      'En recepción, deben garantizar una plataforma de pase perfecta hacia la zona 2-3 para el colocador.',
      'En permuta, el punta delantero siempre corre hacia la banda izquierda (zona 4).'
    ],
    skillsRequired: ['Pase de antebrazos preciso', 'Variedad de remates (línea, diagonal, fintas)', 'Resistencia física extrema', 'Agilidad lateral', 'Lectura de juego'],
    haikyuuExamples: ['Kotaro César (Fukurodani)', 'Asahi Azumane (Ingenieria)', 'Hajime Iwaizumi (Aoba Johsai)', 'Kiyoomi Sakusa (Itachiyama)'],
    idealZones: [4, 6]
  },
  central: {
    category: 'central',
    title: 'Central',
    shortCode: 'MB (Middle Blocker)',
    roleSubtitle: 'La Muralla en la Red y Ataque Rápido',
    color: '#06D6A0',
    badgeBg: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    description:
      'Los centrales (MB1 y MB2) custodian el centro de la red. Son los encargados de saltar en todos los bloqueos (desplazándose a las bandas) y de ejecutar ataques ultrarrápidos de primer tiempo (tiempos cero, cortos y tensos) que fijan al bloqueo rival.',
    keyDuties: [
      'Liderar el sistema de bloqueo del equipo mediante "bloqueo de lectura" (read block).',
      'Desplazarse rápidamente a zona 4 y zona 2 para formar el bloqueo doble o triple.',
      'Atacar balones ultrarrápidos pegados al colocador para atraer a los centrales rivales (función de señuelo).',
      'Servir como señuelo para liberar los extremos (Punta y Opuesto).',
      'Al pasar a la zona zaguera (después de sacar), suele ser sustituido por el Líbero para reforzar la defensa.'
    ],
    rotationRulesIn51: [
      'Al completar su rotación en primera línea y pasar a zaguero, realiza su turno de saque y luego es reemplazado por el Líbero.',
      'En recepción, habitualmente no recibe; se prepara para entrar velozmente a la red a fingir o rematar el primer tiempo.',
      'En permuta, el central delantero siempre acude a zona 3.'
    ],
    skillsRequired: ['Gran altura o salto explosivo', 'Desplazamiento lateral rápido', 'Reflejos en la red', 'Lectura de colocadores rivales', 'Tiempo y sincronización'],
    haikyuuExamples: ['Shoyo luis (Ingenieria - El Mayor Señuelo)', 'Kei Adrian (Ingenieria - Bloqueo Frío)', 'Tetsuro Kuroo (Nekoma)', 'Rintaro Suna (Inarizaki)'],
    idealZones: [3]
  },
  libero: {
    category: 'libero',
    title: 'Líbero',
    shortCode: 'L (Libero)',
    roleSubtitle: 'El Guardián Defensivo Especialista',
    color: '#FFB703',
    badgeBg: 'bg-gradient-to-r from-yellow-500 to-amber-600',
    description:
      'Viste una camiseta de color diferente para ser distinguido inmediatamente por árbitros y espectadores. Es el especialista supremo en defensa y recepción. Reemplaza a los centrales en la zona zaguera sin contar como sustitución reglamentaria.',
    keyDuties: [
      'Comandar la recepción de saque del equipo en segunda línea.',
      'Defender los remates más violentos del rival mediante zambullidas, planchas y toques de antebrazos.',
      'Dirigir la comunicación defensiva y organizar las líneas de pase.',
      'Realizar colocaciones de emergencia (con antebrazos o con dedos detrás de la línea de 3m si va a rematarse de inmediato).',
      'Cubrir las espaldas de los atacantes en caso de bloqueo rival.'
    ],
    rotationRulesIn51: [
      'NUNCA puede rematar un balón por encima de la altura de la red.',
      'NUNCA puede sacar (en el reglamento internacional FIVB) ni participar en bloqueos.',
      'Si coloca con los dedos dentro de la zona delantera (dentro de la línea de 3m), el balón NO puede ser rematado por encima de la red por un compañero.',
      'Sustituye ilimitadamente a los jugadores zagueros (normalmente los centrales MB1 y MB2).'
    ],
    skillsRequired: ['Reflejos felinos', 'Recepción de antebrazos milimétrica', 'Valentía para zambullirse al suelo', 'Paso de ajuste rápido', 'Liderazgo vocal'],
    haikyuuExamples: ['Yu Alessandro (Ingenieria - "La Deidad Guardiana")', 'Morisuke Yaku (Nekoma)', 'Motoya Komori (Itachiyama)'],
    idealZones: [5, 6]
  }
};
