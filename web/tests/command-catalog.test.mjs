import assert from "node:assert/strict";
import test from "node:test";
import {
  commands,
  getAllCommands,
  getCommandBySlug,
  getCommandUrl,
  getCommandsByCategory,
} from "../lib/commands-data.js";

test("every public command detail route has a unique, safe slug", () => {
  assert.ok(commands.length > 0);
  const ids = new Set();
  for (const command of commands) {
    assert.match(command.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.equal(ids.has(command.id), false, `Duplicate command id: ${command.id}`);
    ids.add(command.id);
    assert.ok(command.title?.trim(), `Missing title for ${command.id}`);
    assert.ok(command.syntax?.startsWith("/"), `Missing slash syntax for ${command.id}`);
    assert.equal(getCommandUrl(command), `/commands/${command.id}`);
    assert.equal(getCommandBySlug(command.id), command);
  }
  assert.equal(getAllCommands(), commands);
});

test("category pages contain commands from the requested category", () => {
  for (const category of ["Chat", "Private", "Party / Guild", "Emotes", "Display"]) {
    const found = getCommandsByCategory(category);
    assert.ok(found.length, `Expected at least one ${category} command`);
    assert.ok(found.every((command) => command.category === category));
  }
  const utility = getCommandsByCategory("Utility");
  assert.ok(utility.length);
  assert.ok(utility.every((command) => ["Utility", "Display"].includes(command.category)));
});
