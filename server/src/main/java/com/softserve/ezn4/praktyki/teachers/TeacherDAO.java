package com.softserve.ezn4.praktyki.teachers;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TeacherDAO {

    private final JdbcTemplate jdbcTemplate;

    public TeacherDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<TeacherDTO> findAllBySubjectID(Long subjectID) {
        var sql = """
                SELECT teachers.id, teachers.first_name, teachers.last_name
                FROM teachers_subject
                INNER JOIN teachers ON teachers_subject.id_teachers = teachers.id
                WHERE teachers_subject.id_subject = ?
                 """;
        return jdbcTemplate.query(sql, new TeacherMapper(), subjectID);
    }
}
