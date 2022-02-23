import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'

//テストの名前
it('Should render hello text', () => {
  //HOMEコンポーネントを読み込む。
  render(<Home />)
  //コンソールにレンダリング内容が出力される。
  //   screen.debug()

  //HomeコンポーネントにHello Nextjs'があるか確認。
  expect(screen.getByText('Hello Nextjs')).toBeInTheDocument()
})
