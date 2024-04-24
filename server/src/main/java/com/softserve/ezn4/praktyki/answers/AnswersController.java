package com.softserve.ezn4.praktyki.answers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/answers")
@CrossOrigin(origins = "http://localhost:3000")
public class AnswersController {
    private final AddAnswerService addAnswerService;
    private final ReadAnswerService readAnswerService;

    public AnswersController(AddAnswerService addAnswerService, ReadAnswerService readAnswerService) {
        this.addAnswerService = addAnswerService;
        this.readAnswerService = readAnswerService;
    }

    @GetMapping("/teacher/{teacherID}")
    List<AnswerDTO> getAnswersByTeacherIDWithGrades(
            @PathVariable("teacherID") Long teacherID
            ) {
        return readAnswerService.findAnswersByTeacherWithCalculatedGrade(teacherID);
    }

    @GetMapping("/{answerID}")
    AnswerFullDTO getAnswersByID(
            @PathVariable("answerID") Long answerID) {
        return readAnswerService.findAnswerByID(answerID);
    }

    @GetMapping("/{answerID}/comments")
    public List<CommentDTO> getAnswerCommentsByID(@PathVariable("answerID") Long answerID) {
        return readAnswerService.findAnswerCommentsByID(answerID);
    }

    @PostMapping("/{answerID}/comments")
    @ResponseStatus(HttpStatus.CREATED)
    public void addCommentByAnswerID(

            @RequestBody CommentInboundDTO commentInbound) {
        // TODO: Implement add comment
        addAnswerService.addComment(commentInbound);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void addAnswer(@RequestBody AnswerInboundDTO answerInbound) {
        addAnswerService.addAnswer(answerInbound);
    }
}
