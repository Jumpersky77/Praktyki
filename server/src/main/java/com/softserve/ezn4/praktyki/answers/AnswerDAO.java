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

    public int insertAnswer(Long studentID, Date date, String textA, String textP, Long teacersID, Long subjectID) {
        var sql = """
                INSERT INTO answers
                (student_id, add_data, text_a, text_p, grade, id_teachers, id_subject)
                VALUES (?,?,?,?,?,?,?)
                 """;
        return jdbcTemplate.update(sql, studentID, date, textA, textP, teacersID, subjectID);
    }
}
