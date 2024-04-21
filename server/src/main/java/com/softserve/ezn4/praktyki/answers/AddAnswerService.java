package com.softserve.ezn4.praktyki.answers;

import org.springframework.stereotype.Service;

@Service
public class AddAnswerService {
    public int addAnswer(AnswerInboundDTO answerInbound) {
        return 1;
    }

    public int addComment(Long answerID, CommentInboundDTO commentInbound) {
        return 1;
    }
}
