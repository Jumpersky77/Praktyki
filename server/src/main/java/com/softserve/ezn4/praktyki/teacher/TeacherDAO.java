package com.softserve.ezn4.praktyki.teacher;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public class TeacherDAO {
    private final JdbcTemplate jdbcTemplate;

    public TeacherDAO(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    public Optional<TeacherDTO> getTeacher(Long id){
        var sql = """
                SELECT id, first_name, last_name
                FROM teachers
                WHERE id = ?
                """;
        return jdbcTemplate.query(sql, new TeacherMapper(), id)
                .stream()
                .findFirst();
    }

    public int insertTeacher(TeacherDTO teacher){
        var sql = """
                INSERT INTO teachers(first_name, last_name)
                VALUES (?, ?, ?);
                """;
        return jdbcTemplate.update(
                sql,
                teacher.getFirstName(),
                teacher.getLastName()
        );
    }
}
