import fs from "fs";

export interface FAQ {
  category: string;
  questions: {
    question: string;
    answer: string;
  }[];
}
export const getFaqData = (): FAQ[] => {
  const fileContent = fs.readFileSync("faq.md", "utf-8");

  const categories = fileContent.split("\n## "); // assumes that each category starts with "## "

  const parsedData = categories.map((categoryBlock) => {
    const [categoryTitle, ...questions] = categoryBlock.split("\n### "); // assumes that each question starts with "### "
    const parsedQuestions = questions.map((q) => {
      const [question, ...answerParts] = q.split("\n");
      const answer = answerParts.join("\n").trim();
      return { question, answer };
    });
    return { category: categoryTitle.trim().replace("## ", ""), questions: parsedQuestions };
  });

  return parsedData;
};
