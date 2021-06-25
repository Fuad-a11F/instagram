import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader2 = () => (
  <ContentLoader 
    speed={2}
    width={420}
    height={170}
    viewBox="0 0 420 170"
    backgroundColor="#f3f3f3" //#f3f3f3
    foregroundColor="#ecebeb"
  >
    <rect x="27" y="25" rx="0" ry="0" width="180" height="22" /> 
    <rect x="151" y="73" rx="0" ry="0" width="104" height="18" /> 
    <rect x="27" y="73" rx="0" ry="0" width="104" height="18" /> 
    <rect x="277" y="73" rx="0" ry="0" width="104" height="18" /> 
    <rect x="27" y="117" rx="0" ry="0" width="147" height="21" /> 
    <rect x="229" y="20" rx="0" ry="0" width="126" height="34" /> 
    <rect x="387" y="18" rx="0" ry="0" width="27" height="38" />
  </ContentLoader>
)

export default MyLoader2