import Typography from "typography"
import gray from 'gray-percentage'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

const typography = new Typography({
    baseFontSize: '16px',
    baseLineHeight: 1.6875,
    googleFonts: [
        {
            name: 'Montserrat',
            styles: ['400', '700'],
        },
        {
            name: 'Merriweather',
            styles: ['400', '400i'],
        },
    ],
    headerFontFamily: ['Montserrat', 'sans-serif'],
    bodyFontFamily: ['Merriweather', 'sans-serif'],
    headerColor: 'hsla(0,0%,0%,1)',
    bodyColor: 'hsla(0,0%,0%,0.8)',
    headerWeight: 700,
    bodyWeight: 400,
    boldWeight: 700,
    overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
        a: {
            color: '#d65947',
            textDecoration: 'none',
        },
        'a:hover,a:active': {
            color: options.bodyColor,
        },
        'h1,h2,h3,h4,h5,h6': {
            marginTop: rhythm(2),
        },
        blockquote: {
            ...scale(1 / 5),
            color: gray(41),
            paddingLeft: rhythm(13 / 16),
            marginLeft: 0,
            borderLeft: `${rhythm(3 / 16)} solid #fca206`,
        },
        'blockquote > :last-child': {
            marginBottom: 0,
        },
        'blockquote cite': {
            ...adjustFontSizeTo(options.baseFontSize),
            color: options.bodyColor,
            fontWeight: options.bodyWeight,
        },
        'blockquote cite:before': {
            content: '"— "',
        },
        [MOBILE_MEDIA_QUERY]: {
            blockquote: {
                marginLeft: rhythm(-3 / 4),
                marginRight: 0,
                paddingLeft: rhythm(9 / 16),
            },
        },
    }),
})

export default typography