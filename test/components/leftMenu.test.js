import React from 'react'
import ReactDOM from 'react-dom'
import LeftMenu from '@/components/leftMenu'


import { render, cleanup } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

import renderer from 'react-test-renderer'

// it('render without crashing', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<Header />, div)
// })


afterEach(cleanup)

describe('네비 메뉴 테스트 입니다.',() => {
  it('네비 메뉴가 있는가?', () => {
    const { getByTestId } = render(<LeftMenu />)
    expect(getByTestId('leftMenu')).toBeDefined()
  })
  
  it('스냅샷 테스트', () => {
    const snap_tree = renderer.create(<LeftMenu />).toJSON()
    expect(snap_tree).toMatchSnapshot();
  })
})