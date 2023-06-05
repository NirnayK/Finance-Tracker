'use client';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'

const SignInButton = () => {

    // const router = useRouter();
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                <button className="bg-gray-500 hover:bg-gray-600 rounded-md px-4 py-2 text-white" onClick={() => signOut()}>Log Out</button>
            </>
        )
    }
    return (
        <button className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2" onClick={() => signIn('google', { callbackUrl: "/dashboard" })}>
            Log In
        </button >
    )
}

export default SignInButton