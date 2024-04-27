"use client";
import React from "react";
import sampledata from "@/Components/Firebase/sampledata";

import CardChartComponent from "@/Components/CardsCharts/CardChartComponent";
import LGTableComponent from "@/Components/Tables/lgTableComponent/lgTableComponent";
import LGTableModal from "@/Components/Tables/lgTableComponent/lgTableModal";

const UsersView = () => {
  return (
    <>
      <LGTableComponent
        tableTitle="Vista general de hermanos"
        tableData={sampledata}
      />
    </>
  );
};

export default UsersView;
