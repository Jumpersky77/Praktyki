package com.softserve.ezn4.praktyki.answers;

import org.springframework.stereotype.Service;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Objects;

@Service
public class LocalSystemWritePhoto implements WritePhotosService {
    private final Path rootPath = Path.of("/photos");
    @Override
    public Path getRootPath() {
        return rootPath;
    }

    @Override
    public Path createAnswerDirectory(Long answerID) throws IOException {
        var path = getRootPath().resolve(Objects.toString(answerID));
        if (Files.exists(path)) {
            return path;
        }
        return Files.createDirectory(getRootPath().resolve(Objects.toString(answerID)));
    }
    @Override
    public void init() {
        if (Files.exists(rootPath)) return;
        try {
            Files.createDirectory(getRootPath());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
