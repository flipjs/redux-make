import test from 'ava'
import { makeRequest, makeReducer } from '../src'

test('makeRequest', (t) => {
  t.same(makeRequest(), undefined)
})

test('makeReducer', (t) => {
  t.same(makeReducer(), undefined)
})

