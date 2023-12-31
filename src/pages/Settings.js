import React from "react";
import UserProfileLayout from "../layout/UserProfileLayout";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Settings = () => {
    return (
        <UserProfileLayout>
            <div class="form">
                <div class="border rounded p-3 m-auto">
                    <h1 class="fs-5">Edit your profile</h1>

                    <hr />
                    
                    <div class="form-body mt-3 mb-3">
                        <p className="h5"><b> <FontAwesomeIcon icon={faUser} />&nbsp;Change your username</b></p>
                        <input class="form-control mb-2" type="text" placeholder="Enter your username here" />
                        <button role="button" class="btn btn-primary mb-5">Submit</button>

                        <p className="h5"><FontAwesomeIcon icon={faKey} />&nbsp;<b>Change your password</b></p>
                        <input class="form-control mb-2" type="password" placeholder="Enter your password here" />
                        <input class="form-control mb-2" type="password" placeholder="Re-enter your password" />
                        <button role="button" class="btn btn-primary mb-5">Submit</button>

                        <p className="h5"><FontAwesomeIcon icon={faImage} />&nbsp;<b>Change your profile picture</b></p>
                        <div className="d-flex justify-content-center mt-4">
                            <div className="btn btn-success">
                                <label role="button" class="form-label m-1" for="userProfilePicture">Choose picture</label>
                                <input type="file" class="form-control d-none mb-5" id="userProfilePicture" />
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div class="mt-3 d-flex align-items-center justify-content-center">
                        <button type="button" class="btn btn-secondary">Cancel</button>
                        &nbsp;
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </UserProfileLayout>
    );
}

export default Settings;
