import React, { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import { Todos } from "../data/Atoms";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

export default function DisplayTodo() {
  const [todos, setTodos] = useRecoilState(Todos);
  
  const deleteTodo = (todo_id) => {
    let new_todo = todos.filter((todo) => {
      return todo.id !== todo_id;
    });
    setTodos((oldTodo) => new_todo);
  };

  const checkTodo = (todo_id,compl) => {
    let new_obj = {};
   let new_todo = todos.filter((todo) => {
     if(todo.id !== todo_id)
     {
        return todo;
     }else{
      new_obj = todo
     }
    });
    if(!new_obj.completed)
    {
      setTodos(prevTodo => [{todo_title:new_obj.todo_title,id:new_obj.id,completed:!new_obj.completed,date:new_obj.date},...new_todo])
    }
    else{
      setTodos(prevTodo => [...new_todo,{todo_title:new_obj.todo_title,id:new_obj.id,completed:!new_obj.completed,date:new_obj.date}])
    }
  }
  
  return (
    <div style={{ width: "100%" }}>
      <List className="" style={{ width: "100%", margin: "0 auto" }}>
        {todos.map((item) => (
          <Grow in={true}>
            <Paper style={{ marginTop: "15px" }}>
              <ListItem style={item.completed?{background:'#dfe6e9'}:null} key={item.id} button>
                <ListItemIcon>
                  <Checkbox onChange={() => {checkTodo(item.id,item.completed)}} edge="start" checked={item.completed} />
                </ListItemIcon>
                <ListItemText primary={item.todo_title} secondary={"Added On : " + item.date}/>
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    onClick={() => {
                      deleteTodo(item.id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </Paper>
          </Grow>
        ))}
      </List>
    </div>
  );
}
