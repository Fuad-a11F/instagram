import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader 
    speed={2}
    width={180}
    height={170}
    viewBox="0 0 180 170"
    backgroundColor="#f3f3f3" //#f3f3f3
    foregroundColor="#ecebeb"
  >
    <circle cx="81" cy="85" r="80" /> 
  </ContentLoader>
)

export default MyLoader