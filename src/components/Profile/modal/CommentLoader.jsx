import React from "react"
import ContentLoader from "react-content-loader"

const CommentLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={243}
    height={50}
    viewBox="0 0 243 50"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="500" y="89" rx="0" ry="0" width="320" height="320" /> 
    <circle cx="26" cy="20" r="19" /> 
    <rect x="63" y="7" rx="0" ry="0" width="108" height="14" /> 
    <rect x="12" y="42" rx="0" ry="0" width="69" height="11" /> 
    <circle cx="225" cy="40" r="10" />
  </ContentLoader>
)

export default CommentLoader