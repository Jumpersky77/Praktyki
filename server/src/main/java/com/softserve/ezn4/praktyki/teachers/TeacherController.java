package com.softserve.ezn4.praktyki.teachers;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
public class TeacherController {

    @GetMapping(value = {"/teachers"}, produces = {MediaType.APPLICATION_JSON_VALUE})
    @CrossOrigin(origins = "http://localhost:3000")
    List<TeacherDTO> findTeachersBySubject(@RequestParam(name = "subject") String subjectName) {
        return List.of();
    }
}
