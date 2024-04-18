package com.softserve.ezn4.praktyki.teacher;

import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class TeacherMapper implements RowMapper<TeacherDTO> {
    @Override
    public TeacherDTO mapRow(ResultSet resultSet, int i) throws SQLException{
        var teacher = new TeacherDTO();
        teacher.setId(resultSet.getLong("id"));
        teacher.setFirstName(resultSet.getString("first_name"));
        teacher.setLastName(resultSet.getString("last_name"));
        return teacher;
    }
}