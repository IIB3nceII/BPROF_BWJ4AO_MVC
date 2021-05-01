import React, { useState } from "react";
import "./Header.scss";
import { MenuIcon } from "@heroicons/react/solid";
import OlympiaLogo from "../assets/olympialogo1.png";
import { connect } from "react-redux";
import { IRootState } from "../store/reducers";
import { setSidebarOpen, setSidebarClose } from "../store/reducers/appManager";

export interface IHeaderProps extends StateProps, DispatchProps {}

function Header(props: IHeaderProps) {
  return (
    <div className="sticky top-0 bg-gray-50 h-24 flex justify-between ms:justify-between">
      <div className="menu flex w-40 p-6 items-center">
        <MenuIcon className="h-10 text-gray-500 cursor-pointer transition duration-100 transform" />

        <div className="sidebar bg-gray-50">
          <ul className="h-10 ml-7 text-4xl font-bold">
            <li className="mt-32">
              <p>Igenb</p>
            </li>
            <li>
              <p>Igenb</p>
            </li>
            <li>
              <p>Igenb</p>
            </li>
            <li>
              <p>Igenb</p>
            </li>
            <li className="mt-12 text-base font-thin">
              <p>Igenb</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex px-6 ml-10 mr-10 items-center">
        <img
          src={OlympiaLogo}
          alt="Olympia logo"
          loading="lazy"
          className="h-16"
        />
      </div>
      <div className="flex w-40 items-center p-6">
        <p className="ml-10 text-lg text-gray-500 cursor-pointer hover:underline">Sign in</p>
      </div>
    </div>
  );
}

const mapStateToProps = ({ appManager }: IRootState) => ({
  sidebarState: appManager.showSidebar,
});

const mapDispatchToProps = { setSidebarOpen, setSidebarClose };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
