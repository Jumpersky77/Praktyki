package com.softserve.ezn4.praktyki.answers;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Objects;

public interface WritePhotosService {

    default Path writePhoto(Long answerID, MultipartFile photo, int fileIndex) {
        try {
            var directory = createAnswerDirectory(answerID);
            var photoPath = directory.resolve(photo.getOriginalFilename() + Objects.toString(fileIndex));
            Files.copy(photo.getInputStream(), photoPath);
            return photoPath;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
    Path getRootPath();

    Path createAnswerDirectory(Long answerID) throws IOException;

    void init();
}
