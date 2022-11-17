import { NextPage } from "next";
import Image from "next/image";
import logo from "../public/logo.png";

const Home: NextPage = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="container bg-neutral-50 shadow-lg rounded-lg p-16 lg:p-10 flex justify-around">
                {/* Right Column */}
                <div className="flex-1 flex flex-col justify-center gap-10">
                    <h1 className="text-8xl">
                        What questions do{" "}
                        <span className="font-bold italic">you</span> have?
                    </h1>
                    <p>
                        Simply use the form below to enter a question, as well
                        as any possible options, and submit it to go live with
                        your question!
                    </p>
                </div>
                {/* Left Column */}
                <div className="flex-1 hidden lg:block">
                    <Image
                        src={logo}
                        alt="logo"
                        width="2000"
                        height="1500"
                        id="logo"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
