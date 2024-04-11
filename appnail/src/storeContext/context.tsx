import React from "react"
import { ContextProviderProps, GlobalContext } from "interface/globalType"
import { initGlobalContext } from "interface/initConst"

export const MyGlobalContext = React.createContext<GlobalContext>(initGlobalContext)

export const GlobalContextWrapper = ({ children }: ContextProviderProps) => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [isLogin, setIsLogin] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const valueContext = {
    isLoading,
    setIsLoading,
    isLogin,
    setIsLogin,
    loading,
    setLoading
  }
  return <MyGlobalContext.Provider value={valueContext}>{children}</MyGlobalContext.Provider>
}
