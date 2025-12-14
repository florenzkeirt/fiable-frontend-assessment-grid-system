export const parseInputString = (input) => {
  if (!input) return null;

  if (input[1] !== ',' || input[3] !== ' ') {
    return { 
      isValid: false, 
      error: "Invalid format. Use 'x,y DIRECTION' (ex. 1,2 NORTH)" 
    };
  }

  const inputX = input[0];
  const inputY = input[2];
  
  let x = null;
  let y = null;
  let isCoordsValid = false;

  switch (inputX) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
      switch (inputY) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
          x = parseInt(inputX, 10);
          y = parseInt(inputY, 10);
          isCoordsValid = true;
          break;
        default:
          isCoordsValid = false;
          break;
      }
      break;
    default:
      isCoordsValid = false;
      break;
  }

  if (!isCoordsValid) {
    return { 
      isValid: false, 
      error: "Coordinates must be between 0 and 4" 
    };
  }

  const inputDirection = input.substring(4);
  const direction = inputDirection.toUpperCase();

  switch (direction) {
    case 'NORTH':
    case 'SOUTH':
    case 'EAST':
    case 'WEST':
      break;
    default:
      return { 
        isValid: false, 
        error: "Direction must be NORTH, SOUTH, EAST, or WEST" 
      };
  }

  return { 
    isValid: true, 
    x, 
    y, 
    direction 
  };
};