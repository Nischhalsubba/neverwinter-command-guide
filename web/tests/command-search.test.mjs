import assert from 'node:assert/strict';
import test from 'node:test';
import { matchesCommandSearch } from '../lib/command-search.mjs';

const command = {
  syntax: '/who', title: 'Who List', description: 'View character information.',
  category: 'Utility', example: '/who', aliases: [],
  note: 'Undocumented', noteText: 'Public descriptions are often incomplete.',
};

test('command directory can find note-only terms', () => {
  assert.equal(matchesCommandSearch(command, 'UNDOCUMENTED'), true);
  assert.equal(matchesCommandSearch(command, 'incomplete'), true);
  assert.equal(matchesCommandSearch(command, 'not-present'), false);
});

test('command directory still searches syntax and tolerates blank queries', () => {
  assert.equal(matchesCommandSearch(command, ' /who '), true);
  assert.equal(matchesCommandSearch(command, '   '), true);
});
