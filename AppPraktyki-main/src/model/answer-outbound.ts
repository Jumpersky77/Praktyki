import { AnswerType } from "./answer-type";

export interface AnswerOutbound {
    studentID: number;
    teacherID: number;
    type: AnswerType;
    answerQuestion: string;
    answerResponse: string;
}