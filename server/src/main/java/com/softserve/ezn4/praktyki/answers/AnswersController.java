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

    @PostMapping("/teacher/{teacherID}")
    List<AnswerDTO> getAnswersByTeacherIDWithGrades(
            @PathVariable("teacherID") Long teacherID,
            @RequestBody AnswerFilter filter) {
        // TODO: Implement service and controller
        return readAnswerService.findAnswersByTeacherWithCalculatedGrade(teacherID, filter);
    }

    @GetMapping("/{answerID}/comments")
    public List<CommentDTO> getAnswerCommentsByID(@PathVariable("answerID") Long answerID) {
        // TODO: Implement service and controller
        return readAnswerService.findAnswerCommentsByID(answerID);
    }

    @PostMapping("/{answerID}/comments")
    @ResponseStatus(HttpStatus.CREATED)
    public void addCommentByAnswerID(
            @PathVariable("answerID") Long answerID,
            @RequestBody CommentInboundDTO commentInbound) {
        // TODO: Implement add comment
        addAnswerService.addComment(answerID, commentInbound);

    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void addAnswer(@RequestBody AnswerInboundDTO answerInbound) {
        addAnswerService.addAnswer(answerInbound);
    }
}
