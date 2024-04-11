export interface GlobalContext {
  isLoading: boolean
  setIsLoading: (value: boolean) => void
  loading: boolean
  isLogin: boolean
  setIsLogin: (value: boolean) => void
}

export interface ContextProviderProps {
  children: React.ReactNode
}
