package com.softserve.ezn4.praktyki.teachers;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TeacherController {

    private final TeacherDAO teacherRepository;

    public TeacherController(TeacherDAO repository) {
        this.teacherRepository = repository;
    }

    @GetMapping(value = {"/teachers"}, produces = {MediaType.APPLICATION_JSON_VALUE})
    List<TeacherDTO> findTeachersBySubject(@RequestParam(name = "subjectID") Long subjectID) {
        return teacherRepository.findAllBySubjectID(subjectID);
    }
}
