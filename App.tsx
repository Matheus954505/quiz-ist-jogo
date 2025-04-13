import { useState } from "react";

const quizData = [
  {
    type: "truefalse",
    question: "O HIV pode ser transmitido com um beijo no rosto.",
    answer: false,
  },
  {
    type: "choice",
    question: "O que o HIV ataca no nosso corpo?",
    options: ["Os músculos", "O sistema imunológico", "O coração"],
    answer: 1,
  },
  {
    type: "choice",
    question: "Qual dessas doenças pode causar manchas vermelhas na pele?",
    options: ["Sífilis", "Gripe", "Catapora"],
    answer: 0,
  },
  {
    type: "truefalse",
    question: "Usar camisinha é uma forma de se proteger contra ISTs.",
    answer: true,
  },
  {
    type: "choice",
    question: "A sigla IST significa:",
    options: ["Insetos Super Tóxicos", "Infecções Sexualmente Transmissíveis", "Internet Sem Tecnologia"],
    answer: 1,
  }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const current = quizData[index];

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const next = index + 1;
    if (next < quizData.length) setIndex(next);
    else setShowResult(true);
  };

  return (
    <div className="p-4 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4 text-purple-700">Desafio da Saúde!</h1>
      {!showResult ? (
        <div className="bg-white p-4 shadow rounded-xl">
          <p className="text-lg font-semibold">{current.question}</p>
          {current.type === "truefalse" && (
            <div className="flex justify-center gap-4 mt-4">
              <button onClick={() => handleAnswer(true)} className="bg-green-500 text-white px-4 py-2 rounded">Verdadeiro</button>
              <button onClick={() => handleAnswer(false)} className="bg-red-500 text-white px-4 py-2 rounded">Falso</button>
            </div>
          )}
          {current.type === "choice" && (
            <div className="grid gap-2 mt-4">
              {current.options.map((opt, i) => (
                <button key={i} onClick={() => handleAnswer(i === current.answer)} className="bg-blue-500 text-white px-4 py-2 rounded">{opt}</button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="text-green-600">
          <h2 className="text-2xl font-bold">Parabéns!</h2>
          <p className="mt-2 text-lg">Você acertou {score} de {quizData.length} perguntas!</p>
          <p className="text-sm mt-1">Continue aprendendo e cuidando da sua saúde!</p>
        </div>
      )}
      <audio autoPlay loop className="hidden">
        <source src="/quiz-music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}