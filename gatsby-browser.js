require("katex/dist/katex.min.css")

exports.onRouteUpdate = ({ location }) => {
  if (typeof window !== "undefined") {
    if (window.location.pathname.startsWith("/forkyy-dev/")) {
      window.history.replaceState(
        {},
        "",
        window.location.pathname.replace("/forkyy-dev", "")
      )
    }
  }
}
