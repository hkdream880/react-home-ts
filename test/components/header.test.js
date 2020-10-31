import React from 'react'
import ReactDOM from 'react-dom'
import Header from '@/components/header'


import { render, cleanup } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

import renderer from 'react-test-renderer'

// it('render without crashing', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<Header />, div)
// })

afterEach(cleanup)
it('헤더가 있는가?', () => {
  const { getByTestId } = render(<Header />)
  expect(getByTestId('header')).toBeDefined()
})

it('스냅샷 테스트', () => {
  const snap_tree = renderer.create(<Header />).toJSON()
  expect(snap_tree).toMatchSnapshot();
})