package com.softserve.ezn4.praktyki.grades;

import com.softserve.ezn4.praktyki.answers.AnswerDAO;
import com.softserve.ezn4.praktyki.answers.AnswerInboundDTO;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class GradeService {
    private final GradeDAO gradeDAO;
    public GradeService(GradeDAO gradeDAO) {
        this.gradeDAO = gradeDAO;
    }

    public void addGrade(GradeDTO grade) {
        double avgGrade = gradeDAO.countAvgGrade(grade.answerID());

        gradeDAO.addGrade(
                grade.studentID(),
                grade.answerID(),
                grade.grade()
        );

        gradeDAO.addAvgGrade(
                grade.answerID(),
                avgGrade
        );
    }
}
