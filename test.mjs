import assert from 'node:assert'
import test from 'node:test'
import {lint} from 'browserslist-lint'
import config from '@sanity/browserslist-config'

test('the config lints without warnings', () => {
  const result = lint(config)
  assert.deepEqual(
    result.filter((item) => !item.message.includes('China')),
    [],
  )
})
