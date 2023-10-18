"use client"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"


export default function HeaderSignOut () {
    const signOutClick = async () => {
        await signOut({callbackUrl: "/"});
    }
    return (
         <div>
             <button onClick={signOutClick}>Sign Out</button>
         </div>
    )
}