import { CommentModel } from "../model/comment";
import { detailsModel } from "../model/details";

const BASE_URL = "http://localhost:8080";

async function fetchAnswer(answerID: number) {
  const response = await fetch(`${BASE_URL}/answers/${answerID}`);
  const body: detailsModel = await response.json();
  return body;
}
async function fetchComments(answerID: number): Promise<CommentModel[]> {
  const response = await fetch(`${BASE_URL}/answers/${answerID}/comments`);
  const body: CommentModel[] = await response.json();
  console.log(body);
  return body || [];
}

export const fullAnswerLoader = async ({ params }: any) => {
  const id = Number(params.id);
  const [answer, comments] = await Promise.all([
    fetchAnswer(id),
    fetchComments(id),
  ]);

  return { answer, comments };
};
