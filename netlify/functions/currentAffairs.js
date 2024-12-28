const data = [
  {
    question: "Who won the 2024 U.S. Presidential election?",
    options: ["Joe Biden", "Donald Trump", "Kamala Harris", "Bernie Sanders"],
    correctOption: 0,
    points: 30,
  },
  {
    question: "Which country recently hosted the 2022 FIFA World Cup?",
    options: ["Brazil", "Russia", "Qatar", "Japan"],
    correctOption: 2,
    points: 20,
  },
  {
    question: "What year did the UK officially leave the European Union?",
    options: ["2020", "2021", "2019", "2022"],
    correctOption: 0,
    points: 20,
  },
  {
    question: "Who was named Time's Person of the Year in 2023?",
    options: [
      "Elon Musk",
      "Greta Thunberg",
      "Volodymyr Zelensky",
      "Taylor Swift",
    ],
    correctOption: 2,
    points: 30,
  },
  {
    question: "What significant event occurred on November 9, 2023?",
    options: [
      "New Zealand elections",
      "NASA's Artemis mission launch",
      "Apple released the iPhone 15",
      "Paris climate summit",
    ],
    correctOption: 1,
    points: 20,
  },
  {
    question: "Which company acquired Twitter in 2022?",
    options: ["Facebook", "Google", "Microsoft", "Elon Musk"],
    correctOption: 3,
    points: 10,
  },
  {
    question:
      "Which country recently legalized marijuana for recreational use?",
    options: ["Mexico", "Canada", "Germany", "Australia"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "What is the current status of the war in Ukraine?",
    options: [
      "Ongoing",
      "Ceasefire agreement reached",
      "Ended",
      "Peace negotiations completed",
    ],
    correctOption: 0,
    points: 30,
  },
  {
    question: "Which company launched the new AI-powered chatbot, ChatGPT?",
    options: ["OpenAI", "Google", "Microsoft", "Meta"],
    correctOption: 0,
    points: 20,
  },
  {
    question: "What is the name of the new King of the United Kingdom?",
    options: ["Charles III", "George V", "Henry VIII", "William III"],
    correctOption: 0,
    points: 30,
  },
];

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
