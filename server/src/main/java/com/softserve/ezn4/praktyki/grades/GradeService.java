package com.softserve.ezn4.praktyki.grades;

import org.springframework.stereotype.Service;

@Service
public class GradeService {
    private final GradeDAO gradeDAO;
    public GradeService(GradeDAO gradeDAO) {
        this.gradeDAO = gradeDAO;
    }

    public void addGrade(GradeDTO grade) {
        Long studentID = grade.studentID();
        Long answerID = grade.answerID();
        double newGrade = grade.grade();

        boolean hasExistingGrade = gradeDAO.hasExistingGrade(studentID, answerID);

        if (hasExistingGrade) {
            gradeDAO.updateGrade(answerID, studentID, newGrade);
        } else {
            gradeDAO.addGrade(studentID, answerID, (byte) newGrade);
        }

        double avgGrade = gradeDAO.countAvgGrade(answerID);
        gradeDAO.updateAvgGrade(
                answerID,
                avgGrade
        );
    }
}