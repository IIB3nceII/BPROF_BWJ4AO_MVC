import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "./components/Header";
import { connect } from "react-redux";
import { setSidebarOpen, setSidebarClose } from "./store/reducers/appManager";
import { IRootState } from "./store/reducers";

export interface IAppProps extends StateProps, DispatchProps {}

function App(props: IAppProps) {
  return (
    <Router>
      <div className="app">
        <Header />
        <AppRoutes />
      </div>
    </Router>
  );
}

const mapStateToProps = ({ appManager }: IRootState) => ({
  sidebarState: appManager.showSidebar,
});

const mapDispatchToProps = { setSidebarOpen, setSidebarClose };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(App);
