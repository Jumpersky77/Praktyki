package com.softserve.ezn4.praktyki.subject;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SubjectDAO {
    private final JdbcTemplate jdbcTemplate;

    public SubjectDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<SubjectDTO> findAll() {
        var sql = """
                SELECT id, namesubject
                FROM SUBJECT
                 """;
        return jdbcTemplate.query(sql, new SubjectMapper());
    }
}
