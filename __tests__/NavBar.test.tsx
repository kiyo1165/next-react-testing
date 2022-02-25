import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
//ユーザーのクリックイベント用
import userEvent from '@testing-library/user-event'
//ページ遷移のテスト。
import { getPage } from 'next-page-tester'
//初期化
import { initTestHelpers } from 'next-page-tester'

initTestHelpers()

describe('Navigation by link', () => {
  //page-testerの場合はasyncにする。
  it('Should route to selected page in navbar', async () => {
    // 取得したいページをrouteで指定してpageへ格納
    const { page } = await getPage({
      route: '/index',
    })
    //renderで取得したページルートのデータを取得
    render(page)

    //ナビバーのblogのリンクに指定されたプロパティを指定しクリックをシミュレーションする。
    userEvent.click(screen.getByTestId('blog-nav'))
    //expectで実行結果を評価: Blog Pageがドキュメントの中にあるか探す。
    expect(await screen.findByText('Blog Page')).toBeInTheDocument()
    // screen.debug()

    //コメントリンク
    userEvent.click(screen.getByTestId('comment-nav'))
    expect(await screen.findByText('CommentPage')).toBeInTheDocument()

    //コンテキストリンク
    userEvent.click(screen.getByTestId('context-nav'))
    expect(await screen.findByText('Context Page')).toBeInTheDocument()

    //タスクリンク
    userEvent.click(screen.getByTestId('task-nav'))
    expect(await screen.findByText('TodosPage')).toBeInTheDocument()

    //homeリンク
    userEvent.click(screen.getByTestId('home-nav'))
    expect(await screen.findByText('Welcome to Next JS')).toBeInTheDocument()
  })
})
