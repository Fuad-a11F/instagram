import React from "react"
import ContentLoader from "react-content-loader"

const PostLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={335}
    height={335}
    viewBox="0 0 335 335"
    backgroundColor="#f3f3f3" 
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="8" rx="0" ry="0" width="320" height="320" />
  </ContentLoader>
)

export default PostLoader