import UnderConstruction from "./assets/img/under-construction.png"
// import { Switch, Route } from "react-router-dom";
// import Pages from "./pages";
// import { createMuiTheme } from "@material-ui/core/styles";
// import { StylesProvider, ThemeProvider } from "@material-ui/styles";
// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: `#cc9933`,
//     },
//   },
// });
function App() {
  return (
    <div className="d-flex align-items-center" style={{height: `100vh`}}>
      <img src={UnderConstruction} class="mx-auto d-block my-auto img-fluid" alt="under construction"/>
    </div>
    // <ThemeProvider theme={theme}>
    //   <StylesProvider injectFirst>
    //     <Switch>
    //       <Route path={["/"]} exact component={Pages.Home} />
    //       <Route
    //         path={["/services/hardwood-floor-installation"]}
    //         exact
    //         component={Pages.Services.HardWoodFloor}
    //       />
    //       <Route
    //         path={["/services/tile-installation"]}
    //         exact
    //         component={Pages.Services.TileInstallation}
    //       />
    //       <Route
    //         path={["/services/flooring-installation"]}
    //         exact
    //         component={Pages.Services.FlooringInstallation}
    //       />
    //       <Route
    //         path={["/services/painting-services"]}
    //         exact
    //         component={Pages.Services.PaintingServices}
    //       />
    //       <Route
    //         path={["/services/cabinet-installation"]}
    //         exact
    //         component={Pages.Services.CabinetInstallation}
    //       />
    //       <Route component={Pages.PageNotFound} />
    //     </Switch>
    //   </StylesProvider>
    // </ThemeProvider>
  );
}

export default App;
