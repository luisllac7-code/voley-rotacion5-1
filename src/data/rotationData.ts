import { RotationConfig } from '../types';

export const ROTATIONS_CONFIG: Record<number, RotationConfig> = {
  1: {
    rotation: 1,
    title: 'Rotación 1 (P1)',
    setterZone: 1,
    subtitle: 'Colocador en Zona 1 (Zaguero Derecho / Turno de Saque o Recepción)',
    difficulty: 'Fácil',
    summary:
      'El colocador arranca en la esquina trasera derecha (Zona 1). Si nos toca sacar, él es quien realiza el servicio. Si nos toca recibir, se esconde detrás del delantero para no recibir y penetra velozmente hacia la red.',
    overlapWarnings: [
      {
        player1: 'S',
        player2: 'MB1',
        relationship: 'detras_de',
        description: 'El Colocador (S) debe estar por detrás de MB1 (delantero derecho) hasta el golpe de saque.'
      },
      {
        player1: 'S',
        player2: 'OH2',
        relationship: 'a_la_derecha_de',
        description: 'El Colocador (S) debe estar más a la derecha que el zaguero centro (OH2).'
      }
    ],
    tacticalAdvice: [
      'Al estar el colocador de zaguero, contamos con 3 atacantes en la red: OP, OH1 y MB1.',
      'En recepción, el Líbero (L), OH1 y OH2 forman la "W" o triángulo de recepción de 3 personas.',
      'El Opuesto (OP) no recibe; se prepara para entrar desde zona 4 o permutar hacia zona 2.'
    ],
    phases: {
      base: {
        title: 'Posición Reglamentaria (Fase 1)',
        description: 'Ubicación legal obligatoria según la alineación antes de que el sacador golpee el balón.',
        keyRule: 'S en 1, MB1 en 2, OH1 en 3, OP en 4, L/MB2 en 5, OH2 en 6.',
        players: [
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 82, y: 80, isFrontRow: false, zone: 1, actionNote: 'Zaguero en zona 1' },
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 82, y: 22, isFrontRow: true, zone: 2, actionNote: 'Delantero derecho' },
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 50, y: 22, isFrontRow: true, zone: 3, actionNote: 'Delantero centro' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 18, y: 22, isFrontRow: true, zone: 4, actionNote: 'Delantero izquierdo' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 18, y: 80, isFrontRow: false, zone: 5, actionNote: 'Zaguero izquierdo (sustituye a MB2)' },
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 50, y: 80, isFrontRow: false, zone: 6, actionNote: 'Zaguero centro' }
        ]
      },
      recepcion: {
        title: 'Fase de Recepción de Saque (Sideout K1)',
        description: 'Formación de recepción con 3 pasadores. El Colocador se esconde en la esquina sin tocar el pase.',
        keyRule: 'S pegado tras MB1. L, OH2 y OH1 forman la línea de pase. OP se abre.',
        passers: ['L', 'OH2', 'OH1'],
        players: [
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 84, y: 48, isFrontRow: false, zone: 1, actionNote: 'Escondido tras MB1, listo para penetrar' },
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 84, y: 20, isFrontRow: true, zone: 2, actionNote: 'Cerca de la red cubriendo al colocador' },
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 26, y: 55, isFrontRow: true, zone: 3, actionNote: 'Baja para recibir el saque' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 12, y: 25, isFrontRow: true, zone: 4, actionNote: 'Pegado a la banda para carrera de remate' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 38, y: 75, isFrontRow: false, zone: 5, actionNote: 'Receptor principal en zaga izquierda' },
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 68, y: 75, isFrontRow: false, zone: 6, actionNote: 'Receptor zaguero derecho' }
        ]
      },
      permuta: {
        title: 'Penetración del Colocador y Permuta Táctica',
        description: '¡En cuanto el sacador impacta el balón! El Colocador penetra a la red; atacantes corren a sus zonas ideales.',
        keyRule: 'S corre a zona 2/3 de colocación. MB1 corre a zona 3. OH1 se abre a zona 4.',
        players: [
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 68, y: 12, isFrontRow: false, zone: 1, actionNote: 'Penetra velozmente a zona de armado' },
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 50, y: 12, isFrontRow: true, zone: 3, actionNote: 'Entra a zona 3 para amago de 1er tiempo' },
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 16, y: 18, isFrontRow: true, zone: 4, actionNote: 'Corre a zona 4 para entrar al remate' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 82, y: 16, isFrontRow: true, zone: 2, actionNote: 'Permuta hacia zona 2 para remate de banda' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 32, y: 65, isFrontRow: false, zone: 5, actionNote: 'Ajuste defensivo y cobertura de ataque' },
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 60, y: 68, isFrontRow: false, zone: 6, actionNote: 'Preparado para Pipe o defensa' }
        ]
      },
      ataque: {
        title: 'Fase de Ataque, Remate y Cobertura',
        description: 'El colocador entrega el balón con 3 opciones ofensivas de primera línea vivas y amenazantes.',
        keyRule: 'Remate por 4 (OH1), 1er tiempo por 3 (MB1) o bola alta por 2 (OP).',
        ballPath: [
          { from: { x: 50, y: 95 }, to: { x: 45, y: 65 }, target: 'Recepción del pase' },
          { from: { x: 45, y: 65 }, to: { x: 68, y: 12 }, target: 'Pase alto al Colocador' },
          { from: { x: 68, y: 12 }, to: { x: 16, y: 10 }, target: 'Colocada tensa a OH1 (Asahi)' }
        ],
        players: [
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 68, y: 10, isFrontRow: false, zone: 1, actionNote: 'Coloca el balón en suspensión' },
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 50, y: 8, isFrontRow: true, zone: 3, actionNote: 'Fija el bloqueo rival con salto rápido' },
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 16, y: 8, isFrontRow: true, zone: 4, actionNote: '¡Remate potente por zona 4!' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 84, y: 14, isFrontRow: true, zone: 2, actionNote: 'Amenaza de remate o cobertura' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 28, y: 40, isFrontRow: false, zone: 5, actionNote: 'Cobertura inmediata del remate de OH1' },
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 52, y: 55, isFrontRow: false, zone: 6, actionNote: 'Ataque zaguero Pipe o cobertura de rebote' }
        ]
      }
    }
  },
  2: {
    rotation: 2,
    title: 'Rotación 2 (P2)',
    setterZone: 2,
    subtitle: 'Colocador en Zona 2 (Delantero Derecho - Muy Ofensivo)',
    difficulty: 'Fácil',
    summary:
      '¡Una de las rotaciones más cómodas para el colocador! Como ya está en Zona 2 en la red, no tiene que correr ni penetrar desde el fondo. Puede colocar con calma, hacer fintas de segundo toque e incluso atacar.',
    overlapWarnings: [
      {
        player1: 'S',
        player2: 'OH1',
        relationship: 'a_la_derecha_de',
        description: 'El Colocador (S en 2) debe situarse más a la derecha que el delantero central (MB1 en 3).'
      },
      {
        player1: 'S',
        player2: 'OH2',
        relationship: 'delante_de',
        description: 'El Colocador (S en 2) debe estar por delante del zaguero derecho (OH2 en 1).'
      }
    ],
    tacticalAdvice: [
      'Al estar el colocador delantero, solo tenemos 2 atacantes delanteros natos (OH1 y MB1), pero el OP zaguero puede entrar con remate por zona 1.',
      'El colocador puede amagar fintas de segundo toque ("dump shot") o bloquear al atacante rival.',
      'Excelente rotación para recepción limpia y ataque rápido con el central.'
    ],
    phases: {
      base: {
        title: 'Posición Reglamentaria (Fase 1)',
        description: 'S en 2, MB1 en 3, OH1 en 4, OP en 5, L en 6, OH2 en 1.',
        keyRule: 'S está delante en zona 2. OH2 saca o defiende en zona 1.',
        players: [
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 82, y: 20, isFrontRow: true, zone: 2, actionNote: 'Delantero en zona 2' },
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 50, y: 20, isFrontRow: true, zone: 3, actionNote: 'Delantero centro en 3' },
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 18, y: 20, isFrontRow: true, zone: 4, actionNote: 'Delantero izquierdo en 4' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 18, y: 80, isFrontRow: false, zone: 5, actionNote: 'Zaguero izquierdo en 5' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 50, y: 80, isFrontRow: false, zone: 6, actionNote: 'Zaguero centro en 6' },
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 82, y: 80, isFrontRow: false, zone: 1, actionNote: 'Zaguero derecho en 1' }
        ]
      },
      recepcion: {
        title: 'Fase de Recepción de Saque',
        description: 'El Colocador se pega a la red en zona 2. No necesita moverse casi nada. L, OH2 y OH1 reciben.',
        keyRule: 'S pegado a la red. MB1 se retrasa levemente para no estorbar el pase.',
        passers: ['OH1', 'L', 'OH2'],
        players: [
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 74, y: 12, isFrontRow: true, zone: 2, actionNote: 'Pegado a la red listo para recibir el pase' },
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 45, y: 22, isFrontRow: true, zone: 3, actionNote: 'Listo para aproximación rápida' },
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 18, y: 55, isFrontRow: true, zone: 4, actionNote: 'Receptor en zona izquierda' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 14, y: 85, isFrontRow: false, zone: 5, actionNote: 'Protegido, prepara ataque zaguero' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 48, y: 72, isFrontRow: false, zone: 6, actionNote: 'Comanda el pase central' },
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 78, y: 68, isFrontRow: false, zone: 1, actionNote: 'Receptor banda derecha' }
        ]
      },
      permuta: {
        title: 'Permuta Táctica Inmediata',
        description: 'Transición mínima. El colocador ya está colocado. MB1 entra a zona 3 y OH1 remata por 4.',
        keyRule: 'OP se incorpora como tercer atacante desde segunda línea (zona 1 o zaguero).',
        players: [
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 70, y: 10, isFrontRow: true, zone: 2, actionNote: 'Posición perfecta de colocación' },
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 50, y: 10, isFrontRow: true, zone: 3, actionNote: 'Ataque rápido de primer tiempo' },
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 16, y: 12, isFrontRow: true, zone: 4, actionNote: 'Carrera de remate por zona 4' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 78, y: 48, isFrontRow: false, zone: 1, actionNote: 'Ataque zaguero por la zaga derecha' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 38, y: 62, isFrontRow: false, zone: 6, actionNote: 'Ajuste para cobertura' },
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 56, y: 65, isFrontRow: false, zone: 6, actionNote: 'Segunda línea defensiva' }
        ]
      },
      ataque: {
        title: 'Ataque con Primer Tiempo o Finta de Colocador',
        description: 'cristhian puede elegir asistir rápido a luis o rematar él mismo de segundo toque.',
        keyRule: 'S puede atacar legalmente con salto porque es jugador delantero.',
        ballPath: [
          { from: { x: 48, y: 72 }, to: { x: 70, y: 10 }, target: 'Pase preciso de Alessandro a cristhian' },
          { from: { x: 70, y: 10 }, to: { x: 50, y: 6 }, target: 'Colocada ultrarrápida a luis (MB1)' }
        ],
        players: [
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 70, y: 10, isFrontRow: true, zone: 2, actionNote: 'Toque de finta o pase relámpago' },
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 50, y: 6, isFrontRow: true, zone: 3, actionNote: '¡Ataque rápido explosivo por el centro!' },
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 14, y: 8, isFrontRow: true, zone: 4, actionNote: 'Opción abierta por la banda izquierda' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 78, y: 36, isFrontRow: false, zone: 1, actionNote: 'Entrada de zaga por zona 1' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 44, y: 35, isFrontRow: false, zone: 6, actionNote: 'Cobertura pegada al atacante central' },
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 62, y: 55, isFrontRow: false, zone: 1, actionNote: 'Cobertura perimetral' }
        ]
      }
    }
  },
  3: {
    rotation: 3,
    title: 'Rotación 3 (P3)',
    setterZone: 3,
    subtitle: 'Colocador en Zona 3 (Delantero Centro)',
    difficulty: 'Media',
    summary:
      'El colocador está en el centro de la red (Zona 3). En cuanto se realiza el saque, debe desplazarse un par de pasos hacia la derecha (Zona 2.5) para liberar el centro al central (MB1) o al opuesto.',
    overlapWarnings: [
      {
        player1: 'S',
        player2: 'MB1',
        relationship: 'a_la_derecha_de',
        description: 'S (en 3) debe estar más a la derecha que OH1 (en 4) y más a la izquierda que MB1 (en 2).'
      },
      {
        player1: 'S',
        player2: 'L',
        relationship: 'delante_de',
        description: 'S (en 3) debe estar delante del zaguero centro (Líbero en 6).'
      }
    ],
    tacticalAdvice: [
      'El desplazamiento de S es muy corto (de zona 3 a zona 2/3), pero debe sincronizarse bien con el central.',
      'MB1 permuta desde zona 2 hacia zona 3 para fijar al bloqueador central contrario.',
      'OH1 remata por zona 4 y OP zaguero entra por zona 1.'
    ],
    phases: {
      base: {
        title: 'Posición Reglamentaria (Fase 1)',
        description: 'OH1 en 4, S en 3, MB1 en 2, OP en 6, OH2 en 5, L en 1.',
        keyRule: 'S en medio de la red. Debe respetar a sus laterales y a su zaguero.',
        players: [
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 18, y: 20, isFrontRow: true, zone: 4, actionNote: 'Delantero izquierdo' },
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 50, y: 20, isFrontRow: true, zone: 3, actionNote: 'Delantero centro' },
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 82, y: 20, isFrontRow: true, zone: 2, actionNote: 'Delantero derecho' },
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 18, y: 80, isFrontRow: false, zone: 5, actionNote: 'Zaguero izquierdo' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 50, y: 80, isFrontRow: false, zone: 6, actionNote: 'Zaguero centro' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 82, y: 80, isFrontRow: false, zone: 1, actionNote: 'Zaguero derecho' }
        ]
      },
      recepcion: {
        title: 'Fase de Recepción',
        description: 'S se posiciona pegado a la red entre 3 y 2. MB1 se esconde detrás de los pasadores o pegado a la red.',
        keyRule: 'L, OH2 y OH1 asumen la recepción.',
        passers: ['OH1', 'OH2', 'L'],
        players: [
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 22, y: 55, isFrontRow: true, zone: 4, actionNote: 'Recibe en banda izquierda' },
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 58, y: 12, isFrontRow: true, zone: 3, actionNote: 'Pegado a la red, listo para armar' },
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 80, y: 18, isFrontRow: true, zone: 2, actionNote: 'Espera el pase para cruzar al centro' },
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 35, y: 75, isFrontRow: false, zone: 5, actionNote: 'Recepción en zaga' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 68, y: 72, isFrontRow: false, zone: 6, actionNote: 'Recepción en zaga centro-derecha' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 84, y: 82, isFrontRow: false, zone: 1, actionNote: 'Libre de pase, enfocado en zaga' }
        ]
      },
      permuta: {
        title: 'Permuta Cruzada (S y MB1)',
        description: 'Cruce táctico: S se mueve a zona 2/3 y MB1 corre hacia zona 3 para atacar.',
        keyRule: 'El colocador y central se cruzan suavemente sin colisionar.',
        players: [
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 16, y: 14, isFrontRow: true, zone: 4, actionNote: 'Apertura hacia zona 4' },
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 68, y: 10, isFrontRow: true, zone: 3, actionNote: 'Posición de armado en 2.5' },
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 48, y: 12, isFrontRow: true, zone: 2, actionNote: 'Cruce rápido hacia zona 3' },
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 30, y: 65, isFrontRow: false, zone: 5, actionNote: 'Defensa zaga 5' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 50, y: 65, isFrontRow: false, zone: 6, actionNote: 'Líbero en posición defensiva' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 78, y: 50, isFrontRow: false, zone: 1, actionNote: 'Entrada de remate por zona 1' }
        ]
      },
      ataque: {
        title: 'Ataque Combinado y Remate',
        description: 'El colocador distribuye hacia la banda 4 o un pase rápido cortado en el centro.',
        keyRule: 'Excelente ángulo para habilitar a Asahi por 4 o remate de zaga.',
        ballPath: [
          { from: { x: 68, y: 72 }, to: { x: 68, y: 10 }, target: 'Pase al punto del colocador' },
          { from: { x: 68, y: 10 }, to: { x: 16, y: 8 }, target: 'Pase abierto alto a Asahi (OH1)' }
        ],
        players: [
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 16, y: 8, isFrontRow: true, zone: 4, actionNote: '¡Remate de Asahi por zona 4!' },
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 68, y: 10, isFrontRow: true, zone: 3, actionNote: 'Colocada suave de dedos' },
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 48, y: 8, isFrontRow: true, zone: 2, actionNote: 'Salto de señuelo en el centro' },
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 26, y: 45, isFrontRow: false, zone: 5, actionNote: 'Cobertura de la diagonal' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 45, y: 40, isFrontRow: false, zone: 6, actionNote: 'Cobertura cerrada de bloqueo' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 78, y: 35, isFrontRow: false, zone: 1, actionNote: 'Ataque zaguero listo' }
        ]
      }
    }
  },
  4: {
    rotation: 4,
    title: 'Rotación 4 (P4)',
    setterZone: 4,
    subtitle: 'Colocador en Zona 4 (Delantero Izquierdo - ¡La Rotación Legendaria!)',
    difficulty: 'Avanzada',
    summary:
      '¡La rotación más famosa y desafiante del voleibol 5-1! El colocador es delantero pero empieza en Zona 4 (izquierda de la red). Debe atravesar toda la red en sprint hasta Zona 2/3 sin incurrir en falta de posición con sus compañeros.',
    overlapWarnings: [
      {
        player1: 'S',
        player2: 'MB1',
        relationship: 'a_la_izquierda_de',
        description: 'S (en 4) DEBE estar más a la izquierda que el delantero central (MB1 en 3) hasta el golpe de saque.'
      },
      {
        player1: 'S',
        player2: 'OH1',
        relationship: 'delante_de',
        description: 'S (en 4) DEBE estar por delante del zaguero izquierdo (OH1 en 5) en el momento del saque.'
      }
    ],
    tacticalAdvice: [
      'Para minimizar la carrera, S se coloca lo más pegado posible a MB1 (al límite legal del overlap).',
      'OH2 (en 2) se abre a recibir o baja a la línea de pase.',
      'En cuanto la pelota sale de la mano del sacador rival: ¡SPRINT DE S! Corre de izquierda a derecha a lo largo de la red.'
    ],
    phases: {
      base: {
        title: 'Posición Reglamentaria (Fase 1)',
        description: 'S en 4, MB1 en 3, OH2 en 2, OP en 1, L en 6, OH1 en 5.',
        keyRule: 'S debe estar a la izquierda de MB1 y delante de OH1.',
        players: [
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 18, y: 20, isFrontRow: true, zone: 4, actionNote: 'Delantero en zona 4' },
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 50, y: 20, isFrontRow: true, zone: 3, actionNote: 'Delantero centro en 3' },
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 82, y: 20, isFrontRow: true, zone: 2, actionNote: 'Delantero derecho en 2' },
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 18, y: 80, isFrontRow: false, zone: 5, actionNote: 'Zaguero izquierdo en 5' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 50, y: 80, isFrontRow: false, zone: 6, actionNote: 'Zaguero centro en 6' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 82, y: 80, isFrontRow: false, zone: 1, actionNote: 'Zaguero derecho en 1' }
        ]
      },
      recepcion: {
        title: 'Fase de Recepción (Preparación del Sprint)',
        description: 'S y MB1 se agrupan pegados hacia el centro (sin rebasarse). OH2, L y OH1 reciben el saque.',
        keyRule: 'S se coloca a escasos centímetros a la izquierda de MB1 para reducir la distancia de carrera.',
        passers: ['OH1', 'L', 'OH2'],
        players: [
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 42, y: 14, isFrontRow: true, zone: 4, actionNote: 'Pegado a la red justo a la izquierda de luis' },
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 54, y: 14, isFrontRow: true, zone: 3, actionNote: 'Ligeramente a la derecha del colocador' },
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 78, y: 52, isFrontRow: true, zone: 2, actionNote: 'Baja para recibir y luego permutar a 4' },
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 20, y: 68, isFrontRow: false, zone: 5, actionNote: 'Receptor zaguero izquierdo' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 50, y: 75, isFrontRow: false, zone: 6, actionNote: 'Comandante de recepción en zaga' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 82, y: 80, isFrontRow: false, zone: 1, actionNote: 'Listo para entrar al remate zaguero' }
        ]
      },
      permuta: {
        title: '¡Sprint Legendario de S por la Red!',
        description: 'Al sonido del silbato y golpe: S corre hacia zona 2/3, mientras OH2 cruza hacia zona 4.',
        keyRule: 'OH2 cruza hacia la izquierda y S cruza hacia la derecha a máxima velocidad.',
        players: [
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 70, y: 10, isFrontRow: true, zone: 4, actionNote: '¡Sprint completado a zona 2/3!' },
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 48, y: 10, isFrontRow: true, zone: 3, actionNote: 'Posición de ataque rápido en 3' },
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 18, y: 16, isFrontRow: true, zone: 2, actionNote: 'Cruza a toda máquina hacia zona 4' },
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 26, y: 65, isFrontRow: false, zone: 5, actionNote: 'Defensa zaguera y cobertura' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 48, y: 62, isFrontRow: false, zone: 6, actionNote: 'Defensa central' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 78, y: 52, isFrontRow: false, zone: 1, actionNote: 'Carrera para ataque por zona 1' }
        ]
      },
      ataque: {
        title: 'Remate de Tanaka o Ataque Rápido',
        description: 'cristhian entrega a Tanaka en zona 4 o asiste a luis en una colocada relámpago.',
        keyRule: 'La rotación 4 fue resuelta con éxito sin ninguna falta de posición.',
        ballPath: [
          { from: { x: 50, y: 75 }, to: { x: 70, y: 10 }, target: 'Pase flotante al Colocador' },
          { from: { x: 70, y: 10 }, to: { x: 18, y: 8 }, target: 'Colocada cruzada a Tanaka en 4' }
        ],
        players: [
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 70, y: 10, isFrontRow: true, zone: 4, actionNote: 'Colocación precisa de manos altas' },
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 48, y: 8, isFrontRow: true, zone: 3, actionNote: 'Señuelo en el centro' },
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 18, y: 8, isFrontRow: true, zone: 2, actionNote: '¡Remate en diagonal de Tanaka!' },
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 24, y: 42, isFrontRow: false, zone: 5, actionNote: 'Cobertura del remate' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 42, y: 38, isFrontRow: false, zone: 6, actionNote: 'Cobertura pegada al suelo' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 78, y: 35, isFrontRow: false, zone: 1, actionNote: 'Ataque zaguero' }
        ]
      }
    }
  },
  5: {
    rotation: 5,
    title: 'Rotación 5 (P5)',
    setterZone: 5,
    subtitle: 'Colocador en Zona 5 (Zaguero Izquierdo - Penetración Diagonal Larga)',
    difficulty: 'Avanzada',
    summary:
      'El colocador vuelve a ser zaguero (Zona 5). Como está atrás, el equipo vuelve a tener 3 rematadores delanteros (OH2, MB1, OP). El colocador debe penetrar en diagonal desde el fondo izquierdo hasta la red.',
    overlapWarnings: [
      {
        player1: 'S',
        player2: 'OH2',
        relationship: 'detras_de',
        description: 'S (en 5) debe estar detrás del delantero izquierdo (OH2 en 4) antes del saque.'
      },
      {
        player1: 'S',
        player2: 'L',
        relationship: 'a_la_izquierda_de',
        description: 'S (en 5) debe estar a la izquierda del zaguero centro (L en 6).'
      }
    ],
    tacticalAdvice: [
      'Penetración diagonal más larga para el colocador: desde la esquina 5 hasta la zona 2-3.',
      'OH2 se pega a la red en zona 4 para que S pueda adelantarse lo máximo posible dentro de la zaga.',
      'Gran potencial ofensivo porque OP está delantero en zona 2.'
    ],
    phases: {
      base: {
        title: 'Posición Reglamentaria (Fase 1)',
        description: 'OH2 en 4, MB1 en 3, OP en 2, S en 5, L en 6, OH1 en 1.',
        keyRule: 'S en zona 5. OP está delantero derecho en zona 2.',
        players: [
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 18, y: 20, isFrontRow: true, zone: 4, actionNote: 'Delantero izquierdo' },
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 50, y: 20, isFrontRow: true, zone: 3, actionNote: 'Delantero centro' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 82, y: 20, isFrontRow: true, zone: 2, actionNote: 'Delantero derecho' },
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 18, y: 80, isFrontRow: false, zone: 5, actionNote: 'Zaguero izquierdo' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 50, y: 80, isFrontRow: false, zone: 6, actionNote: 'Zaguero centro' },
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 82, y: 80, isFrontRow: false, zone: 1, actionNote: 'Zaguero derecho' }
        ]
      },
      recepcion: {
        title: 'Fase de Recepción y Posición de Salida',
        description: 'OH2 se pega a la red en zona 4. S se ubica justo detrás de él en la línea de 3m listo para arrancar.',
        keyRule: 'OH2 protege a S. L y OH1 cubren la mayor parte de la cancha trasera.',
        passers: ['OH2', 'L', 'OH1'],
        players: [
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 14, y: 14, isFrontRow: true, zone: 4, actionNote: 'Pegado a la red para dar espacio a S' },
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 16, y: 38, isFrontRow: false, zone: 5, actionNote: 'Pegado tras OH2 en el límite de zaguero' },
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 50, y: 15, isFrontRow: true, zone: 3, actionNote: 'Listo para primer tiempo en zona 3' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 86, y: 18, isFrontRow: true, zone: 2, actionNote: 'Abierto en zona 2 para remate' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 42, y: 72, isFrontRow: false, zone: 6, actionNote: 'Receptor principal en zaga' },
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 74, y: 70, isFrontRow: false, zone: 1, actionNote: 'Receptor zaguero derecho' }
        ]
      },
      permuta: {
        title: 'Penetración Diagonal en Carrera',
        description: 'S atraviesa la cancha en diagonal desde zona 5 hasta zona 2/3 de la red.',
        keyRule: '3 atacantes delanteros listos: OH2 en 4, luis en 3, Daichi/OP en 2.',
        players: [
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 68, y: 10, isFrontRow: false, zone: 5, actionNote: 'Llega a la posición de armado en la red' },
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 16, y: 14, isFrontRow: true, zone: 4, actionNote: 'Retroceso para carrera de remate' },
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 48, y: 10, isFrontRow: true, zone: 3, actionNote: 'Aproximación de primer tiempo' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 84, y: 12, isFrontRow: true, zone: 2, actionNote: 'Carrera de remate por zona 2' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 34, y: 64, isFrontRow: false, zone: 6, actionNote: 'Defensa zaga centro-izquierda' },
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 66, y: 66, isFrontRow: false, zone: 1, actionNote: 'Defensa zaga centro-derecha' }
        ]
      },
      ataque: {
        title: 'Remate Ofensivo con 3 Delanteros',
        description: 'cristhian tiene a Tanaka por 4, luis por el centro y al Opuesto por 2.',
        keyRule: 'OP remata por zona 2 con enorme fuerza.',
        ballPath: [
          { from: { x: 42, y: 72 }, to: { x: 68, y: 10 }, target: 'Pase alto a cristhian' },
          { from: { x: 68, y: 10 }, to: { x: 84, y: 8 }, target: 'Colocada rápida hacia atrás a Daichi (OP)' }
        ],
        players: [
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 68, y: 10, isFrontRow: false, zone: 5, actionNote: 'Colocada de espaldas a zona 2' },
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 48, y: 8, isFrontRow: true, zone: 3, actionNote: 'Señuelo con salto altísimo' },
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 16, y: 8, isFrontRow: true, zone: 4, actionNote: 'Ataque por zona 4' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 84, y: 8, isFrontRow: true, zone: 2, actionNote: '¡Remate potente por zona 2!' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 40, y: 42, isFrontRow: false, zone: 6, actionNote: 'Cobertura del rematador' },
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 62, y: 52, isFrontRow: false, zone: 1, actionNote: 'Cobertura de rebote largo' }
        ]
      }
    }
  },
  6: {
    rotation: 6,
    title: 'Rotación 6 (P6)',
    setterZone: 6,
    subtitle: 'Colocador en Zona 6 (Zaguero Centro - Penetración Recta)',
    difficulty: 'Media',
    summary:
      'El colocador está en Zona 6 (zaguero central). Su penetración es muy limpia y directa: corre en línea recta hacia la red entre zona 2 y 3. Disponemos de 3 atacantes de primera línea (OP, OH2, MB1).',
    overlapWarnings: [
      {
        player1: 'S',
        player2: 'MB1',
        relationship: 'detras_de',
        description: 'S (en 6) debe estar detrás del delantero centro (MB1 en 3) en el momento del saque.'
      },
      {
        player1: 'S',
        player2: 'OH1',
        relationship: 'a_la_izquierda_de',
        description: 'S (en 6) debe estar a la izquierda de OH1 (en 1) y a la derecha de L (en 5).'
      }
    ],
    tacticalAdvice: [
      'Penetración muy rápida porque el recorrido hacia la red es directo.',
      'MB1 puede situarse adelantado y ligeramente ladeado para abrir un "carril" de penetración a S.',
      'Los 3 pasadores se abren para no estorbar la trayectoria del colocador.'
    ],
    phases: {
      base: {
        title: 'Posición Reglamentaria (Fase 1)',
        description: 'MB1 en 4, OP en 3, OH2 en 2, L en 5, S en 6, OH1 en 1.',
        keyRule: 'S en 6 entre L y OH1, detrás de MB1/OP.',
        players: [
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 18, y: 20, isFrontRow: true, zone: 4, actionNote: 'Delantero izquierdo en 4' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 50, y: 20, isFrontRow: true, zone: 3, actionNote: 'Delantero centro en 3' },
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 82, y: 20, isFrontRow: true, zone: 2, actionNote: 'Delantero derecho en 2' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 18, y: 80, isFrontRow: false, zone: 5, actionNote: 'Zaguero izquierdo en 5' },
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 50, y: 80, isFrontRow: false, zone: 6, actionNote: 'Zaguero centro en 6' },
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 82, y: 80, isFrontRow: false, zone: 1, actionNote: 'Zaguero derecho en 1' }
        ]
      },
      recepcion: {
        title: 'Fase de Recepción con Carril de Penetración',
        description: 'S se adelanta en el centro de la cancha, justo detrás de su delantero. Pase en forma de W.',
        keyRule: 'S no recibe. Permanece con la mirada fija en el sacador para arrancar en el impacto.',
        passers: ['L', 'OH1', 'OH2'],
        players: [
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 25, y: 15, isFrontRow: true, zone: 4, actionNote: 'Cerca de la red para cruzar a zona 3' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 75, y: 18, isFrontRow: true, zone: 3, actionNote: 'Se abre a zona 2 para rematar' },
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 50, y: 45, isFrontRow: false, zone: 6, actionNote: 'En el carril central listo para correr' },
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 80, y: 55, isFrontRow: true, zone: 2, actionNote: 'Baja para recibir' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 22, y: 72, isFrontRow: false, zone: 5, actionNote: 'Receptor zaguero izquierdo' },
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 62, y: 74, isFrontRow: false, zone: 1, actionNote: 'Receptor zaguero derecho' }
        ]
      },
      permuta: {
        title: 'Penetración Frontal y Permuta de Atacantes',
        description: 'S penetra en línea recta a zona 2/3. luis cruza a zona 3 y Daichi corre a zona 2.',
        keyRule: 'Carrera limpia y frontal hacia el punto de armado.',
        players: [
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 68, y: 10, isFrontRow: false, zone: 6, actionNote: 'Llegada rápida a la red' },
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 48, y: 10, isFrontRow: true, zone: 4, actionNote: 'Cruce a zona 3 para primer tiempo' },
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 16, y: 14, isFrontRow: true, zone: 2, actionNote: 'Permuta a zona 4' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 84, y: 12, isFrontRow: true, zone: 3, actionNote: 'Permuta a zona 2' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 30, y: 65, isFrontRow: false, zone: 5, actionNote: 'Defensa zaga' },
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 55, y: 68, isFrontRow: false, zone: 1, actionNote: 'Ataque zaguero Pipe opcional' }
        ]
      },
      ataque: {
        title: 'Remate Final del Sistema 5-1',
        description: 'Las 6 rotaciones del 5-1 permiten mantener siempre la máxima potencia ofensiva.',
        keyRule: '3 atacantes de primera línea listos para rematar al milímetro.',
        ballPath: [
          { from: { x: 22, y: 72 }, to: { x: 68, y: 10 }, target: 'Recepción magistral de Alessandro a cristhian' },
          { from: { x: 68, y: 10 }, to: { x: 48, y: 6 }, target: 'Colocada rápida a luis (MB1)' }
        ],
        players: [
          { id: 'S', number: 9, label: 'S', name: 'cristhian', role: 'armador', roleShort: 'Colocador', x: 68, y: 10, isFrontRow: false, zone: 6, actionNote: 'Colocación en suspensión' },
          { id: 'MB1', number: 10, label: 'MB1', name: 'luis', role: 'central', roleShort: 'Central', x: 48, y: 6, isFrontRow: true, zone: 4, actionNote: '¡Ataque rápido y señuelo implacable!' },
          { id: 'OH2', number: 5, label: 'OH2', name: 'Tanaka', role: 'punta', roleShort: 'Punta', x: 16, y: 8, isFrontRow: true, zone: 2, actionNote: 'Remate por zona 4' },
          { id: 'OP', number: 1, label: 'OP', name: 'Daichi', role: 'opuesto', roleShort: 'Opuesto', x: 84, y: 8, isFrontRow: true, zone: 3, actionNote: 'Remate por zona 2' },
          { id: 'L', number: 4, label: 'L', name: 'Alessandro', role: 'libero', roleShort: 'Líbero', x: 38, y: 40, isFrontRow: false, zone: 5, actionNote: 'Cobertura de ataque' },
          { id: 'OH1', number: 3, label: 'OH1', name: 'Asahi', role: 'punta', roleShort: 'Punta', x: 58, y: 50, isFrontRow: false, zone: 1, actionNote: 'Pipe zaguero' }
        ]
      }
    }
  }
};
