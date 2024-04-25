package com.softserve.ezn4.praktyki.answers;

import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class AnswerFullMapper implements RowMapper<AnswerFullDTO> {
    @Override
    public AnswerFullDTO mapRow(ResultSet resultSet, int i) throws SQLException {
        Long id = resultSet.getLong(AnswerFullDTO.ID);
        AnswerType type = AnswerType.valueOf(resultSet.getString(AnswerFullDTO.ANSWER_TYPE));
        String studentName = resultSet.getString(AnswerFullDTO.STUDENT_NAME);
        double grade = resultSet.getDouble(AnswerFullDTO.GRADE);
        String title = resultSet.getString(AnswerFullDTO.TITLE);
        String text = resultSet.getString(AnswerFullDTO.TEXT);

        List<String> imagePaths = new ArrayList<>();
        do {
            String imagePath = resultSet.getString("path");
            if (imagePath != null) {
                imagePaths.add(imagePath);
            }
        } while (resultSet.next());

        return new AnswerFullDTO(id, type, studentName, grade, title, text, imagePaths);
    }
}