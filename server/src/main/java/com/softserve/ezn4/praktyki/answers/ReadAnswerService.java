package com.softserve.ezn4.praktyki.answers;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReadAnswerService {
    private final AnswerDAO answerDAO;

    public ReadAnswerService(AnswerDAO answerDAO) {
        this.answerDAO = answerDAO;
    }
    List<AnswerDTO> findAnswersByTeacherWithCalculatedGrade(Long teacherID) {
        return answerDAO.findAnswersByTeacher(teacherID);
    }

    AnswerFullDTO findAnswerByID(Long answerID) {
        return answerDAO.findAnswerById(answerID);
    }

    List<CommentDTO> findAnswerCommentsByID(Long answerID) {
        return answerDAO.findCommentsByAnswerID(answerID);
    }
}