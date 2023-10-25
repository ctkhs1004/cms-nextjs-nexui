'use client';

import ProfileContents from "@/components/Profile/ProfileContents";
import NavBar from "@/components/NavBar/NavBar";
import {Footer} from "@/components/Footer";
import React from "react";

const ProfilePage = () => {
    return (
        <div className="flex justify-center items-center py-7">
                <section className="body bg-gray-900 rounded-2xl flex-grow-1 px-sm-2 mb-4 ">
                    <div className="flex justify-center items-center py-7">
                        <ProfileContents/>
                    </div>
                </section>
        </div>
    )
}

export default ProfilePage;