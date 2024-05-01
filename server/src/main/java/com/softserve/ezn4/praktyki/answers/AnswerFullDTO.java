package com.softserve.ezn4.praktyki.answers;

import java.util.List;

public record AnswerFullDTO(Long id, AnswerType type, String studentName, double grade, String title, String text, List<String> imagePaths) {
    public static final String ID = "id";
    public static final String ANSWER_TYPE = "answer_type";
    public static final String GRADE = "grade";
    public static final String TITLE = "text_p";
    public static final String TEXT = "text_a";
    public static final String STUDENT_NAME = "slogin";
}