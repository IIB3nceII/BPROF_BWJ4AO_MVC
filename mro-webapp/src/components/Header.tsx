import React, { useState } from "react";
import "./Header.scss";
import { MenuIcon } from "@heroicons/react/solid";
import OlympiaLogo from "../assets/olympialogo1.png";
import { connect } from "react-redux";
import { IRootState } from "../store/reducers";
import { setSidebarOpen, setSidebarClose } from "../store/reducers/appManager";
import { Link } from "react-router-dom";
import { logout } from "../store/reducers/authentication";
import axios from "../axios";

export interface IHeaderProps extends StateProps, DispatchProps {}

function Header(props: IHeaderProps) {
  const sendLogoutRequest = () => props.logout();

  const headers = {
    Authorization: "Bearer " + props.account?.token,
  };

  const callEdit = () => {
    axios
      .get("/Edit", { headers: headers })
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="sticky top-0 bg-gray-50 h-24 flex justify-between ms:justify-between">
      <div
        className={`${
          props.isAuthenticated && "menu"
        } flex w-40 p-6 items-center`}
      >
        <MenuIcon className="h-10 text-gray-500 cursor-pointer transition duration-100 transform" />

        <div className="sidebar bg-gray-50">
          <ul className="h-10 ml-7 text-4xl font-bold">
            <li className="mt-32">
              <Link to="/create">
                <p className="cursor-pointer">Create new</p>
              </Link>
            </li>
            <li>
              <Link to="/view">
                <p className="cursor-pointer">View</p>
              </Link>
            </li>
            <li className="mt-12 text-base font-thin">
              <p className="cursor-pointer" onClick={callEdit}>
                + Edit
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex px-6 sm:ml-10 sm:mr-10 items-center">
        <Link to="/">
          <img
            src={OlympiaLogo}
            alt="Olympia logo"
            loading="lazy"
            className="w-24 sm:w-32 cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex w-40 items-center p-6">
        {props.isAuthenticated ? (
          <p
            className="ml-10 text-xs sm:text-lg text-gray-500 cursor-pointer hover:underline"
            onClick={sendLogoutRequest}
          >
            Sign out
          </p>
        ) : (
          <Link to="/sign-in">
            <p className="ml-10 text-xs sm:text-lg text-gray-500 cursor-pointer hover:underline">
              Sign in
            </p>
          </Link>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = ({ appManager, authentication }: IRootState) => ({
  sidebarState: appManager.showSidebar,
  isAuthenticated: authentication.isAuthenticated,
  account: authentication.account,
});

const mapDispatchToProps = { setSidebarOpen, setSidebarClose, logout };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
