package com.softserve.ezn4.praktyki.answers;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public class AnswerDAO {
    private final JdbcTemplate jdbcTemplate;

    public AnswerDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public int insertAnswer(Long studentID, Long teachersID, Long subjectID, String textA, String textP, Float grade, Date date, AnswerType type) {
        var sql = """
                INSERT INTO answers
                (student_id, id_teachers, id_subject, text_a, text_p, grade, add_data, answer_type)
                VALUES (?,?,?,?,?,?,?,?)
                 """;
        return jdbcTemplate.update(sql, studentID, teachersID, subjectID, textA, textP, grade, new java.sql.Date(date.getTime()), type.name());
    }
}
