import { UNITS } from '../consts';
import { point } from './point';

export const cmPoint = (x: number, y: number, applyFix = true) =>
  point(x * UNITS.PT.FROM.CM, y * UNITS.PT.FROM.CM, applyFix);
