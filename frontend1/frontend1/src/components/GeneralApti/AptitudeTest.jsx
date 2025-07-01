import React, { useState, useEffect } from 'react';

// Sample papers with questions and answers
const papers = [
  {
    id: 1,
    name: "Mathematics Paper",
    questions: [
      {
        id: 1,
        text: "What is the capital of France?",
        options: ["Berlin", "London", "Paris", "Madrid"],
        correctAnswer: "Paris",
      },
      {
        id: 2,
        text: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars",
      },
      {
        id: 3,
        text: "What is 5 + 3?",
        options: ["5", "8", "10", "7"],
        correctAnswer: "8",
      },
    ],
  },
  {
    id: 2,
    name: "Science Paper",
    questions: [
      {
        id: 1,
        text: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        correctAnswer: "H2O",
      },
      {
        id: 2,
        text: "What planet is known for its rings?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Saturn",
      },
      {
        id: 3,
        text: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
        correctAnswer: "Mitochondria",
      },
    ],
  },
  {
    id: 3,
    name: "History Paper",
    questions: [
      {
        id: 1,
        text: "Who was the first President of the United States?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        correctAnswer: "George Washington",
      },
      {
        id: 2,
        text: "What year did World War II end?",
        options: ["1945", "1939", "1963", "1918"],
        correctAnswer: "1945",
      },
      {
        id: 3,
        text: "Who discovered America?",
        options: ["Christopher Columbus", "Marco Polo", "Ferdinand Magellan", "Leif Erikson"],
        correctAnswer: "Christopher Columbus",
      },
    ],
  },
  {
    id: 4,
    name: "Geography Paper",
    questions: [
      {
        id: 1,
        text: "What is the largest continent?",
        options: ["Africa", "Asia", "North America", "Europe"],
        correctAnswer: "Asia",
      },
      {
        id: 2,
        text: "Which river is the longest in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correctAnswer: "Nile River",
      },
      {
        id: 3,
        text: "Which country has the most natural lakes?",
        options: ["Canada", "United States", "Russia", "India"],
        correctAnswer: "Canada",
      },
    ],
  },
  {
    id: 5,
    name: "Literature Paper",
    questions: [
      {
        id: 1,
        text: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
        correctAnswer: "William Shakespeare",
      },
      {
        id: 2,
        text: "What is the first book of the Bible?",
        options: ["Genesis", "Exodus", "Leviticus", "Numbers"],
        correctAnswer: "Genesis",
      },
      {
        id: 3,
        text: "What novel features the character 'Hester Prynne'?",
        options: ["Moby Dick", "The Scarlet Letter", "Pride and Prejudice", "Jane Eyre"],
        correctAnswer: "The Scarlet Letter",
      },
    ],
  },
  {
    id: 6,
    name: "Art Paper",
    questions: [
      {
        id: 1,
        text: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci",
      },
      {
        id: 2,
        text: "Which art movement is Salvador Dali associated with?",
        options: ["Impressionism", "Cubism", "Surrealism", "Expressionism"],
        correctAnswer: "Surrealism",
      },
      {
        id: 3,
        text: "What is the primary color of the sun in art?",
        options: ["Yellow", "Blue", "Red", "Green"],
        correctAnswer: "Yellow",
      },
    ],
  },
  {
    id: 7,
    name: "Technology Paper",
    questions: [
      {
        id: 1,
        text: "What does HTML stand for?",
        options: ["Hypertext Markup Language", "High Text Markup Language", "Hyperlink and Text Markup Language", "Hypertext Multiple Language"],
        correctAnswer: "Hypertext Markup Language",
      },
      {
        id: 2,
        text: "Which company developed the iPhone?",
        options: ["Samsung", "Microsoft", "Apple", "Google"],
        correctAnswer: "Apple",
      },
      {
        id: 3,
        text: "What is the main purpose of a firewall?",
        options: ["To cool down servers", "To prevent unauthorized access", "To increase network speed", "To store data"],
        correctAnswer: "To prevent unauthorized access",
      },
    ],
  },
  {
    id: 8,
    name: "Physics Paper",
    questions: [
      {
        id: 1,
        text: "What is the unit of force?",
        options: ["Joule", "Newton", "Watt", "Pascal"],
        correctAnswer: "Newton",
      },
      {
        id: 2,
        text: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "1,000,000 km/s", "500,000 km/s"],
        correctAnswer: "300,000 km/s",
      },
      {
        id: 3,
        text: "What is the principle of conservation of energy?",
        options: ["Energy cannot be created or destroyed", "Energy can be created", "Energy is infinite", "Energy is always lost"],
        correctAnswer: "Energy cannot be created or destroyed",
      },
    ],
  },
  {
    id: 9,
    name: "Chemistry Paper",
    questions: [
      {
        id: 1,
        text: "What is the chemical formula for salt?",
        options: ["NaCl", "H2O", "CO2", "HCl"],
        correctAnswer: "NaCl",
      },
      {
        id: 2,
        text: "What is the pH level of pure water?",
        options: ["1", "7", "14", "0"],
        correctAnswer: "7",
      },
      {
        id: 3,
        text: "Which element has the atomic number 1?",
        options: ["Helium", "Oxygen", "Hydrogen", "Lithium"],
        correctAnswer: "Hydrogen",
      },
    ],
  },
  {
    id: 10,
    name: "Biology Paper",
    questions: [
      {
        id: 1,
        text: "What is the basic unit of life?",
        options: ["Tissue", "Organ", "Cell", "Organism"],
        correctAnswer: "Cell",
      },
      {
        id: 2,
        text: "What process do plants use to make food?",
        options: ["Photosynthesis", "Respiration", "Digestion", "Transpiration"],
        correctAnswer: "Photosynthesis",
      },
      {
        id: 3,
        text: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
        correctAnswer: "Mitochondria",
      },
    ],
  },
];

