import { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="container bg-neutral-50 shadow-lg rounded-lg p-5">
                <h1 className="text-4xl">
                    What questions do{" "}
                    <span className="font-bold italic">you</span> have?
                </h1>
            </div>
        </div>
    );
};

export default Home;
