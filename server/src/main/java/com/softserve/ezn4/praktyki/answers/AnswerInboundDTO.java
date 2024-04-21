package com.softserve.ezn4.praktyki.answers;

public record AnswerInboundDTO(Long studentID, Long teacherID, AnswerType type, String answerQuestion, String answerResponse) {
}
