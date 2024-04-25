package com.softserve.ezn4.praktyki.grades;

import org.springframework.stereotype.Service;

@Service
public class GradeService {
    private final GradeDAO gradeDAO;
    public GradeService(GradeDAO gradeDAO) {
        this.gradeDAO = gradeDAO;
    }

    public void addGrade(GradeDTO grade) {

        gradeDAO.addGrade(
                grade.studentID(),
                grade.answerID(),
                grade.grade()
        );

        double avgGrade = gradeDAO.countAvgGrade(grade.answerID());
        gradeDAO.addAvgGrade(
                grade.answerID(),
                avgGrade
        );
    }
}
