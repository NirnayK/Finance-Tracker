
export default function HomePage() {
    return (
        // Homepage to a finace tracker app with tailwind css and login button
        <>
            {/* ======= */}
            {/* Suggestion 1 */}

            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-2xl font-bold">Finance Tracker</h1>
                <p className="text-2xl font-bold">Welcome to Finance Tracker</p>
                <p className="text-2xl font-bold">Please Login</p>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Login
                </button>
            </div>

            {/* ======= */}
            {/* Suggestion 2 */}

            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-6xl font-bold text-gray-800">Finance Tracker</h1>
                <div>
                    <a href="/api/auth/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Login
                    </a>
                </div>
            </div>

            {/* =======
Suggestion 3 */}

            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-6xl font-bold">
                    Welcome to Finance Tracker
                </h1>
                <p className="mt-3 text-2xl">
                    A finance tracker app built with Next.js and Tailwind CSS
                </p>
                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <a
                        href="/api/auth/login"
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">Login &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Login to view your finance tracker dashboard
                        </p>
                    </a>
                </div>
            </div>

            {/* =======
Suggestion 4 */}

            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                    <h1 className="text-5xl font-bold">
                        Finance Tracker
                    </h1>

                    <p className="mt-3 text-2xl">
                        A finance tracker app built with Next.js and Tailwind CSS
                    </p>

                    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                        <a
                            href="/api/auth/login"
                            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                        >
                            <h3 className="text-2xl font-bold">Login &rarr;</h3>
                            <p className="mt-4 text-xl">
                                Click here to login with your Google account
                            </p>
                        </a>
                    </div>
                </main>
            </div>
            {/* 
=======
Suggestion 5 */}

            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                    <h1 className="text-6xl font-bold">Finance Tracker</h1>
                    <p className="mt-3 text-2xl">
                        A finance tracker app built with <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">Next.js</code> and <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">Tailwind CSS</code>
                    </p>
                    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                        <a href="/api/auth/login" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                            <h3 className="text-2xl font-bold">Login &rarr;</h3>
                            <p className="mt-4 text-xl">
                                Login to your account.
                            </p>
                        </a>
                    </div>
                </main>
            </div>
            {/* 
=======
Suggestion 6 */}

            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <img src="https://media.istockphoto.com/vectors/financial-statistics-and-graphs-vector-id1212736607?k=20&m=1212736607&s=612x612&w=0&h=0Vg1tQZD6o6gQXjTb0Mh5QwYtT9Tt4BbZi8v8Wz2Z8I=" className="h-7 sm:h-8" />
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <p>Finance Tracker</p>
                                    <p>Track your finances with ease.</p>
                                    <p>Sign in to get started.</p>
                                </div>
                                <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                                    <a href="/api/auth/login" className="text-blue-500 hover:text-blue-700">Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* =======
Suggestion 7 */}

            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-6xl font-bold text-blue-400">Finance Tracker</h1>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Login
                </button>
            </div>

            {/* =======
Suggestion 8 */}

            <div className="bg-blue-600 h-screen flex flex-col justify-center items-center">
                <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
                    <h1 className="text-2xl md:text-4xl font-bold mb-5 text-center">Finance Tracker</h1>
                    <p className="text-center font-light">Track your finances and stay on top of your money</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2 mt-10">
                    <h1 className="text-2xl md:text-4xl font-bold mb-5 text-center">Log in</h1>
                    <p className="text-center font-light">Log in to your account to see your finances</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">Log in</button>
                </div>
            </div>

            {/* =======
Suggestion 9 */}

            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <div className="flex flex-col items-center justify-center min-h-screen py-2">
                    <h1 className="text-6xl font-bold text-blue-600">
                        Finance Tracker
                    </h1>
                    <p className="mt-3 text-2xl text-gray-600">
                        Welcome to Finance Tracker
                    </p>
                    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                        <a
                            href="/api/auth/login"
                            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                        >
                            <h3 className="text-2xl font-bold">
                                Login &rarr;
                            </h3>
                            <p className="mt-4 text-xl">
                                Go to Login Page
                            </p>
                        </a>
                    </div>
                </div>
            </div>


            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                    <h1 className="text-6xl font-bold">
                        Finance Tracker
                    </h1>

                    <p className="mt-3 text-2xl">
                        A Finance Tracker App built with <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">Next.js</code> and <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">Tailwind CSS</code>
                    </p>

                    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                        <button className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-green-600 focus:text-green-600">
                            <h3 className="text-2xl font-bold">Finance Tracker &rarr;</h3>
                            <p className="mt-4 text-xl">
                                Find in-depth information about finance tracker features and how to use them.
                            </p>
                        </button>

                        <button className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-green-600 focus:text-green-600">
                            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
                            <p className="mt-4 text-xl">
                                Learn about Next.js in an interactive course with quizzes!
                            </p>
                        </button>

                        <button className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-green-600 focus:text-green-600">
                            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
                            <p className="mt-4 text-xl">
                                Discover and deploy boilerplate example Next.js projects.
                            </p>
                        </button>

                        <button className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-green-600 focus:text-green-600">
                            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
                            <p className="mt-4 text-xl">
                                Instantly deploy your Next.js site to a public URL with Vercel.
                            </p>
                        </button>
                    </div>
                </main>
            </div>
        </>

    )
}