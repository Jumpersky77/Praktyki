package com.softserve.ezn4.praktyki.answers;

import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class AnswerMapper implements RowMapper<AnswerDTO> {
    @Override
    public AnswerDTO mapRow(ResultSet resultSet, int i) throws SQLException {
        return new AnswerDTO(
                resultSet.getLong("id"),
                AnswerType.valueOf(resultSet.getString("answer_type")),
                resultSet.getString("slogin"),
                resultSet.getDouble("grade"),
                resultSet.getString("text_p")
        );
    }
}
