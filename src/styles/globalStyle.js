import { createGlobalStyle } from "styled-components"
import modernNormalize from "styled-modern-normalize"

const GlobalStyle = createGlobalStyle`
    
    // Import normalize.css
    ${modernNormalize}

    * {
        box-sizing: border-box;
    }

    html {
        width: 100%;
        height: 100%;
    }

    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        font-size: 1rem;
        font-family: ${({ theme }) => theme.fonts.primary};
        line-height: 1.5rem;
        font-weight: 400;
        text-rendering: optimizeLegibility;
        &.blur {
            overflow: hidden;
            #___gatsby #main-content > * {
              filter: blur(5px) ;
              transition: all .3s ease-out;
              pointer-events: none;
              user-select: none;
            }
          }
        }
        &.splashScreen {
              position: fixed;
              overflow: hidden;
        }

    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        cursor: pointer;
        &:hover,
        &:focus {
          outline: 0;
        }
    }

    h1 {
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.375rem;
        color: ${({ theme }) => theme.colors.primary};
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
            font-size: 2.625rem;
            line-height: 4rem;
        }
    }

    h2 {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.5rem;
        color: ${({ theme }) => theme.colors.primary};
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
            font-size: 2rem;
            line-height: 3rem;
        }
    }

    h3 {
        font-weight: 700;
        font-size: 1.75rem;
        line-height: 2.25rem;
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 3rem;
    }

    h4 {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
    }

    hr {
        margin: 3rem auto;
        border-width: .05rem;
        color: ${({ theme }) => theme.colors.tertiary};
        opacity: 0.1;
      }

    .svg-icon circle {
        stroke-width: 1;
    }

    #bmc-wbtn:hover {
        -webkit-transform: scale(1.1) !important;
        -ms-transform: scale(1.1) !important;
        transform: scale(1.1) !important;
    }

    .snow{
        position:fixed;
        pointer-events:none;
        top:0;
        left:0;
        right:0;
        bottom:0;
        height:100vh;
        background: none;
        background-image: url('https://s3-eu-west-1.amazonaws.com/static-ressources/s1.png'), url('https://s3-eu-west-1.amazonaws.com/static-ressources/s2.png'), url('https://s3-eu-west-1.amazonaws.com/static-ressources/s3.png');
        z-index:99999;
        -webkit-animation: snow 10s linear infinite;
        -moz-animation: snow 10s linear infinite;
        -ms-animation: snow 10s linear infinite;
        animation: snow 10s linear infinite;
      }

      @keyframes snow {
        0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
        50% {background-position: 500px 500px, 100px 200px, -100px 150px;}
        100% {background-position: 500px 1000px, 200px 400px, -100px 300px;}
      }

      @-moz-keyframes snow {
        0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
        50% {background-position: 500px 500px, 100px 200px, -100px 150px;}
        100% {background-position: 400px 1000px, 200px 400px, 100px 300px;}
      }

      @-webkit-keyframes snow {
        0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
        50% {background-position: 500px 500px, 100px 200px, -100px 150px;}
        100% {background-position: 500px 1000px, 200px 400px, -100px 300px;}
      }

      @-ms-keyframes snow {
        0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
        50% {background-position: 500px 500px, 100px 200px, -100px 150px;}
        100% {background-position: 500px 1000px, 200px 400px, -100px 300px;}
      }

`

// to remove Snow just add display: none; to .snow

export default GlobalStyle
