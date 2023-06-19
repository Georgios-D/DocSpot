import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import BasicRating from "./BasicRating";
import Availability from "./Availability";
import Box from "@mui/material/Box";

type Props = {};

const Filter = (props: Props) => {
    function valuetext(value: number) {
        return `${value}km`;
    }

    const [value, setValue] = useState<number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <div className="bg-gray-500 w-[250px] h-full">
            <Box sx={{ width: 250 }}>
                <div>
                    Distance
                    <Slider
                        className="mt-24"
                        getAriaLabel={() => "Temperature range"}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                </div>
            </Box>
            <BasicRating />
            <div className="mt-4">
                Availability
                <Availability />
            </div>
        </div>
    );
};

export default Filter;
