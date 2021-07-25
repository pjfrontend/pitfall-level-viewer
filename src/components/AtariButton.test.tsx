import {render, fireEvent} from '@testing-library/react';
import {AtariButtonProps, AtariButton} from './AtariButton';

const setup = (props?: AtariButtonProps) => {
  const utils = render(<AtariButton {...props} />);
  const btn = utils.getByTestId('btn');
  const label = utils.getByTestId('txt');
  return {
    btn,
    label,
    ...utils,
  };
};

describe('AtariButton', () => {
  it('renders correctly', () => {
    const wrapper = <AtariButton label="button" />;
    expect(wrapper).toMatchSnapshot();
  });

  it('returns the correct label', () => {
    const labelTXT = 'Right';
    const {label} = setup({label: labelTXT});
    expect(label.innerHTML).toBe(labelTXT);
  });

  it('fires when clicked', () => {
    const props: AtariButtonProps = {label: 'OK', onClick: jest.fn()};
    const {btn} = setup(props);
    expect(props.onClick).toBeCalledTimes(0);
    fireEvent.click(btn);
    expect(props.onClick).toBeCalledTimes(1);
  });
});
