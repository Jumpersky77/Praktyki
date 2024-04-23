import Header from "../components/Header";
import React from "react";
import { UserName } from "../App";
import { useContext, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useAppNavigation } from "../router/router";
import { SubjectTeacher } from "../model/subject-teacher";
const AddAnswer = () => {

  
  
  
  
  
  
  const [Answer, setAnswer]=useState({
    studentID: null,
    teacherID: null,
    subjectID: null,
    type:"",
    answerQuestion: "", //title
    answerResponse: "", 
    Data: new Date, 
  });

  const handleChange = (e:any) => {
    const value = e.target.value;
    setAnswer({ ...Answer, [e.target.name]: value })
}

  const location = useLocation();
  const { teacher, subject } = location.state as SubjectTeacher;

  const navigation = useAppNavigation();

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const imageFiles = Array.from(files).filter((file) =>
        file.type.startsWith("image")
      );
      const imageUrls = imageFiles.map((file) => URL.createObjectURL(file));
      setPreviewImages((prevImages) => [...prevImages, ...imageUrls]);
    }
  };

  // const [type, setType] = useState("");

  // const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setType((event.target as HTMLInputElement).value);
  // };

  console.log(Answer)

  const handleAddAnswer = async () => {};

  return (
    <>
      <div>
        <Container maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              mt: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">Przedmiot: {subject.name}</Typography>
            <Typography variant="h5">
              Nauczyciel: {teacher.firstName + "" + teacher.lastName}
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="title"
                    required
                    fullWidth
                    id="title"
                    label="Tytuł"
                    autoFocus
                    value={Answer.answerQuestion}
                    onChange={(e) => handleChange(e)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Tu możesz wpisać odpowiedzi"
                    multiline
                    fullWidth
                    value={Answer.answerResponse}
                    onChange={(e) => handleChange(e)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    fullWidth
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                  >
                    Dodaj zdjęcia
                    <VisuallyHiddenInput
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFileChange}
                    />
                  </Button>
                  {previewImages.map((imageUrl, index) => (
                    <img
                      key={index}
                      src={imageUrl}
                      alt={`Preview ${index}`}
                      style={{
                        maxWidth: "100%",
                        marginTop: "10px",
                        display: "block",
                      }}
                    />
                  ))}
                </Grid>
                <Grid item xs={12}>
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Typ odpowiedzi
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="type"
                      onChange={(e)=>handleChange(e)}
                    >
                      <FormControlLabel
                        value="sprawdzian"
                        control={<Radio />}
                        label="Sprawdzian"
                      />
                      <FormControlLabel
                        value="kartkówka"
                        control={<Radio />}
                        label="Kartkówka"
                      />
                      <FormControlLabel
                        value="inne"
                        control={<Radio />}
                        label="Inne"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleAddAnswer}
              >
                Dodaj odpowiedź
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    to={navigation.getAnswerPageLink(subject, teacher)}
                    state={location.state}
                  >
                    Wróć do listy odpowiedzi
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};
export default AddAnswer;
