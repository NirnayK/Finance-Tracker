'use client';
import Link from 'next/link';
import SignInButton from './SignInButton';
import { useSession } from 'next-auth/react';

const Navbar = () => {
    const { data: session } = useSession();
    return (
        <nav className="flex items-center justify-between p-4">
            <div className="flex items-center">
                <Link href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                        <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
                        <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                    </svg>
                </Link>
                <Link href="/">
                    <h1 className="ml-4 text-white text-lg font-semibold">Finance Tracker</h1>
                </Link>
            </div>
            <div className="flex items-center">
                {
                    (session) &&
                    <Link href="/dashboard">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 mr-4">
                            Dashboard
                        </button>
                    </Link>
                }
                <SignInButton />
            </div>
        </nav>
    );
};

export default Navbar;
