package com.softserve.ezn4.praktyki.comment;

import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class CommentMapper implements RowMapper<CommentDTO>{
    @Override
    public CommentDTO mapRow(ResultSet resultSet, int i) throws SQLException{
        var comment = new CommentDTO();
        comment.setId(resultSet.getLong("id"));
        comment.setStudentId(resultSet.getLong("id_student"));
        comment.setAnswerId(resultSet.getLong("id_answer"));
        comment.setCommentText(resultSet.getString("comment_text"));
        return comment;
    }
}
