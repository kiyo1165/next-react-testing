import React, { useContext, useState, createContext } from 'react'

/*
createContextの型付け
https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/#extended-example
*/
const StateContext = createContext(
  {} as {
    toggle: boolean
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
  }
)

//childrenにはラップしたコンポーネントの値になる。
export const StateProvider: React.FC = ({ children }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <StateContext.Provider value={{ toggle, setToggle }}>
      {children}
    </StateContext.Provider>
  )
}
//コンポーネント毎にuseContextを使うのは冗長なのでオブジェクト化する。
export const useStateContext = () => useContext(StateContext)
