package com.softserve.ezn4.praktyki.comment;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/comment")
public class CommentController {
    private final CommentDAO commentRepository;

    public CommentController(CommentDAO commentRepository){
        this.commentRepository = commentRepository;
    }

    @GetMapping(value = {"/{id}"}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public Optional<CommentDTO> getComment(@PathVariable Long id){
        return  commentRepository.getComment(id);
    }
}
