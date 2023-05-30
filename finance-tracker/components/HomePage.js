
export default function HomePage() {
    return (
        //A div saying Your finance tracking issues end here with a  green login button and a green signup button  and gap between them using tailwind css with  sm,md,lg,xl prefix for responsiveness
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                    Your finance tracking issues end here
                </h1>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <a
                        href="/login"
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">Login &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Already have an account? Login here.
                        </p>
                    </a>
                    <a
                        href="/signup"
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">Sign up &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Don't have an account? Sign up here.
                        </p>
                    </a>
                </div>
            </main>
        </div>


    )
}