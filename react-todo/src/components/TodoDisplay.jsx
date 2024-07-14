import React, { useState } from 'react';
import { Box, TextField, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

const TodoDisplay = ({ groupName }) => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: '0 auto' }}>
      <Typography variant="h5" component="div" gutterBottom>
        {groupName}
      </Typography>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <TextField
          label="New Task"
          variant="outlined"
          size="small"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleAddTask} sx={{ ml: 2 }}>
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default TodoDisplay;
