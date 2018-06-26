import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import Grid from 'src/'

describe('Grid', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays a welcome message', () => {
    render(<Grid user={{name:"arnas"}}/>, node, () => {
      expect(node.innerHTML).toContain("Welcome to Grid")
    })
  })
})
