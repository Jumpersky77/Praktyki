import axios from "axios";
const API_URL = "http://localhost:8080";

class AnswerServ {
    saveAnswer(answer:object) {
        return axios.post(API_URL + "/saveUser", answer);
    }
}

export default new AnswerServ