import { createGlobalStyle, css } from "styled-components"

export const theme = {
  // color: {
  //   text: "#191c1d",
  //   main: "#9aebed",
  //   light: "#fffcab",
  //   lightAccent: "#fa86be",
  //   darkAccent: "#a275e3",
  //   darkShades: "#221827"
  // }
  color: {
    text: "#191c1d",
    main: "#52EDED",
    light: "#F5F6F4",
    lightAccent: "#BC846E",
    darkAccent: "#B03A57",
    darkShades: "#221827"
  },
  size: {
    site: "1024px"
  },
  media: {
    phone: "(max-width: 500px)",
    mobileWide: "(max-width: 768px)",
    desktop: "(min-width: 769px)"
  }
}

export const active = css`
  outline: none;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 1px;
    right: 1px;
    height: 2px;
    margin-top: 2px;
    background: ${({ theme }) => theme.color.main};
  }
`

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  /* background-color: ${theme.color.light}; */
  background-color: ${theme.color.darkShades};
  font-size: 18px;
  line-height: 1.5;
}
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  color: ${theme.color.text};
}
p {
  margin: 0;
  margin-bottom: 0.5rem;
}
a {
  text-decoration: none;
  color: ${theme.color.lightAccent}
  cursor: pointer;
  &:hover, &:focus {
    ${active}
    color: ${theme.color.darkAccent}
  }
}
figure {
  margin: 0;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Amatic SC', sans-serif;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
  header & {
    margin: 0;
  }
  &:first-child {
    margin-top: 0;
  }
}
picture img {
  width: 100%;
}
input {
  padding: 0;
  border: 0;
}
button {
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  &:hover, &:focus {
    ${active}
  }
}
`
