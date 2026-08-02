import assert from "node:assert/strict";
import {
  splitSupplementTime,
  supplementHourOptions,
  supplementMinuteOptions,
  updateSupplementTimePart
} from "../src/domains/supplements/supplementTimeInputModel.js";

assert.equal(supplementHourOptions.length, 24);
assert.deepEqual(supplementHourOptions.slice(0, 2), ["00", "01"]);
assert.deepEqual(supplementMinuteOptions.slice(0, 3), ["00", "05", "10"]);
assert.deepEqual(splitSupplementTime(""), { hour: "", minute: "00" });
assert.deepEqual(splitSupplementTime("14:35:00"), { hour: "14", minute: "35" });
assert.equal(updateSupplementTimePart("", "hour", "09"), "09:00");
assert.equal(updateSupplementTimePart("09:35", "hour", "10"), "10:35");
assert.equal(updateSupplementTimePart("09:00", "minute", "25"), "09:25");
assert.equal(updateSupplementTimePart("", "minute", "25"), "");

console.log("supplement time input model fixture passed");
