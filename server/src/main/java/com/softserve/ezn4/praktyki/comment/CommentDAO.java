package com.softserve.ezn4.praktyki.comment;

import com.softserve.ezn4.praktyki.teacher.TeacherDTO;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public class CommentDAO {
    private final JdbcTemplate jdbcTemplate;

    public  CommentDAO(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    public Optional<CommentDTO> getComment(Long id){
        var sql = """
                SELECT id, id_student, id_answer, comment_text
                FROM Comments
                WHERE id = ?
                """;
        return jdbcTemplate.query(sql, new CommentMapper(), id)
                .stream()
                .findFirst();
    }

    public int insertComment(CommentDTO comment){
        var sql = """
                INSERT INTO comments(id_student, id_answer, comment_text)
                VALUES (?, ?, ?, ?);
                """;
        return jdbcTemplate.update(
                sql,
                comment.getStudentId(),
                comment.getAnswerId(),
                comment.getCommentText()
        );
    }
}
