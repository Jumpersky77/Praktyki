package com.softserve.ezn4.praktyki.answers;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public record AnswerInboundDTO(Long studentID,
                               Long teacherID,
                               Long subjectID,
                               String answerQuestion,
                               String answerResponse,
                               double grade,
                               AnswerType type,
                               List<MultipartFile> photos) {
}
