const complexData = [
  {
    question: "Which of the following best describes the role of the Common Language Runtime (CLR) in .NET?",
    options: [
      "Manages memory, execution, and security of .NET applications",
      "Translates .NET code to Java bytecode",
      "Provides only garbage collection services",
      "Acts as a database management system for .NET applications",
    ],
    correctOption: 0,
    points: 15,
  },
  {
    question: "What is the purpose of the Just-In-Time (JIT) compiler in .NET?",
    options: [
      "Compiles C# code directly to machine code before execution",
      "Compiles IL (Intermediate Language) to native machine code at runtime",
      "Pre-compiles entire .NET applications to native code",
      "Translates JavaScript code into .NET executable code",
    ],
    correctOption: 1,
    points: 15,
  },
  {
    question: "Which of the following correctly describes the difference between .NET Framework and .NET Core?",
    options: [
      ".NET Framework is cross-platform, whereas .NET Core is Windows-only",
      ".NET Core is open-source and cross-platform, whereas .NET Framework is Windows-only",
      "Both are open-source and cross-platform",
      "Neither .NET Framework nor .NET Core supports microservices architecture",
    ],
    correctOption: 1,
    points: 15,
  },
  {
    question: "Which of these is NOT a valid feature of .NET Core?",
    options: [
      "Lightweight and modular architecture",
      "Support for multiple programming languages",
      "Dependency injection built-in",
      "Requires IIS for hosting applications",
    ],
    correctOption: 3,
    points: 15,
  },
  {
    question: "What is the primary advantage of using ASP.NET Core over traditional ASP.NET?",
    options: [
      "ASP.NET Core supports Windows only",
      "ASP.NET Core is faster, cross-platform, and supports modern development patterns",
      "ASP.NET Core does not support dependency injection",
      "ASP.NET Core requires an internet connection to run",
    ],
    correctOption: 1,
    points: 15,
  },
  {
    question: "Which .NET component provides a standard set of APIs across different .NET implementations?",
    options: [
      "Common Type System (CTS)",
      "Base Class Library (BCL)",
      ".NET Standard",
      "Windows Runtime (WinRT)",
    ],
    correctOption: 2,
    points: 15,
  },
  {
    question: "What is the main purpose of Kestrel in ASP.NET Core?",
    options: [
      "Acts as a database engine",
      "Provides a built-in web server for hosting .NET applications",
      "Handles dependency injection in .NET Core",
      "Generates client-side JavaScript code",
    ],
    correctOption: 1,
    points: 15,
  },
  {
    question: "Which of the following statements about Blazor is true?",
    options: [
      "Blazor allows building web applications using C# instead of JavaScript",
      "Blazor only runs on the server-side",
      "Blazor does not support dependency injection",
      "Blazor requires JavaScript for all UI interactions",
    ],
    correctOption: 0,
    points: 15,
  },
  {
    question: "What is the main benefit of using gRPC in .NET applications?",
    options: [
      "It is a front-end framework for .NET applications",
      "It provides a high-performance, language-agnostic remote procedure call (RPC) mechanism",
      "It is a database query language specific to .NET",
      "It replaces REST APIs with GraphQL",
    ],
    correctOption: 1,
    points: 15,
  },
  {
    question: "Which of the following statements about .NET MAUI (Multi-platform App UI) is correct?",
    options: [
      "It is a framework for building cloud-based microservices",
      "It allows developers to build cross-platform applications using a single codebase",
      "It is a JavaScript-based UI framework for .NET",
      "It is used exclusively for building ASP.NET Core web applications",
    ],
    correctOption: 1,
    points: 15,
  },
];

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(complexData),
  };
};
