package com.softserve.ezn4.praktyki.teachers;

public record TeacherDTO(Long id, String firstName, String latName) {
    public static final String ID = "id";
    public static final String FIRST_NAME = "first_name";
    public static final String LAST_NAME = "last_name";
}
