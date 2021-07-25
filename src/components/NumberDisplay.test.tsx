import {render} from '@testing-library/react';
import {NumberDisplayProps, NumberDisplay} from './NumberDisplay';
import {SCREEN_DATA_001} from '../helpers/constants';

const setup = (props?: NumberDisplayProps) => {
  const utils = render(<NumberDisplay {...props} />);
  const screen = utils.getByTestId('scr');
  const dec = utils.getByTestId('dec');
  const hex = utils.getByTestId('hex');
  const bin = utils.getByTestId('bin');
  return {
    screen,
    dec,
    hex,
    bin,
    ...utils,
  };
};

describe('NumberDisplay', () => {
  it('renders correctly', () => {
    const wrapper = <NumberDisplay screenIndex={1} />;
    expect(wrapper).toMatchSnapshot();
  });

  it('returns the correct text for the screen', () => {
    const {screen, dec, hex, bin} = setup({screenIndex: 1});
    expect(screen.innerHTML).toBe('Screen Number: 001');
    expect(dec.innerHTML).toBe('Decimal: 196');
    expect(hex.innerHTML).toBe('Hexadecimal: C4');
    expect(bin.innerHTML).toBe('Binary: 11000100');
  });
});
