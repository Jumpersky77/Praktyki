package com.softserve.ezn4.praktyki.answers;

public record AnswerInboundDTO(Long studentID, Long teacherID, Long subjectID, String answerQuestion, String answerResponse, Float grade, AnswerType type) {
}
