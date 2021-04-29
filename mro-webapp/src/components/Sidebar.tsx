import React from "react";
import { connect } from "react-redux";
import { IRootState } from "../store/reducers";
import { setSidebarOpen, setSidebarClose } from "../store/reducers/appManager";

export interface ISidebarProps extends StateProps, DispatchProps {}

function Sidebar(props: ISidebarProps) {
  return (
    <div className="sticky left-0 h-screen w-1/6 bg-green-100">
      <div>
        <h3>Options</h3>
        <p>sidebar option</p>
        <p>sidebar option</p>
        <p>sidebar option</p>
        <p>sidebar option</p>
      </div>
    </div>
  );
}

const mapStateToProps = ({ appManager }: IRootState) => ({
  sidebarState: appManager.showSidebar,
});

const mapDispatchToProps = { setSidebarOpen, setSidebarClose };

type StateProps = Readonly<typeof mapStateToProps>;
type DispatchProps = Readonly<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
