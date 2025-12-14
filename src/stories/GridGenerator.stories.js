import GridGenerator from '../components/grid-generator';

export default {
  title: 'Components/GridGenerator',
  component: GridGenerator,
  tags: ['autodocs'],
};

export const InvalidFormat = {
  args: {
    inputString: 'FLOTEST',
  },
};

export const InvalidCoordinate = {
  args: {
    inputString: '5,5 NORTH',
  },
};

export const CenterNorth = {
  args: {
    inputString: '2,2 NORTH',
  },
};

export const TopLeftWest = {
  args: {
    inputString: '0,4 WEST',
  },
};

export const LowerRightSouth = {
  args: {
    inputString: '4,0 SOUTH',
  },
};

export const TopRightEast = {
  args: {
    inputString: '4,4 EAST',
  },
};