const advancedData = [
  {
    question: "Which treaty officially ended the First World War?",
    options: [
      "Treaty of Versailles",
      "Treaty of Tordesillas",
      "Treaty of Ghent",
      "Treaty of Westphalia",
    ],
    correctOption: 0,
    points: 15,
  },
  {
    question: "Which physicist developed the general theory of relativity?",
    options: [
      "Isaac Newton",
      "Nikola Tesla",
      "Albert Einstein",
      "Stephen Hawking",
    ],
    correctOption: 2,
    points: 15,
  },
  {
    question: "In which year did the Titanic sink after hitting an iceberg?",
    options: ["1905", "1912", "1923", "1898"],
    correctOption: 1,
    points: 15,
  },
  {
    question: "Which ancient civilization built the city of Machu Picchu?",
    options: ["Aztec", "Mayan", "Inca", "Olmec"],
    correctOption: 2,
    points: 15,
  },
  {
    question: "Which country has the highest number of UNESCO World Heritage Sites?",
    options: ["China", "Italy", "France", "India"],
    correctOption: 1,
    points: 15,
  },
  {
    question: "What is the chemical symbol for the element with the atomic number 79?",
    options: ["Ag", "Au", "Pb", "Pt"],
    correctOption: 1,
    points: 15,
  },
  {
    question: "Which scientist is credited with discovering penicillin?",
    options: [
      "Marie Curie",
      "Alexander Fleming",
      "Louis Pasteur",
      "Joseph Lister",
    ],
    correctOption: 1,
    points: 15,
  },
  {
    question: "Which mathematical conjecture remains unsolved and involves prime numbers?",
    options: [
      "Poincaré Conjecture",
      "Fermat’s Last Theorem",
      "Riemann Hypothesis",
      "Goldbach’s Conjecture",
    ],
    correctOption: 2,
    points: 15,
  },
  {
    question: "What is the only planet in our solar system that rotates on its side?",
    options: ["Neptune", "Uranus", "Venus", "Mercury"],
    correctOption: 1,
    points: 15,
  },
  {
    question: "Which architectural structure is considered one of the Seven Wonders of the Ancient World and is located in present-day Iraq?",
    options: [
      "The Lighthouse of Alexandria",
      "The Colossus of Rhodes",
      "The Hanging Gardens of Babylon",
      "The Mausoleum at Halicarnassus",
    ],
    correctOption: 2,
    points: 15,
  },
];

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(advancedData),
  };
};
