const Util = (name: string, type: "api" | "url") => {
  const array: { [key: string]: string } = {
    Login: "/auth/login",
    Register: "/auth/register",
    ForgotPass: "/auth/forgot-password",
    HomePage: "/home"
  }
  const apis: { [key: string]: string } = {
    Login: "/api/sign-in",
    Register: "/api/register",
    Dashboard: "/dashboard"
  }
  switch (type) {
    case "api":
      return apis[name] || ""
    default:
      return array[name]
  }
}
export default Util
