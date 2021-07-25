import {render} from '@testing-library/react';
import {StageDataPanelProps, StageDataPanel} from './StageDataPanel';
import {SCREEN_DATA_001} from '../helpers/constants';

const setup = (props?: StageDataPanelProps) => {
  const utils = render(<StageDataPanel {...props} />);
  const pitType = utils.getByTestId('pit-type');
  const pathObj = utils.getByTestId('path-obj');
  const underworld = utils.getByTestId('underworld');
  const isVine = utils.getByTestId('is-vine');
  const treePattern = utils.getByTestId('tree-pat');
  return {
    pitType,
    pathObj,
    underworld,
    isVine,
    treePattern,
    ...utils,
  };
};

describe('StageDataPanel', () => {
  it('renders correctly', () => {
    const wrapper = <StageDataPanel stageData={SCREEN_DATA_001} />;
    expect(wrapper).toMatchSnapshot();
  });

  it('returns the correct text for the screen', () => {
    const {pitType, pathObj, underworld, isVine, treePattern} = setup({
      stageData: SCREEN_DATA_001,
    });
    expect(pitType.innerHTML).toBe('Pit Type: Hole with ladder');
    expect(pathObj.innerHTML).toBe('Path Objects: 1 stationary log');
    expect(underworld.innerHTML).toBe('Underworld: Wall on the right');
    expect(isVine.innerHTML).toBe('Is there a vine: false');
    expect(treePattern.innerHTML).toBe('Tree Pattern: 3');
  });
});
