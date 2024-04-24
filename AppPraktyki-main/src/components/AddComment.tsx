import React, { useState } from 'react';
import {
    Button,
    Container,
    TextField,
  } from "@mui/material";
  import "../style/styleR.css";

const AddComments = () => {
    return (
            <div id="Dodaj_Komentarz">
               <Container maxWidth="xs">
                   <TextField
                        name="Dodaj Komentarz"
                        required
                        fullWidth
                        label="Dodaj Komentarz"
                        autoFocus
                        id='AddComment_TextField'
                            />
                    <Button
                    variant="contained"
                    id='AddComment_Button'
                    >
                    Opublikuj
                    </Button>
                </Container>

                
            </div>

            
    )
}

export default AddComments;