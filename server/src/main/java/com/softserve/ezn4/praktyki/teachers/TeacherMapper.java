package com.softserve.ezn4.praktyki.teachers;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class TeacherMapper implements RowMapper<TeacherDTO> {
    @Override
    public TeacherDTO mapRow(ResultSet resultSet, int i) throws SQLException {
        var teacherDTO = new TeacherDTO(resultSet.getLong(TeacherDTO.ID), resultSet.getString(TeacherDTO.FIRST_NAME), resultSet.getString(TeacherDTO.LAST_NAME));
        return teacherDTO;
    }
}