//Postに渡されるpropsのテスト

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Post from '../components/Post'
import { POST } from '../types/Types'
import 'setimmediate'

describe('Post component with given props', () => {
  let dummyProps: POST
  beforeEach(() => {
    //est と it ごとに beforeEach が実行される。
    dummyProps = {
      userId: 1,
      id: 1,
      title: 'dummy title 1',
      body: 'dummy body 1',
    }
  })
  it('Should render correctly with given props value', () => {
    render(<Post {...dummyProps} />)
    expect(screen.getByText(dummyProps.id)).toBeInTheDocument()
    expect(screen.getByText(dummyProps.title)).toBeInTheDocument()
    //screen.debug()
  })
})

/*
mapで展開されたPostオブジェクト(テストではdummyオプジェクト）がPostコンポーネントにわたっているか確認する。
*/
