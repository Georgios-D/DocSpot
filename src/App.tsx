import React from "react";
import Filter from "./components/Filter";
import Results from "./components/Results";
import BasicRating from "./components/BasicRating";
import Navbar from "./components/Navbar";

type Props = {};

const App = (props: Props) => {
    return (
        <div className="w-full h-full">
            <Navbar />
            <Filter />
            <Results />
        </div>
    );
};

export default App;
