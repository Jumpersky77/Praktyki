package com.softserve.ezn4.praktyki.subject;

import org.springframework.http.MediaType;

import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/subject")
public class SubjectController {

    private final SubjectDAO subjectRepository;

    public SubjectController(SubjectDAO subjectRepository) {
        this.subjectRepository = subjectRepository;
    }

    @GetMapping(value = {"/{id}"}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public Optional<SubjectDTO> getSubject(@PathVariable Long id) {
        return subjectRepository.getSubject(id);
    }
}