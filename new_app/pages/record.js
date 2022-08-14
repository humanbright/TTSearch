import * as React from "react";
import { render } from "react-dom";
import useRecorder from "./useRecorder";
import { Box, Grid, Button, Container, Stack } from "@mui/material";

import "../styles/Home.module.css";

export default function App() {
  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
  return (
    <>
      <Box component="section">
        <main>
          <Container
            maxWidth="xl"
            justifyContent="center"
            sx={{ textAlign: "center", paddingTop: "5%" }}
          >
            <audio src={audioURL} controls />
            <Grid container spacing={12}>
              <Grid item xs={6}>
                <Button onClick={startRecording} disabled={isRecording}>
                  Start Recording
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button onClick={stopRecording} disabled={!isRecording}>
                  Stop Recording
                </Button>
              </Grid>
            </Grid>
          </Container>
        </main>
      </Box>
    </>
  );
}
