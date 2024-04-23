import axios from "axios";
const API_URL = "http://localhost:8080";

class AnswerServ {
    saveAnswer(answer:any) {
        return axios.post(API_URL + "/answers", answer);
    }
}

export default new AnswerServ