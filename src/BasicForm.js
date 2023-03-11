import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import {addTodo} from './todoSlice';
const BasicForm = () => {
  const dispatch = useDispatch()
  return(
  <div>
    <h1>TODO</h1>
    <Formik
      initialValues={{
        todo: '',
      }}
      onSubmit={(values, {resetForm}) => {
        console.log(values);
        dispatch(addTodo(values));
        resetForm({values:""});
      }}
    >
      <Form>
        <label htmlFor="todo">Add ToDo </label>
        <Field id="todo" name="todo" placeholder="TextHere" />
        <Button 
        type="submit"
        variant="contained"
        color="primary"
        style={{ width: "10%" }}
        >Submit</Button>
      </Form>
    </Formik>
  </div>
  )
};

export default BasicForm
