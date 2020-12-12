/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`)
  }

  window.onload = () => {
    if (document.getElementsByTagName("iframe")[0].getAttribute("src") !== "") {
      document
        .getElementsByTagName("iframe")[0]
        .setAttribute("title", "Buy Me A Coffee Button")
    }
  }
}
