package com.softserve.ezn4.praktyki.grades;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class GradeDAO {
    private final JdbcTemplate jdbcTemplate;

    public GradeDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void addGrade(Long studentID, Long answerID, byte grade) {
        var sql = """
                INSERT INTO grades
                (id_student, id_answer, grade)
                VALUES (?,?,?)
                 """;
        jdbcTemplate.update(sql, studentID, answerID, grade);
    }

    public double countAvgGrade(Long answerID) {
        var sql = """
            SELECT AVG(grade) AS average_grade
            FROM grades
            WHERE id_answer = ?
             """;
        return jdbcTemplate.queryForObject(sql, new Object[]{answerID}, Double.class);
    }

    public void updateAvgGrade(Long answerID, double grade){
        var sql = """
            UPDATE answers
            SET grade = ?
            WHERE id = ?
             """;
        jdbcTemplate.update(sql, grade, answerID);
    }

    public boolean hasExistingGrade(Long studentID, Long answerID) {
        try {
            var sql = """
            SELECT COUNT(*)
            FROM grades
            WHERE id_student = ?
            AND id_answer = ?
            """;
            int count = jdbcTemplate.queryForObject(sql, new Object[]{studentID, answerID}, Integer.class);
            return count > 0;
        } catch (EmptyResultDataAccessException e) {
            return false;
        }
    }

    public void updateGrade(Long answerID, Long studentID, double grade){
        var sql = """
            UPDATE grades
            SET grade = ?
            WHERE id_answer = ?
            AND id_student = ?
             """;
        jdbcTemplate.update(sql, grade, answerID, studentID);
    }
}
