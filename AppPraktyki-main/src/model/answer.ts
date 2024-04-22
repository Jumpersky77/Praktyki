import { AnswerType } from "./answer-type";

export interface Answer {
    id: number;
    type: AnswerType;
    studentName: string;
    rate: number
}