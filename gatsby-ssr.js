// Implement Gatsby's SSR (Server Side Rendering) APIs in this file.

//See: https://www.gatsbyjs.org/docs/ssr-apis/

// You can delete this file if you're not using it
// const { useContext } = require("react")
const React = require("react")
//import Context from "./src/context/"
// const { default: Context } = require("./src/context")

// exports.wrapRootElement = () => {
//   const { isIntroDone } = useContext(Context).state

exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <div className="snow"></div>,
    <script
      data-name="BMC-Widget"
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      data-id="aleksa"
      data-description="Support and fuel my future work. ⚡"
      data-message="Thanks for visiting.
      Made with 💻 and ☕ "
      data-color="#79D6B5"
      data-position="Right"
      data-x_margin="16"
      data-y_margin="16"
    ></script>,
  ])
}
