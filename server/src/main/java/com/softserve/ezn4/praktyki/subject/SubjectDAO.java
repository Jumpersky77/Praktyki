package com.softserve.ezn4.praktyki.subject;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class SubjectDAO {
    private final JdbcTemplate jdbcTemplate;

    public SubjectDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Optional<SubjectDTO> getSubject(Long id) {
        var sql = """
                SELECT id, namesubject
                FROM subject
                WHERE id = ?
                 """;
        return jdbcTemplate.query(sql, new SubjectMapper(), id)
                .stream()
                .findFirst();
    }

    public int insertSubject(SubjectDTO subject) {
        var sql = """
                INSERT INTO subject(namesubject)
                VALUES (?, ?);
                 """;
        return jdbcTemplate.update(
                sql,
                subject.getName()
        );
    }
}
