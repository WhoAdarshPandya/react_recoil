import React from "react";

import DisplayTodo from './components/DisplayTodo'
import {
  createMuiTheme,
  MuiThemeProvider,
  Typography,
} from "@material-ui/core";
import InputTodo from "./components/InputTodo";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00796b",
    },
    secondary: {
      main: "#00796b",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Typography align="center" style={{marginTop:'15px'}} variant="h4" color="primary" gutterBottom>
          To Do List{" "}
        </Typography>{" "}
        <div
          style={{
            width: "50%",
            margin: "0 auto",
          }}
        >
          <InputTodo />
          <DisplayTodo/>
        </div>{" "}
      </div>{" "}
    </MuiThemeProvider>
  );
}

export default App;
