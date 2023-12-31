import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserProfileSidebar = () => {
    return (
        <div class="container-fluid">
            <div class="row flex-nowrap">
                <div class="px-sm-2 p-3 bg-secondary bg-gradient rounded w-100">
                    <div class="d-flex flex-column align-items-sm-start px-3 pt-2 text-white">
                        <p className="h5 my-4"><b>Welcome, John Doe</b></p>
                        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-sm-start gap-3" id="menu">
                            <li class="nav-item">
                                <a href="/Settings" class="nav-link align-middle px-0">
                                    <FontAwesomeIcon icon={faUser} />&nbsp;Account settings
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="/OrderHistory" class="nav-link align-middle px-0">
                                    <FontAwesomeIcon icon={faFile} />&nbsp;Order history
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="/Contact" class="nav-link align-middle px-0">
                                <FontAwesomeIcon icon={faSquareEnvelope} />&nbsp;Contact us
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="/Reviews" class="nav-link align-middle px-0">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />&nbsp;Your reviews
                                </a>
                            </li>
                            <li class="nav-item mb-3">
                                <a href="/Cart" class="nav-link align-middle px-0">
                                    <FontAwesomeIcon icon={faCartShopping} />&nbsp;Go to your cart
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileSidebar;
