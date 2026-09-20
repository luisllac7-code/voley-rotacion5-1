import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { X, Trophy, CheckCircle2, XCircle, RotateCcw, ArrowRight, Flame } from 'lucide-react';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'En el sistema 5-1, ¿dónde se ubica el colocador (S) en la Rotación 4 (P4)?',
    options: [
      'En Zona 1 (Zaguero derecho)',
      'En Zona 4 (Delantero izquierdo en la red)',
      'En Zona 2 (Delantero derecho)',
      'En Zona 6 (Zaguero centro)',
    ],
    correctIndex: 1,
    explanation:
      '¡Correcto! En P4, el colocador es delantero izquierdo (Zona 4) y debe realizar el famoso sprint cruzando toda la red hacia zona 2/3 al impactar el saque.',
  },
  {
    id: 2,
    question: '¿Por qué en el 5-1 el Opuesto (OP) habitualmente NO recibe el saque rival?',
    options: [
      'Porque no sabe usar los antebrazos',
      'Para concentrar toda su energía y carrera de impulso en el remate de máxima potencia',
      'Porque está prohibido por el reglamento FIVB',
      'Porque tiene que sacar de nuevo',
    ],
    correctIndex: 1,
    explanation:
      '¡Exacto! El opuesto es el atacante pesado principal (como Jesus). Se le exime del pase de recepción para que pueda abrirse y atacar con máxima potencia.',
  },
  {
    id: 3,
    question: '¿Qué ocurre cuando un Central (Middle Blocker) pasa a la zona de zagueros tras su turno de saque?',
    options: [
      'Sale del partido definitivamente',
      'Es sustituido por el Líbero para reforzar la recepción y defensa',
      'Se convierte en colocador',
      'Debe permanecer en el banquillo por 3 sets',
    ],
    correctIndex: 1,
    explanation:
      '¡Perfecto! El Líbero (como Alessandro o Yaku) entra libremente por el central zaguero para brindar estabilidad defensiva.',
  },
  {
    id: 4,
    question: 'En la Rotación 1 (P1), el colocador es zaguero. ¿Qué acción tiene ESTRICTAMENTE PROHIBIDA en la red?',
    options: [
      'Colocar de dedos',
      'Hablar con sus compañeros',
      'Rematar o bloquear un balón que esté completamente por encima del borde superior de la red',
      'Penetrar hacia la red',
    ],
    correctIndex: 2,
    explanation:
      '¡Muy bien! Un jugador zaguero jamás puede completar un bloqueo ni rematar por encima de la red si salta dentro de la zona de ataque (3m).',
  },
  {
    id: 5,
    question: '¿Cuándo pueden los jugadores permutar (cambiarse a sus puestos de especialidad) sin cometer falta de posición?',
    options: [
      'En cuanto el árbitro pita el silbato de autorización',
      'En el instante exacto en que la mano del sacador golpea el balón',
      'Cuando el balón toca el suelo',
      'En el segundo toque del colocador',
    ],
    correctIndex: 1,
    explanation:
      '¡Brillante! El reglamento FIVB estipula que la posición inicial debe mantenerse estrictamente hasta el momento preciso del golpe de saque.',
  },
];

interface RotationQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RotationQuizModal: React.FC<RotationQuizModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  if (!isOpen) return null;

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(index);
  };

  const handleConfirmAnswer = () => {
    if (selectedAnswer === null) return;
    setIsAnswerSubmitted(true);
    if (selectedAnswer === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#FF6B00', '#F59E0B', '#EF4444', '#38BDF8'],
      });
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="absolute inset-0" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-xl rounded-2xl border border-amber-500/40 bg-gradient-to-b from-[#111724] via-[#0d121c] to-[#080b11] p-6 sm:p-8 text-white shadow-[0_0_50px_rgba(0,0,0,0.9)] z-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!quizFinished ? (
          <div>
            {/* Header progress */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-amber-300 font-['Cinzel']">
                  TEST TÁCTICO: ROTACIÓN 5-1
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Pregunta {currentIdx + 1} de {QUIZ_QUESTIONS.length}
              </span>
            </div>

            {/* Question title */}
            <h3 className="text-lg sm:text-xl font-bold font-['Cinzel'] text-white mb-5 leading-snug">
              {currentQ.question}
            </h3>

            {/* Options list */}
            <div className="space-y-2.5 mb-6">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = idx === currentQ.correctIndex;

                let btnStyle = 'bg-slate-900/80 border-slate-700/80 text-slate-200 hover:border-amber-400/60';

                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-500/20 border-emerald-400 text-emerald-200';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'bg-red-500/20 border-red-400 text-red-200';
                  } else {
                    btnStyle = 'bg-slate-900/40 border-slate-800 text-slate-500 opacity-60';
                  }
                } else if (isSelected) {
                  btnStyle = 'bg-amber-500/20 border-amber-400 text-amber-200';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswerSubmitted}
                    className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
                  >
                    <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs font-mono flex-shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 font-['Plus_Jakarta_Sans']">{option}</span>
                    {isAnswerSubmitted && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box after submitting */}
            {isAnswerSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3.5 rounded-xl bg-slate-900 border border-amber-500/40 text-xs sm:text-sm text-slate-300 mb-5 font-['Plus_Jakarta_Sans']"
              >
                <div className="font-bold text-amber-400 font-['Cinzel'] mb-1">
                  Explicación Táctica:
                </div>
                {currentQ.explanation}
              </motion.div>
            )}

            {/* Bottom Actions */}
            <div className="flex justify-end gap-3">
              {!isAnswerSubmitted ? (
                <button
                  onClick={handleConfirmAnswer}
                  disabled={selectedAnswer === null}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-bold text-xs uppercase tracking-wider font-['Cinzel'] shadow-md cursor-pointer"
                >
                  Confirmar Respuesta
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-xs uppercase tracking-wider font-['Cinzel'] shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Siguiente</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Finished Screen */
          <div className="text-center py-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(245,158,11,0.6)]">
              🏐
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Cinzel'] text-white">
              ¡TEST TÁCTICO COMPLETADO!
            </h3>
            <p className="mt-2 text-sm text-slate-300 font-['Plus_Jakarta_Sans']">
              Puntuación Final:{' '}
              <span className="font-bold text-amber-400 text-lg">
                {score} / {QUIZ_QUESTIONS.length}
              </span>
            </p>

            <div className="mt-4 p-4 rounded-xl bg-slate-900 border border-amber-500/30 text-xs sm:text-sm text-amber-200/90 max-w-md mx-auto font-['Plus_Jakarta_Sans']">
              {score >= 4
                ? '¡Nivel Dios del Voleibol! Tienes la inteligencia de cristhian y Kenma para leer cualquier rotación.'
                : '¡Buen intento! Revisa el simulador animado de las rotaciones P1 a P6 para perfeccionar tu lectura táctica.'}
            </div>

            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={handleRestart}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider font-['Cinzel'] flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Reintentar
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold text-xs uppercase tracking-wider font-['Cinzel'] cursor-pointer"
              >
                Volver a la Cancha
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
