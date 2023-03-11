import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import {Link} from 'react-router-dom';
import AccountMenu from './AccountMenu.js';
import BasicForm from './BasicForm';
import {useSelector} from 'react-redux';
import TodoItem from './todoItem';

export default function App() {
	const [openForm, setOpenForm] = React.useState(false);
	const count = useSelector(state => state.todo.count);
	const todos = useSelector(state => state.todo.todos);

	const handleOnClick = (page) => {
		console.log('open');
		if(!openForm) { 
			setOpenForm(true)
		} else {
			setOpenForm(false)
		}
	};
  return (
    <Container maxWidth="sm">
	<AccountMenu onClick={handleOnClick} />
	{openForm && <BasicForm />}
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          React Skills test
        </Typography>
      </Box>
			<Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {count > 0 && todos.map(todo => (
						<TodoItem
							key={todo.id}
							id={todo.id}
							text={todo.text}
						/>
					))}
					{count === 0 && <p>No Todo Please create one</p>}
        </Typography>
      </Box>
    </Container>
  );
}
