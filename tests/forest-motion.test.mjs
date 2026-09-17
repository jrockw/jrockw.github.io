import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import ts from 'typescript';

const source = readFileSync(new URL('../src/lib/forest-motion.ts', import.meta.url), 'utf8');
const javascript = ts.transpile(source, { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 });
const { getMouseMotion } = await import(`data:text/javascript;base64,${Buffer.from(javascript).toString('base64')}`);

test('mouse stays on its closed route and slows to a stop at each rest', () => {
  for (let step = 0; step <= 7200; step++) {
    const motion = getMouseMotion(step / 100);
    assert(motion.progress >= 0 && motion.progress < 1);
    assert(motion.pace >= 0 && motion.pace <= 1);
    assert(Number.isFinite(motion.laps));
  }
  for (const time of [0, 8, 10, 12, 20, 22, 24]) assert.equal(getMouseMotion(time).pace, 0);
  assert.equal(getMouseMotion(4).pace, 1);
  assert.equal(getMouseMotion(16).pace, 1);
});

test('footsteps and tail phase remain continuous at run, rest, and loop boundaries', () => {
  for (const boundary of [8, 12, 20, 24, 32, 36, 44, 48]) {
    const before = getMouseMotion(boundary - 0.0001);
    const after = getMouseMotion(boundary + 0.0001);
    assert(Math.abs(after.laps - before.laps) < 0.000001);
    assert(Math.abs(after.pace - before.pace) < 0.000001);
    assert(after.laps >= before.laps);
  }
});

test('mouse waits at each resting point and completed laps never jump backwards', () => {
  assert.deepEqual(getMouseMotion(8), getMouseMotion(11.9));
  assert.deepEqual(getMouseMotion(20), getMouseMotion(23.9));
  assert.equal(getMouseMotion(24).laps, 1);
  assert.equal(getMouseMotion(48).laps, 2);
  assert.equal(getMouseMotion(-1).laps, 0);
});
