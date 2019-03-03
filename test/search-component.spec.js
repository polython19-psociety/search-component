/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../search-component.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<search-component></search-component>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
