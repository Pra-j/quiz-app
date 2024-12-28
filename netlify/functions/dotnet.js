const data = [
  {
    question: "What does .NET stand for?",
    options: [
      "Network Enhanced Technology",
      "New Era Technology",
      ".NET Framework",
      "Network Element Tool",
    ],
    correctOption: 2,
    points: 10,
  },
  {
    question: "Which language is primarily used with the .NET framework?",
    options: ["C#", "Java", "C++", "Python"],
    correctOption: 0,
    points: 10,
  },
  {
    question: "What is the main purpose of ASP.NET?",
    options: [
      "Mobile applications",
      "Web development",
      "Game development",
      "Desktop applications",
    ],
    correctOption: 1,
    points: 10,
  },
  {
    question: "Which of the following is a feature of .NET Core?",
    options: [
      "Cross-platform support",
      "Windows-only",
      "Only for mobile apps",
      "Open-source for front-end only",
    ],
    correctOption: 0,
    points: 10,
  },
  {
    question: "What is the latest version of the .NET framework?",
    options: [".NET 5", ".NET 6", ".NET 7", ".NET 8"],
    correctOption: 2,
    points: 10,
  },
  {
    question: "Which IDE is commonly used for .NET development?",
    options: ["IntelliJ", "Eclipse", "Visual Studio", "Xcode"],
    correctOption: 2,
    points: 10,
  },
  {
    question: "What is a common use case for Entity Framework in .NET?",
    options: [
      "Data access",
      "UI development",
      "Networking",
      "Security management",
    ],
    correctOption: 0,
    points: 10,
  },
  {
    question: "Which of the following is a feature of .NET Standard?",
    options: [
      "Cross-platform compatibility",
      "Only for Windows",
      "Only for mobile apps",
      "Used for front-end development only",
    ],
    correctOption: 0,
    points: 10,
  },
  {
    question: "Which .NET component helps manage dependencies and libraries?",
    options: ["NuGet", "Node.js", "React", "Maven"],
    correctOption: 0,
    points: 10,
  },
  {
    question: "Which of these is an important feature of C#?",
    options: [
      "Object-oriented programming",
      "Declarative syntax",
      "Multi-threading only",
      "Functional programming only",
    ],
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
