import React, { useState } from "react";
import {
  createMuiTheme,
  MuiThemeProvider,
  TextField,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Todos } from "../data/Atoms";
import { useRecoilState } from "recoil";
import { v4 as uuid } from "uuid";

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

export default function InputTodo() {
  const [todos, settodos] = useRecoilState(Todos);
  const [todoText, settodoText] = useState("");
  const addButton = () => {
    let newObj = {
      todo_title: todoText,
      completed: false,
      id: uuid(),
      date:
        new Date().getFullYear() +
        "/" +
        (new Date().getMonth + 1) +
        "/" +
        new Date().getDate(),
    };
    let new_todos = [...todos, newObj];
    settodos((todo) => new_todos);
    settodoText("");
  };
  const changeText = (e) => {
    settodoText(e.target.value);
  };
  const keyP = (e) => {
    if (e.key === "Enter") {
      let newObj = {
        todo_title: todoText,
        completed: false,
        id: uuid(),
        date:
          new Date().getFullYear() +
          "/" +
          (parseInt(new Date().getMonth()) + 1) +
          "/" +
          new Date().getDate(),
      };
      let new_todos = [...todos, newObj];
      settodos((todo) => new_todos);
      settodoText("");
    }
  };
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <TextField
          style={{ width: "100%" }}
          id="input-with-icon-textfield"
          label="Add To do"
          onChange={changeText}
          onKeyPressCapture={keyP}
          value={todoText}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={addButton}>
                  <AddCircleOutlineIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
    </MuiThemeProvider>
  );
}
