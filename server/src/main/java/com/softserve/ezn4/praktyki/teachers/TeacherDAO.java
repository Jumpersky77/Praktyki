package com.softserve.ezn4.praktyki.teachers;

import com.softserve.ezn4.praktyki.subject.SubjectMapper;
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
                SELECT id, namesubject
                FROM SUBJECT
                 """;
        return List.of();
    }

        public List<TeacherDTO> findAll() {
        var sql = """
                SELECT id, namesubject
                FROM SUBJECT
                 """;
        return jdbcTemplate.query(sql, new TeacherMapper());
    }


}
