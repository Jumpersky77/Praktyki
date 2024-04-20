package com.softserve.ezn4.praktyki.teachers;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
public class TeacherController {

    private final TeacherDAO repository;

    public TeacherController(TeacherDAO repository) {
        this.repository = repository;
    }

    @GetMapping(value = {"/teachers"}, produces = {MediaType.APPLICATION_JSON_VALUE})
    @CrossOrigin(origins = "http://localhost:3000")
    List<TeacherDTO> findTeachersBySubject(@RequestParam(name = "subjectID") Long subjectID) {
        return repository.findAllBySubjectID(subjectID);
    }
}
