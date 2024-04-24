import axios from "axios";
const API_URL = "http://localhost:8080";

class AnswerServ {
  saveAnswer(answer: FormData) {
    return fetch(`${API_URL}/answers`, {
      body: answer,
      method: "POST",
    });
  }
}

export default new AnswerServ();
