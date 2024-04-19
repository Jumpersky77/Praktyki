package com.softserve.ezn4.praktyki.subject;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import java.util.Optional;

@Repository
public class SubjectDAO {
    private final JdbcTemplate jdbcTemplate;

    public SubjectDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<SubjectDTO> getAllSubjects() {
        var sql = """
                SELECT id, namesubject
                FROM subject
                 """;
        return jdbcTemplate.query(sql, new SubjectMapper());
    }
}