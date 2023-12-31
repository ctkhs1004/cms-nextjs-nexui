"use client"
import HeaderSignOut from "@/components/Header/HeaderSignOut";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import {BiBookBookmark, BiLogo500Px, BiLogoBlogger, BiMessageSquareDots} from "react-icons/bi";
import {
    MdOutlineSpaceDashboard,
    MdOutlineAnalytics,
    MdOutlineIntegrationInstructions,
    MdOutlineMoreHoriz,
    MdOutlineSettings,
    MdOutlineLogout,
} from "react-icons/md";
const SideNavBar = () => {
    return (
        <div className="p-6 w-1/2 h-screen bg-gray-900 z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
            <div className="flex flex-col justify-start item-center">
                <h1 className="text-base text-center cursor-pointer font-bold text-blue-50 border-b border-gray-100 pb-4 w-full">
                    CMS-ADMIN
                </h1>
                <div className=" my-4 border-b border-gray-100 pb-4">
                    <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
                        <h3 className="text-base text-gray-400 group-hover:text-white font-semibold ">
                            <a href="/Home">Dashboard</a>
                        </h3>
                    </div>
                    <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
                        <h3 className="text-base text-gray-400 group-hover:text-white font-semibold ">
                            <a href="/Profile">Profile</a>
                        </h3>
                    </div>
                    {/*<div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">*/}
                    {/*    <FaRegComments className="text-2xl text-gray-600 group-hover:text-white " />*/}
                    {/*    <h3 className="text-base text-gray-400 group-hover:text-white font-semibold ">*/}
                    {/*        Comments*/}
                    {/*    </h3>*/}
                    {/*</div>*/}
                    <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white " />
                        <h3 className="text-base text-gray-400 group-hover:text-white font-semibold ">
                            <a href="/Report">Report</a>
                        </h3>
                    </div>
                    <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        <BiBookBookmark className="text-2xl text-gray-600 group-hover:text-white " />
                        <h3 className="text-base text-gray-400 group-hover:text-white font-semibold ">
                            <a href="/OperationLog">Operation Log</a>
                        </h3>
                    </div>
                    {/*<div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">*/}
                    {/*    <MdOutlineIntegrationInstructions className="text-2xl text-gray-600 group-hover:text-white " />*/}
                    {/*    <h3 className="text-base text-gray-400 group-hover:text-white font-semibold ">*/}
                    {/*        Integration*/}
                    {/*    </h3>*/}
                    {/*</div>*/}
                </div>
                {/* setting  */}
                <div className=" my-4 border-b border-gray-100 pb-4">
                    <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
                        <h3 className="text-base text-gray-400 group-hover:text-white font-semibold ">
                            Settings
                        </h3>
                    </div>
                    {/*<div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">*/}
                    {/*    <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white " />*/}
                    {/*    <h3 className="text-base text-gray-400 group-hover:text-white font-semibold ">*/}
                    {/*        More*/}
                    {/*    </h3>*/}
                    {/*</div>*/}
                </div>
                {/* logout */}
                <div className=" my-4  border-b border-gray-100 pb-4">
                    <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto border-0">
                        <HeaderSignOut  />
                        {/*<h3 className="text-base text-gray-400 group-hover:text-white font-semibold ">*/}
                        {/*</h3>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SideNavBar;