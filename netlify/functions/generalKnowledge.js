const data = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctOption: 2,
    points: 10,
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "Mark Twain",
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
    ],
    correctOption: 1,
    points: 10,
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "South Korea", "Japan", "India"],
    correctOption: 2,
    points: 10,
  },
  {
    question: "Which ocean is the largest in the world?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Southern Ocean",
      "Pacific Ocean",
    ],
    correctOption: 3,
    points: 10,
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
    correctOption: 2,
    points: 10,
  },
  {
    question: "What is the currency of the United Kingdom?",
    options: ["Euro", "Pound Sterling", "Dollar", "Yen"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "What is the largest desert in the world?",
    options: ["Sahara", "Gobi", "Kalahari", "Arctic Desert"],
    correctOption: 3,
    points: 10,
  },
  {
    question: "Which continent is known as the 'Dark Continent'?",
    options: ["Asia", "Africa", "Europe", "Australia"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Claude Monet",
      "Pablo Picasso",
      "Leonardo da Vinci",
    ],
    correctOption: 3,
    points: 10,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctOption: 0,
    points: 10,
  },
];

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
