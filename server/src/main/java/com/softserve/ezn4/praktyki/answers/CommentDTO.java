package com.softserve.ezn4.praktyki.answers;

public record CommentDTO(String studentName, String commentText) {
    public static final String STUDENT_NAME = "slogin";
    public static final String COMMENT_TEXT = "comment_text";
}
