import React from "react";

type Props = {};

const data = [
    {
        id: 1,
        name: "Yogges klinik",
        address: "Kungsgatan 1",
        city: "Stockholm",
        zip: "111 22",
    },
    {
        id: 2,
        name: "Dental clinic",
        address: "Trägatan 24C",
        city: "Stockholm",
        zip: "111 22",
    },
    {
        id: 3,
        name: "Fotmassage Stockholm",
        address: "Julvägen 22",
        city: "Stockholm",
        zip: "111 22",
    },
];

type ResultCardProps = {
    name: string;
    address: string;
    city: string;
    zip: string;
};

const ResultCard = ({ name, address, city, zip }: ResultCardProps) => {
    return (
        <div className="w-full bg-white h-[200px]">
            <div className="p-4">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-gray-600">{address}</p>
                <p className="text-gray-600">
                    {city}, {zip}
                </p>
            </div>
        </div>
    );
};

const Results = (props: Props) => {
    return (
        <div className="bg-white-200 flex-1 h-full gap-6 flex flex-col">
            {data.map((item) => (
                <ResultCard
                    key={item.id}
                    name={item.name}
                    address={item.address}
                    city={item.city}
                    zip={item.zip}
                />
            ))}
        </div>
    );
};

export default Results;
