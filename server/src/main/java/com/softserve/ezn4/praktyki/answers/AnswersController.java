package com.softserve.ezn4.praktyki.answers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
@RequestMapping("/answers")
@CrossOrigin(origins = "http://localhost:3000")
public class AnswersController {
    private final AddAnswerService addAnswerService;
    private final ReadAnswerService readAnswerService;

    @Autowired
    LocalSystemLoadPhoto storageService;

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


    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void addAnswer(@ModelAttribute AnswerInboundDTO answerInbound) {
        addAnswerService.addAnswer(answerInbound);
    }

    @GetMapping("/photos/{answerid}/{filename}")
    public ResponseEntity<Resource> getImage(@PathVariable String answerid, @PathVariable String filename) {
        Resource file = storageService.load(answerid, filename);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }
}
