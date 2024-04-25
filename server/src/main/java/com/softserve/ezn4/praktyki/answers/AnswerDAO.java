package com.softserve.ezn4.praktyki.answers;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.Date;
import java.util.List;

@Repository
public class AnswerDAO {
    private final JdbcTemplate jdbcTemplate;

    public AnswerDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Long insertAnswer(Long studentID, Long teachersID, Long subjectID, String textA, String textP, double grade, Date date, AnswerType type) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        var sql = """
                INSERT INTO answers
                (student_id, id_teachers, id_subject, text_a, text_p, grade, add_data, answer_type)
                VALUES (?,?,?,?,?,?,?,?)
                 """;
        jdbcTemplate.update((connection) -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setLong(1, studentID); // Set your parameter values
            ps.setLong(2, teachersID);
            ps.setLong(3, subjectID);
            ps.setString(4, textA);
            ps.setString(5, textP);
            ps.setDouble(6, grade);
            ps.setDate(7, new java.sql.Date(date.getTime()));
            ps.setString(8, type.name());
            return ps;
        }, keyHolder);

        return Long.valueOf(String.valueOf(keyHolder.getKeys().get("id"))).longValue();
    }

    public int insertPhoto(Long answerID, String photoPath) {
        var sql = """
                INSERT INTO image
                (id_answer, path)
                VALUES (?,?)
                 """;
        return jdbcTemplate.update(sql, answerID, photoPath);
    }

    public List<AnswerDTO> findAnswersByTeacher(Long teacherID) {
        var sql = """
                SELECT answers.id, student.slogin, grade, text_p, answer_type
                FROM answers
                INNER JOIN student ON student.id = answers.student_id
                WHERE id_teachers = ?
                 """;
        return jdbcTemplate.query(sql, new AnswerMapper(), teacherID);
    }

    public AnswerFullDTO findAnswerById(Long answerID) {
        var sql = """
                SELECT a.id, s.slogin, a.grade, a.text_p, a.text_a, a.answer_type, i.path
                FROM answers a
                INNER JOIN student s ON s.id = a.student_id
                left join image i on i.id_answer = a.id
                WHERE a.id = ?
                """;
        return jdbcTemplate.queryForObject(sql, new Object[]{answerID}, new AnswerFullMapper());
    }

    public List<CommentDTO> findCommentsByAnswerID(Long answerID) {
        var sql = """
                SELECT c.comment_text, s.slogin
                FROM comments c
                INNER JOIN student s ON s.id = c.id_student
                WHERE c.id_answer = ?
                 """;
        return jdbcTemplate.query(sql, new CommentMapper(), answerID);
    }

    public void insertComment(Long studentID, Long answerID, String comment) {
        var sql = """
                INSERT INTO comments
                (id_student, id_answer, comment_text)
                VALUES (?,?,?)
                 """;
        jdbcTemplate.update(sql, studentID, answerID, comment);
    }
}