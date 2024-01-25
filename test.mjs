import assert from 'node:assert'
import test from 'node:test'
import {lint} from 'browserslist-lint'
import config from '@sanity/browserslist-config'

test('the config lints without warnings', () => {
  const result = lint(config)
  // We only expect 1 warning, about coverage in the `China` regions
  assert.strictEqual(result.length, 1)
  assert.strictEqual(result[0].id, 'countryWasIgnored')
  assert.strictEqual(result[0].message, 'Less than 80% coverage in `China` regions')
})
