import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { parseInputString } from '../utils/input-validator';
import '../App.css';

export default function GridGenerator({ inputString = null }) {
  const data = parseInputString(inputString);
  const isValid = data && data.isValid;

  const rows = [4, 3, 2, 1, 0]; 
  const cols = [0, 1, 2, 3, 4];

  return (
    <Box
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2
      }}
    >

      {data && !data.isValid && (
        <Alert variant="outlined" severity="error">{data.error}</Alert>
      )}

      {data && data.isValid && (
        <Paper sx={{ border: '2px solid black' }}>
          {rows.map((rowY) => (
            <Box className="grid-row">
              {cols.map((colX) => {
                
                const isMatch = isValid && data.x === colX && data.y === rowY;
                
                const directionClass = isMatch 
                  ? data.direction.toLowerCase() 
                  : '';

                return (
                  <Box
                    sx={{
                      width: 100,
                      height: 100,
                      border: '1px solid #e5e5e5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: isMatch ? '#e5e5e5' : '#ffffff',
                    }}
                  >
                    {isMatch && (
                      <ArrowUpwardIcon className={directionClass} />
                    )}
                  </Box>
                );
              })}
            </Box>
          ))}
        </Paper>
      )}
    </Box>
  );
}

GridGenerator.propTypes = {
  inputString: PropTypes.string
};