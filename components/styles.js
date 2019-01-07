import { createGlobalStyle } from "styled-components"

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
    site: "900px"
  }
}

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  background-color: ${theme.color.darkShades};
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: ${theme.color.text};
}
p {
  margin: 0;
}
a {
  text-decoration: none;
  cursor: pointer;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
}
input {
  padding: 0;
  border: 0;
}
button {
  padding: 0;
  border: 0;
  cursor: pointer;
}
`
