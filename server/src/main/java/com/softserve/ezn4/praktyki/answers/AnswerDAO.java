package com.softserve.ezn4.praktyki.answers;

import com.softserve.ezn4.praktyki.teachers.TeacherMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public class AnswerDAO {
    private final JdbcTemplate jdbcTemplate;

    public AnswerDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public int insertAnswer(Long studentID, Long teachersID, Long subjectID, String textA, String textP, double grade, Date date, AnswerType type) {
        var sql = """
                INSERT INTO answers
                (student_id, id_teachers, id_subject, text_a, text_p, grade, add_data, answer_type)
                VALUES (?,?,?,?,?,?,?,?)
                 """;
        return jdbcTemplate.update(sql, studentID, teachersID, subjectID, textA, textP, grade, new java.sql.Date(date.getTime()), type.name());
    }

    public List<AnswerDTO> findAnswersByTeacher(Long teacherID){
        var sql = """
            SELECT answers.id, student.slogin, grade, text_p, answer_type
            FROM answers
            INNER JOIN student ON student.id = answers.student_id
            WHERE id_teachers = ?
             """;
        return jdbcTemplate.query(sql, new AnswerMapper(), teacherID);
    }

    public AnswerFullDTO findAnswerById(Long answerID){
        var sql = """
             SELECT a.id, s.slogin, a.grade, a.text_p, a.text_a, a.answer_type
             FROM answers  a
             INNER JOIN student s ON s.id = a.student_id
             WHERE a.id = ?
             """;
        return jdbcTemplate.queryForObject(sql, new Object[]{answerID}, new AnswerFullMapper());
    }

    public List<CommentDTO> findCommentsByAnswerID(Long answerID){
        var sql = """
            SELECT c.comment_text, s.slogin
            FROM comments c
            INNER JOIN student s ON s.id = c.id_student
            WHERE c.id_answer = ?
             """;
        return jdbcTemplate.query(sql,new CommentMapper(), answerID);
    }

    public int insertComment(Long studentID, Long answerID, String comment) {
        var sql = """
                INSERT INTO comments
                (id_student, id_answer, comment_text)
                VALUES (?,?,?)
                 """;
        return jdbcTemplate.update(sql, studentID, answerID, comment);
    }
}