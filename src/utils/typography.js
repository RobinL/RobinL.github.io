import Typography from "typography"
import stAnnesTheme from "typography-theme-st-annes"

// Override so default colours used
stAnnesTheme.overrideThemeStyles = ({rhythm}, options) => ({
    a: {
        color: null,
    },
    "a:hover,a:active": {
        color: null,
    },
    'h1,h2,h3,h4,h5': {
        marginTop: rhythm(1)
    },
    'p': {
        marginBottom: rhythm(1 / 2),
    },
    'table' : {
        width: null
    },
    'td, th': {
        padding: rhythm(1/8)

    },
    'blockquote': {
        borderColor: "hsla(0,0%,0%,0.19)",
        fontSize: null
    },
    '@media only screen and (max-width: 480px){blockquote{border-color: hsla(0,0%,0%,0.19)}}': {},


})

const typography = new Typography(stAnnesTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography