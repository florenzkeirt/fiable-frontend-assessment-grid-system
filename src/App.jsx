import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import GridGenerator from './components/grid-generator';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState(null);
  const [inputString, setInputString] = useState(null);

  const handleGenerate = () => {
    setInputString(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleGenerate();
    }
  };

  return (
    <Box
      sx={{
        px: 4,
        py: 5,
        borderRadius: 2,
        bgcolor: 'white',
        display: 'grid',
        gap: 2,
        maxWidth: '500px',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Grid Object Generator
      </Typography>
      
      <TextField
        required
        focused
        id="inputString"
        label="Input String"
        placeholder="x,y DIRECTION"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      
      <Button 
        variant="contained" 
        disableElevation 
        fullWidth 
        size="large"
        onClick={handleGenerate}
      >
        GENERATE
      </Button>
      <GridGenerator inputString={inputString} />
    </Box>
  );
}

export default App;