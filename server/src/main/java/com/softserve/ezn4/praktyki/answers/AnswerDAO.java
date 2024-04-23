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

    public int insertAnswer(Long studentID, Long teacersID, Long subjectID, String textA, String textP, Float grade, Date date, AnswerType type) {
        var sql = """
                INSERT INTO answers
                (student_id, id_teachers, id_subject, text_a, text_p, grade, add_data, answer_type)
                VALUES (?,?,?,?,?,?,?,?)
                 """;
        return jdbcTemplate.update(sql, studentID, teacersID, subjectID, textA, textP, grade, new java.sql.Date(date.getTime()), type.name());
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
}
