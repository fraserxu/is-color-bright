const test = require('tape')
const isColorBright = require('.')

test('is color bright function', function (assert) {
  const input = isColorBright('rgb(255, 255, 255)')
  const input1 = isColorBright('rgb(0, 0, 0)')
  const output = true
  const output1 = false

  assert.equal(input, output, 'should check if it is bright')
  assert.equal(input1, output1, 'should be true')

  assert.end()
})
