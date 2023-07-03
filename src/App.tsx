import React from "react";
import Filter from "./components/Filter";
import Results from "./components/Results";
import BasicRating from "./components/BasicRating";
import Navbar from "./components/Navbar";
import { MuiDrawer } from "./components/MuiDrawer";

type Props = {};

const App = (props: Props) => {
    return (
        <div className="w-full h-full flex">
            <Navbar />
            <div className="mt-[80px] flex flex-1">
                <Filter />
                <MuiDrawer />
                <div className="p-6 flex gap-6 flex-col w-full">
                    <input type="text" placeholder="Search" />
                    <Results />
                </div>
            </div>
        </div>
    );
};

export default App;
