package com.softserve.ezn4.praktyki.teacher;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/teacher")
public class TeacherController {
    private final TeacherDAO teacherRepository;

    public TeacherController(TeacherDAO teacherRepository){
        this.teacherRepository = teacherRepository;
    }

    @GetMapping(value =  {"/{id}"}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public Optional<TeacherDTO> getTeacher(@PathVariable Long id) {
        return teacherRepository.getTeacher(id);
    }
}
