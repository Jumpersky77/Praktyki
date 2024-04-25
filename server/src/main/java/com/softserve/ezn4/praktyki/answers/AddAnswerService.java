package com.softserve.ezn4.praktyki.answers;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;


@Service
public class AddAnswerService {
    private final AnswerDAO answerDAO;
    private final WritePhotosService photosService;

    public AddAnswerService(AnswerDAO answerDAO, WritePhotosService photosService) {
        this.answerDAO = answerDAO;
        this.photosService = photosService;
    }

    @PostConstruct
    private void postConstruct() {
        photosService.init();
    }

    @Transactional
    public void addAnswer(AnswerInboundDTO answerInbound) {
        var id = answerDAO.insertAnswer(
                answerInbound.studentID(),
                answerInbound.teacherID(),
                answerInbound.subjectID(),
                answerInbound.answerQuestion(),
                answerInbound.answerResponse(),
                answerInbound.grade(),
                new Date(),
                answerInbound.type()
        );
        List<MultipartFile> photos = Objects.isNull(answerInbound.photos()) ? List.of() : answerInbound.photos();
        for (Path path : tryWritePhotos(id, photos)) {
            answerDAO.insertPhoto(id, path.toString());
        }
    }

    public void addComment(CommentInboundDTO commentInbound) {
        answerDAO.insertComment(
                commentInbound.studentID(),
                commentInbound.answerID(),
                commentInbound.comment()
        );
    }

    private List<Path> tryWritePhotos(Long answerID, List<MultipartFile> photos) {
        int fileIndex = 0;
        List<Path> paths = new ArrayList<>(photos.size());
        for (MultipartFile photo : photos) {
            try {
                var path = photosService.writePhoto(answerID, photo, fileIndex);
                paths.add(path);
                fileIndex++;
            } catch (Exception e) {
                throw new RuntimeException(e.getMessage());
            }
        }
        return paths;
    }
}
