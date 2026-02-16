export function getNextCycle(currentCycle: number) {
  return currentCycle === 0 || currentCycle === 8 ? 0 : currentCycle + 1;
}
