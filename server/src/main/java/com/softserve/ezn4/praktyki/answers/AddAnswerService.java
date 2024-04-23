package com.softserve.ezn4.praktyki.answers;

import org.springframework.stereotype.Service;

import java.util.Date;


@Service
public class AddAnswerService {
    private final AnswerDAO answerDAO;
    public AddAnswerService(AnswerDAO answerDAO) {
        this.answerDAO = answerDAO;
    }

    public void addAnswer(AnswerInboundDTO answerInbound) {
        answerDAO.insertAnswer(
                answerInbound.studentID(),
                answerInbound.teacherID(),
                answerInbound.subjectID(),
                answerInbound.answerQuestion(),
                answerInbound.answerResponse(),
                answerInbound.grade(),
                new Date(),
                answerInbound.type()
        );
    }

    public int addComment(Long answerID, CommentInboundDTO commentInbound) {
        return 1;
    }
}
