export const HISTORY = [];

export function logMint(entry) {
  HISTORY.push({ time: Date.now(), entry });
}
