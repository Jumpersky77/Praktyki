package com.softserve.ezn4.praktyki.answers;

import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class AnswerFullMapper implements RowMapper<AnswerFullDTO> {
    @Override
    public AnswerFullDTO mapRow(ResultSet resultSet, int i) throws SQLException {
        return new AnswerFullDTO(
                resultSet.getLong(AnswerFullDTO.ID),
                AnswerType.valueOf(resultSet.getString(AnswerFullDTO.ANSWER_TYPE)),
                resultSet.getString(AnswerFullDTO.STUDENT_NAME),
                resultSet.getDouble(AnswerFullDTO.GRADE),
                resultSet.getString(AnswerFullDTO.TITLE),
                resultSet.getString(AnswerFullDTO.TEXT)
        );
    }
}
