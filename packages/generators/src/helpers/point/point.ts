import { cmToPt } from '../units';

export const point = (x: number, y: number, applyFix = true) => ({
  x: x + cmToPt(applyFix ? -1.2 : 0),
  y: y + cmToPt(applyFix ? -0.25 : 0),
});
