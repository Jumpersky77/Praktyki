package com.softserve.ezn4.praktyki.grades;
import com.softserve.ezn4.praktyki.answers.CommentInboundDTO;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/grade")
@CrossOrigin(origins = "http://localhost:3000")
public class GradeController {
    private final GradeService gradeService;

    public GradeController(GradeService gradeService){
        this.gradeService = gradeService;
    }

    @PostMapping("/{answerID}")
    @ResponseStatus(HttpStatus.CREATED)
    public void addCommentByAnswerID(
            @RequestBody GradeDTO grade) {
        // TODO: Implement add comment
        gradeService.addGrade(grade);
    }
}
