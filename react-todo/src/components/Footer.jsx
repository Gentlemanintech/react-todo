import React from 'react';
import { Box, Button, TextField } from '@mui/material';

const TodoInput = ({groupName, setGroupName}) => {
    return (
        <Box sx={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: '20px',
            backgroundColor: '#fff',
            boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
            boxSizing: 'border-box'
        }}>
            <TextField
                variant="standard"
                placeholder="What is the Todo for today..."
                sx={{ flexGrow: 1, marginRight: '20px' }}
                value = {groupName}
                onChange={(e) => setGroupName(e.target.value)}
            />
            <Button variant="contained" color="primary">
                Add Group
            </Button>
        </Box>
    );
};

export default TodoInput;
