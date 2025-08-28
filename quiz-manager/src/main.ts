type Category = "sport" | "music" | "movies";

console.log("Hei på dei!");

interface Quiz {
  id: string;
  title: string;
  questions: string[];
  answers: Answer[];
  category: Category;
  createdAt?: Date; // ? betyr optional  
};

interface Answer {

};

const q: Quiz = {
  id: "123",
  title: "Anders' Quiz!",
  questions: [],
  answers: [],
  category: "music",
  createdAt: new Date()
}

const quizzes: Quiz[] = [];

function addQuiz(data: Quiz) {
  quizzes.push(data);
};

addQuiz(q);

console.log(q)

function getQuizById(id: string) {
  return quizzes.find((quiz) => quiz.id === id)
};

function filterByCategory(category: Category) {
  return quizzes.filter((quiz) => quiz.category === category)
};

filterByCategory("sport");

const getQuizAnswers = (quizId: string): Answer[] | undefined => {
  const quiz = getQuizById(quizId);
  return quiz ? quiz.answers : undefined;
};

const printQuizAnswersCount = () => {
  return quizzes
    .map((quiz) => {
      const answers = getQuizAnswers(quiz.id);
      return `Quiz ID: ${quiz.id}, Answers Count: ${answers ? answers.length : 0}`
    })
    .join("\n");

};

printQuizAnswersCount();