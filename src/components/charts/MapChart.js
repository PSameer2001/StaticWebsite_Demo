import React from "react";
import DatamapsIndia from "react-datamaps-india";

const MapChart = () => {
  const regionData = {
    Maharashtra: {
      name: "Maharashtra",
      value: 10,
    },
    Rajasthan: {
      name: "Rajasthan",
      value: 1000,
    },
    Gujarat: {
      name: "Gujarat",
      value: 800,
    },
    Karnataka: {
      name: "Karnataka",
      value: 700,
    },
    TamilNadu: {
      name: "TamilNadu",
      value: 190,
    },
    Kerala: {
      name: "Kerala",
      value: 890,
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg min-h-fit">
      <h3 className="text-lg font-semibold mb-4 text-center">
        India <span className="text-gray-400 mx-1">›</span> Statewise App
        Registered Users Count
      </h3>
      <div id="svgdiv">
        <DatamapsIndia
          regionData={regionData}
          hoverComponent={({ value }) => {
            return (
              value && (
                <div>
                  <div>
                    {value.name} - {value.value}
                  </div>
                </div>
              )
            );
          }}
          mapLayout={{
            startColor: "#FFDAB9",
            endColor: "#FF6347",
            noDataColor: "#f5f5f5",
            borderColor: "#8D8D8D",
            hoverBorderColor: "#8D8D8D",
            hoverColor: "green",
            height: 40,
            weight: 10,
          }}
        />
      </div>
    </div>
  );
};

export default MapChart;
