/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

const plugin = require('../lib');

describe('<%= name %>', () => {
  test('basic functionality', () => {
    expect(typeof plugin).toBe('function');
    expect(plugin()).toBe('<%= name %>');
  });
});
