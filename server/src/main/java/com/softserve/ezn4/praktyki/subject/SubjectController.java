package com.softserve.ezn4.praktyki.subject;

import org.springframework.http.MediaType;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
        var subject = new SubjectDTO();
        subject.setName("Matematyka");
        subject.setId(1L);
        var subject1 = new SubjectDTO();
        subject1.setName("Fizyka");
        subject1.setId(2L);
        return List.of(subject, subject1);
    }

    @GetMapping(value = {"/{id}"}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public Optional<SubjectDTO> getSubject(@PathVariable Long id) {
        return subjectRepository.getSubject(id);
    }
}