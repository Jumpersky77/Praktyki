import { Api } from "@mui/icons-material";
import axios from "axios";
const API_URL = "http://localhost:8080";

class AnswerServ {
    saveAnswer(answer:any) {
        return axios.post(API_URL + "/answers", answer);
    }
    saveGrade(grade:number, answerID:number) {
        const obj = {
            studentID: 1,
            answerID: answerID,
            grade: grade,
        }
        return axios.post(API_URL + "/grade/"+answerID, obj);
    }
    saveComment(comment:any){
        return axios.post(API_URL + `/answers/${comment.answerID}/comments`, comment);
    }
}

export default new AnswerServ