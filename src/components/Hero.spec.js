/*eslint-disable no-unused-vars */
import React from 'react'
import test from 'ava'
import Hero from './Hero'
import { mount, shallow } from 'enzyme'

test('Hero is <div> tag', (t) => {
  var mediaObject = shallow(<Hero />)
  t.is(mediaObject.type(), 'div')
})

