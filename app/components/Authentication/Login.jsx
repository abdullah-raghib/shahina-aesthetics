'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const handleLogin = () =>{
        router.replace('/home')
    }
    return (
        <>
            <div className="flex min-h-full h-full flex-1 w-[80%] flex-col mt-16 items-center">
                <div className="sm:mx-auto sm:w-full">
                    <h2 className="mt-2 text-center text-3xl font-bold leading-9 tracking-tight text-cream">
                        Sign In
                    </h2>
                </div>
                <div className="mt-7 sm:mx-auto sm:w-full w-full">
                    <div className="space-y-6">
                        <div>
                            <div className="mt-2 w-full">
                                <input
                                    id="number"
                                    name="number"
                                    type="number"
                                    autoComplete="number"
                                    placeholder="Phone Number ( +44 )"
                                    className="block w-full rounded-md border-0 py-4 px-4 bg-transparent text-cream shadow-sm ring-1 ring-inset ring-cream placeholder:text-cream focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    placeholder="Password"
                                    className="block w-full rounded-md border-0 py-4 px-4  bg-transparent text-cream shadow-sm ring-1 ring-inset ring-cream placeholder:text-cream focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-center pt-7">
                            <button
                            onClick={() => router.replace('/home')}
                               
                                className="flex w-11/12 justify-center rounded-md bg-cream px-2 py-4 font-[800] italic text-xl leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign In
                            </button>
                        </div>
                        <div className="flex items-center pt-3 justify-center">
                            <div className="text-md">
                                <a href="#" className="font-semibold text-white hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="flex text-white text-sm pt-9 font-thin items-center justify-center">
                            <p>-------------------------------------------</p>
                        </div>
                    </div>

                    <p className="mt-5 text-center text-sm text-gray-200">
                        Dont have an account?{' '}
                        <a href="/register" className="font-semibold leading-6 text-cream underline hover:text-indigo-500">
                            Create Account
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}
