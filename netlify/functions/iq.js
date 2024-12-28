const data = [
  {
    question:
      "If a train travels 50 miles in 1 hour, how far will it travel in 3 hours?",
    options: ["150 miles", "100 miles", "200 miles", "120 miles"],
    correctOption: 0,
    points: 10,
  },
  {
    question: "Which number is the odd one out: 2, 4, 8, 10, 16?",
    options: ["2", "4", "8", "10", "16"],
    correctOption: 3,
    points: 10,
  },
  {
    question: "What comes next in the sequence: 1, 4, 9, 16, ?",
    options: ["25", "20", "18", "30"],
    correctOption: 0,
    points: 10,
  },
  {
    question:
      "If you have 3 apples and you give away 2, how many apples do you have left?",
    options: ["1", "3", "2", "5"],
    correctOption: 0,
    points: 10,
  },
  {
    question: "Which is heavier, a pound of feathers or a pound of bricks?",
    options: ["Feathers", "Bricks", "Neither", "Both are the same"],
    correctOption: 2,
    points: 10,
  },
  {
    question: "What is the next number in the series: 1, 3, 6, 10, ?",
    options: ["15", "12", "20", "21"],
    correctOption: 3,
    points: 10,
  },
  {
    question: "How many months have 28 days?",
    options: ["1", "2", "12", "4"],
    correctOption: 2,
    points: 10,
  },
  {
    question:
      "If a plane crashes on the border of the U.S. and Canada, where do they bury the survivors?",
    options: ["U.S.", "Canada", "Nowhere", "Both countries"],
    correctOption: 2,
    points: 10,
  },
  {
    question: "How many sides does a hexagon have?",
    options: ["5", "6", "7", "8"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "Which of these is an even number?",
    options: ["3", "7", "10", "15"],
    correctOption: 2,
    points: 10,
  },
];

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
