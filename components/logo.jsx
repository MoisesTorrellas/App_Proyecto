import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Logo = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#0041F2"
        className="logo"
        viewBox="0 0 70 40"
        {...props}
    >
        <Path
            d="M37.255 1.616a4.842 4.842 0 0 1 3.49-1.503h16.897c10.988 0 16.49 13.82 8.72 21.903L49.44 39.622c-.777.808-2.105.236-2.105-.908V23.208l1.955-2.035c1.554-1.617.454-4.38-1.744-4.38H22.667L37.255 1.615Z"
            className="svg_color"
        />
        <Path
            d="M32.745 38.384a4.842 4.842 0 0 1-3.49 1.503H12.358c-10.988 0-16.49-13.82-8.72-21.903L20.56.378c.777-.808 2.106-.235 2.106.908v15.506l-1.956 2.035c-1.554 1.617-.454 4.38 1.744 4.38h24.879l-14.59 15.177Z"
            className="svg_color"
        />
    </Svg>
)
export default Logo;