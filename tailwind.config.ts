// Importing type of tailwindCSS configs
import type { Config } from 'tailwindcss'

// Defining configs of tailwindCSS
const config: Config = {
    darkMode: 'class',
    content: [
        './app/*.{ts,tsx,js,jsx}',
        './app/**/*.{ts,tsx,js,jsx}',
        './component/*.{ts,tsx,js,jsx}',
        './component/**/*.{ts,tsx,js,jsx}',
        './chunk/*.{ts,tsx,js,jsx}',
        './chunk/**/*.{ts,tsx,js,jsx}',
    ],
    theme: {
        extend: {
            fontFamily: {fredoka: 'var(--font-fredoka)'},
            animation: {
                circleMotion: 'circleMotion 10s linear infinite',
                customRotate: 'customRotate 1.5s linear infinite',
                rectanglePusle: 'rectanglePusle 3s ease infinite',
                rectanglePusleCentred: 'rectanglePusleCentred 3s ease infinite',
                beforeLinkActive: 'beforeLinkActive 1s ease-in-out forwards',
                afterLinkActive: 'afterLinkActive 1s ease-in-out forwards',
            },
            keyframes: {
                customRotate: {
                    '0%': {transform: 'rotate(0) scale(1.35)'},
                    '100%': {transform: 'rotate(360deg) scale(1.35)'}
                },
                circleMotion: {
                    '0%, 100%' : {transform: 'translateX(0) translateY(0)'},
                    '40%' : {transform: 'translateX(10px) translateY(10px)'},
                    '60%' : {transform: 'translateX(20px) translateY(0)'},
                    '80%' : {transform: 'translateX(10px) translateY(20px)'}
                },
                rectanglePusle: {
                    '0%': {
                        transform: 'scale(0)',
                        opacity: '0'
                    }, '75%' : {
                        transform: 'scale(1)',
                        opacity: '100%'
                    }, '100%' : {
                        transform: 'scale(1)',
                        opacity: '0%'
                    }
                }, 
                rectanglePusleCentred : {
                    '0%': {
                        transform: 'translateX(-50%) translateY(-50%) scale(0)',
                        opacity: '0'
                    }, '90%' : {
                        transform: 'translateX(-50%) translateY(-50%) scale(1)',
                        opacity: '100%'
                    }, '100%' : {
                        transform: 'translateX(-50%) translateY(-50%) scale(1)',
                        opacity: '0%'
                    }
                },
                beforeLinkActive: {
                    '0%': {
                        opacity: '0',
                        width: '0'
                    },
                    '100%': {
                        opacity: '100%',
                        width: '10px'
                    }
                },
                afterLinkActive: {
                    '0%': {
                        opacity: '0',
                        width: '0'
                    },
                    '100%': {
                        opacity: '100%',
                        width: '30px'
                    }
                }
            },
            colors: {
                dark: '#232323',
                pageDark: '#363636',
                lightestDark: '#565656',
                theme: '#49B486',
                lightGrey: '#BBBBBB',
                themeBlue: '#2B96CC',
                darketThemeBlue: '#382BCC',
                lightTheme: '#5DE3AA',
                darkerTheme: '#123828',
                lighterGrey: '#e3e3e3',
                lightestGrey: '#F6F6F6',
                themePurple: '#9288F8',
                frogGreen: '#86D028',
                darkFrogGreen: '#1EBB10',
                lightOrange: '#FCAA0B',
                orange: '#FD7123',
                pink: '#FF5492',
                lightGreen: '#93AF40',
                darkestTheme: '#001F18',
                LighterDarkerTheme: '#00896B',
                alert: '#FF7089',
                themeRed: '#EB3349',
            }
        }
    },
    plugins: [],
}

// Exporting configs of tailwindCSS
export default config;
