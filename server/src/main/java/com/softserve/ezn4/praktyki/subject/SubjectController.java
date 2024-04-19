package com.softserve.ezn4.praktyki.subject;

import org.springframework.http.MediaType;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/")
public class SubjectController {

    private final SubjectDAO subjectRepository;

    public SubjectController(SubjectDAO subjectRepository) {
        this.subjectRepository = subjectRepository;
    }

    @GetMapping(value = {"/subjects"}, produces = {MediaType.APPLICATION_JSON_VALUE})
    @CrossOrigin(origins = "http://localhost:3000")
    public List<SubjectDTO> getAllSubjects() {
        return subjectRepository.getAllSubjects();
    }
}