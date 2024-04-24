package com.softserve.ezn4.praktyki.answers;

import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class CommentMapper implements RowMapper<CommentDTO> {
    @Override
    public CommentDTO mapRow(ResultSet resultSet, int i) throws SQLException {
        return new CommentDTO(
                resultSet.getString(CommentDTO.STUDENT_NAME),
                resultSet.getString(CommentDTO.COMMENT_TEXT)
        );
    }
}
