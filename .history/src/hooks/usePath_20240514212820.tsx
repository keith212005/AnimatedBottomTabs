import {useMemo} from 'react';
import {curveBasis, line} from 'd3-shape';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SCREEN_WIDTH} from '../constants/Screen';
import {parse} from 'react-native-redash';

type GenerateTabShapePath = (
  position: number,
  adjustedHeight: number,
) => string;

const NUM_TABS = 4;
const SCALE = 0.7;
const TAB_BAR_HEIGHT = 64;

const generateTabShapePath: GenerateTabShapePath = (
  position,
  adjustedHeight,
) => {
  const adjustedWidth = SCREEN_WIDTH / NUM_TABS;
  const tabX = adjustedWidth * position;

  const lineGenerator = line().curve(curveBasis);
  const tab = lineGenerator([
    [tabX - 100 * SCALE, 0],
    [tabX - (65 + 35) * SCALE, 0],
    [tabX - (50 - 10) * SCALE, -6 * SCALE],
    [tabX - (50 - 15) * SCALE, (adjustedHeight - 14) * SCALE],
    [tabX + (50 - 15) * SCALE, (adjustedHeight - 14) * SCALE],
    [tabX + (50 - 10) * SCALE, -6 * SCALE],
  ]);
};
