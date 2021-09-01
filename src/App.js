
import { Switch, Route } from "react-router-dom";
import Pages from "./pages";
import { createMuiTheme } from "@material-ui/core/styles";
import { StylesProvider, ThemeProvider } from "@material-ui/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: `#cc9933`,
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Switch>
          <Route path={["/"]} exact component={Pages.Home} />
          <Route
            path={["/glossary"]}
            exact
            component={Pages.Services.Glossary}
          />
          <Route
            path={["/safety"]}
            exact
            component={Pages.Services.Safety}
          />
          <Route
            path={["/types"]}
            exact
            component={Pages.Services.Types}
          />
          <Route component={Pages.PageNotFound} />
        </Switch>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
