import {parse} from 'react-native-redash';

export const getPathXCenter = (currentPath: string) => {
  const curves = parse(currentPath).curves;
  const startPoint = curves[0].to;
};
