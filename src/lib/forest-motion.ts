/** A continuous two-run loop with four-second rests at each end. */
export function getMouseMotion(time: number) {
  const elapsed = Math.max(0, time);
  const phase = elapsed % 24;
  const leg = phase % 12;
  const t = Math.min(leg / 8, 1);
  const eased = t * t * t * (t * (t * 6 - 15) + 10);
  const progress = (phase < 12 ? 0 : 0.5) + eased * 0.5;

  return {
    progress: progress % 1,
    // Never wraps: footsteps and tail motion remain continuous between laps.
    laps: Math.floor(elapsed / 24) + progress,
    pace: 16 * t * t * (1 - t) * (1 - t)
  };
}
