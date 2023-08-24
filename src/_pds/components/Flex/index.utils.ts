import { PaddingDirections } from './index.types';

export const getPaddingDirections = (
  direction: PaddingDirections,
): [number, number, number, number] => {
  if (typeof direction === 'object') {
    if ('x' in direction || 'y' in direction) {
      return [
        direction.y ?? 0,
        direction.x ?? 0,
        direction.y ?? 0,
        direction.x ?? 0,
      ];
    }

    if (
      'top' in direction ||
      'right' in direction ||
      'bottom' in direction ||
      'left' in direction
    ) {
      return [
        direction.top ?? 0,
        direction.right ?? 0,
        direction.bottom ?? 0,
        direction.left ?? 0,
      ];
    }

    return [0, 0, 0, 0];
  }

  return [direction, direction, direction, direction];
};
