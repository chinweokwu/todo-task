import React from 'react'
import {removeTodo} from "./todoSlice";
import { useDispatch } from "react-redux";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const TodoItem = ({text, id}) => {
  const styles = {
    Paper: {
      margin: "auto",
      padding: 10,
      display: "flex",
      alignItems: "center",
      marginTop: 10,
      width: 500
    },
    Icon: {
      marginLeft: "auto"
    }
  }
  const dispatch = useDispatch();
  const removeTodoItem = ()=> {
    dispatch(removeTodo(id))
  }
  return (
    <div>
      <Grid xs={12}>
              <Paper elevation={2} style={styles.Paper} >
        {text.todo}
        <button onClick={removeTodoItem}>Remove</button>
      </Paper>
      </Grid>

    </div>
  )
}

export default TodoItem