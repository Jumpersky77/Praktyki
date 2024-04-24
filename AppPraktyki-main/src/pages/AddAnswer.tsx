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
import AnswerServ from "../service/AnswerServ";
import { Url } from "url";
import { blob } from "stream/consumers";
const AddAnswer = () => {

  const location = useLocation();
  const { teacher, subject } = location.state as SubjectTeacher;

  const navigation = useAppNavigation();
  
  const [Answer, setAnswer]=useState({
    studentID: 1,
    teacherID: teacher.id,
    subjectID: subject.id,
    answerQuestion: "",
    answerResponse: "",
    type:"",
  });

  const handleChange = (e:any) => {
    const value = e.target.value;
    setAnswer({ ...Answer, [e.target.name]: value })
  };
  const handleAddAnswer = async (e:any) => {
    e.preventDefault();
    const [blob] = previewImages.map((img)=>fetch(img).then((res)=>res.blob()));
    const data = new FormData();
    data.append("img", await blob);
    Object.entries(Answer).forEach((entry)=>{
      data.append(entry[0], entry[1] as string);
    });
    console.log(Object.fromEntries(data.entries()));
    AnswerServ.saveAnswer(data)
        .then((res) => {
            setAnswer({
              studentID: 1,
              teacherID: teacher.id,
              subjectID: subject.id,
              answerQuestion: "",
              answerResponse: "",
              type:"",
            })
        }).catch((error) => {
            console.log(error);
        });
  }
  
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
                    name="answerQuestion"
                    required
                    fullWidth
                    id="title"
                    label="Tytuł"
                    autoFocus
                    onChange={(e) => handleChange(e)}
                    value={Answer.answerQuestion}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="answerResponse"
                    id="outlined-multiline-flexible"
                    label="Tu możesz wpisać odpowiedzi"
                    multiline
                    fullWidth
                    onChange={(e) => handleChange(e)}
                    value={Answer.answerResponse}
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
                      defaultValue="unchecked"
                      onChange={(e)=>handleChange(e)}
                    >
                      <FormControlLabel
                        value="SPRAWDZIAN"
                        control={<Radio />}
                        label="Sprawdzian"
                      />
                      <FormControlLabel
                        value="KARTKÓWKA"
                        control={<Radio />}
                        label="Kartkówka"
                      />
                      <FormControlLabel
                        value="INNE"
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