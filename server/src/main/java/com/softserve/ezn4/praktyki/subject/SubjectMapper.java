package com.softserve.ezn4.praktyki.subject;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class SubjectMapper implements RowMapper<SubjectDTO> {
    @Override
    public SubjectDTO mapRow(ResultSet resultSet, int i) throws SQLException {
        var subject =  new SubjectDTO();
        subject.setId(resultSet.getLong("id"));
        subject.setName(resultSet.getString("namesubject"));
        return subject;
    }
}