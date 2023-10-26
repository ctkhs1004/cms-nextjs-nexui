'use client';

import NavBar from "@/components/NavBar/NavBar";
import {Footer} from "@/components/Footer";
import React from "react";
import Profile from "@/components/Profile/Profile";
import ProfileUserContents from "@/components/Profile/ProfileUserContents";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
    const session = useSession();
    console.log(session?.data?.user?.id)
    return (
        <div className="flex justify-center items-center py-7">
            <section className="body flex-grow-1 px-sm-2 mb-4 ">
                <div className="bg-gray-900 rounded-2xl flex justify-center items-center py-7">
                    <Profile/>
                </div>
                <div className="justify-center items-center py-7">
                    <h4>Posts</h4>
                    <ProfileUserContents/>
                </div>
            </section>

        </div>
    )
}

export default ProfilePage;