const complexIQData = [
  {
    question: "If 3 cats can catch 3 mice in 3 minutes, how many cats are needed to catch 100 mice in 100 minutes?",
    options: ["3", "30", "100", "10"],
    correctOption: 0,
    points: 20,
  },
  {
    question: "A clock shows the time as 3:15. The hour hand is pointing exactly at 3. What is the actual angle between the hour and minute hands?",
    options: ["0°", "7.5°", "15°", "30°"],
    correctOption: 1,
    points: 25,
  },
  {
    question: "A farmer has 17 sheep. All but 9 run away. How many sheep does he have left?",
    options: ["0", "8", "9", "17"],
    correctOption: 2,
    points: 20,
  },
  {
    question: "Which number should replace the question mark in the sequence: 2, 6, 12, 20, 30, ?",
    options: ["38", "40", "42", "44"],
    correctOption: 2,
    points: 25,
  },
  {
    question: "A man walks south for 3 miles, then east for 4 miles, then north for 3 miles. How far is he from his starting point?",
    options: ["3 miles", "4 miles", "5 miles", "7 miles"],
    correctOption: 2,
    points: 20,
  },
  {
    question: "What comes next in the sequence: 1, 11, 21, 1211, 111221, ?",
    options: ["112221", "122112", "312211", "221111"],
    correctOption: 2,
    points: 30,
  },
  {
    question: "If a rope ladder is hanging over the side of a boat, and the bottom rung is 2 feet above water, how much of the ladder will be underwater if the tide rises by 4 feet?",
    options: ["0 feet", "2 feet", "4 feet", "The entire ladder"],
    correctOption: 0,
    points: 20,
  },
  {
    question: "Which number should replace the question mark? 144, 121, 100, 81, ?",
    options: ["49", "64", "36", "25"],
    correctOption: 1,
    points: 25,
  },
  {
    question: "John’s mother has five children: April, May, June, July. What is the name of the fifth child?",
    options: ["August", "September", "John", "None of the above"],
    correctOption: 2,
    points: 15,
  },
  {
    question: "A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?",
    options: ["$0.05", "$0.10", "$0.15", "$0.20"],
    correctOption: 0,
    points: 30,
  },
];

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(complexIQData),
  };
};