const PaperList = ({ onSelectPaper }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {papers.map((paper) => (
        <div
          key={paper.id}
          onClick={() => onSelectPaper(paper)}
          className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-gray-700 dark:to-gray-800 text-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
        >
          <h3 className="text-xl font-bold text-center ">{paper.name}</h3>
        </div>
      ))}
    </div>
  );
};

const Instructions = ({ onStartTest, onGoBack }) => {
  return (
    <div className="max-w-md mx-auto text-center bg-white dark:bg-gray-900 dark:text-white p-8 rounded-lg shadow-lg mt-6 relative">
      <button onClick={onGoBack} className="absolute top-4 right-4 text-red-500 text-3xl hover:text-red-700 transition">
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-4">Instructions</h2>
      <p>Please read the following instructions before starting the test.</p>
      <p className="mt-4">You will have 30 minutes to complete the test.</p>
      <button onClick={onStartTest} className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition">
        Start Test
      </button>
    </div>
  );
};

const TestPage = ({ paper, onSubmitTest, onGoBack }) => {
  const [selectedAnswers, setSelectedAnswers] = useState(Array(paper.questions.length).fill(''));
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onSubmitTest(selectedAnswers);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [selectedAnswers, onSubmitTest]);

  const handleAnswerChange = (questionIndex, answer) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };

  const formatTimeLeft = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg mt-6">
      <button onClick={onGoBack} className="text-red-500 hover:text-red-700 transition mb-4">
        &lt; Back
      </button>
      <h2 className="text-2xl font-bold mb-4 dark:text-white">{paper.name}</h2>
      <div className="text-lg font-semibold mb-4 dark:text-white">Time Left: {formatTimeLeft(timeLeft)}</div>
      <form onSubmit={(e) => { e.preventDefault(); onSubmitTest(selectedAnswers); }}>
        {paper.questions.map((question, index) => (
          <div key={question.id} className="mb-4">
            <p className="font-bold dark:text-white">{index + 1}. {question.text}</p>
            {question.options.map((option) => (
              <div key={option} className="flex items-center mb-2">
                <input
                  type="radio"
                  name={`question${index}`}
                  value={option}
                  checked={selectedAnswers[index] === option}
                  onChange={() => handleAnswerChange(index, option)}
                  className="mr-2"
                />
                <label className="text-gray-800 dark:text-gray-200">{option}</label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Submit Test
        </button>
      </form>
    </div>
  );
};

const Result = ({ paper, selectedAnswers, onGoBack }) => {
  const correctAnswers = paper.questions.filter((q, index) => q.correctAnswer === selectedAnswers[index]);
  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-lg mt-6 relative">
      <button onClick={onGoBack} className="absolute top-4 right-4 text-red-500 text-3xl hover:text-red-700 transition">
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-4 text-center">Results for {paper.name}</h2>
      <p className="mb-4 text-center">You scored <span className="font-bold">{correctAnswers.length}</span> out of <span className="font-bold">{paper.questions.length}</span>!</p>
      <h3 className="font-bold">Answer Reveal:</h3>
      <ul className="mt-2">
        {paper.questions.map((question, index) => (
          <li key={question.id} className="mb-2 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
            <p>{index + 1}. {question.text}</p>
            <p>Your Answer: <span className="font-semibold">{selectedAnswers[index]}</span></p>
            <p>Correct Answer: <span className="font-semibold">{question.correctAnswer}</span></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [testStarted, setTestStarted] = useState(false);
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handlePaperSelect = (paper) => {
    setSelectedPaper(paper);
    setTestStarted(false);
    setTestSubmitted(false);
  };

  const handleStartTest = () => {
    setTestStarted(true);
  };

  const handleSubmitTest = (answers) => {
    setSelectedAnswers(answers);
    setTestSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      {!selectedPaper && <PaperList onSelectPaper={handlePaperSelect} />}
      {selectedPaper && !testStarted && !testSubmitted && (
        <Instructions onStartTest={handleStartTest} onGoBack={() => setSelectedPaper(null)} />
      )}
      {selectedPaper && testStarted && !testSubmitted && (
        <TestPage paper={selectedPaper} onSubmitTest={handleSubmitTest} onGoBack={() => setTestStarted(false)} />
      )}
      {selectedPaper && testSubmitted && (
        <Result paper={selectedPaper} selectedAnswers={selectedAnswers} onGoBack={() => setSelectedPaper(null)} />
      )}
    </div>
  );
};

export default App;