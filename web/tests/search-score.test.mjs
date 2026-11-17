import assert from 'node:assert/strict';
import test from 'node:test';
import { scoreSearch } from '../lib/search-score.mjs';

test('global search includes command usage examples', () => {
  const command = {
    title: 'Private Message', syntax: '/tell <player>, <message>',
    description: 'Send a private message.', category: 'Private',
    aliases: ['/w'], example: '/tell Character@Handle, hello',
  };
  assert.ok(scoreSearch(command, 'character@handle') > 0);
  assert.equal(scoreSearch(command, 'absent phrase'), 0);
});

test('search still ranks exact titles and aliases', () => {
  const item = { title: 'Guild Chat', syntax: '/g', aliases: ['/guild'] };
  assert.ok(scoreSearch(item, 'Guild Chat') > scoreSearch(item, 'guild'));
  assert.ok(scoreSearch(item, '/guild') > 0);
});
