"use client";
import React from "react";
import dynamic from "next/dynamic";
import sampledata from "@/Components/Firebase/sampledata";

const LGTableComponent = dynamic(() =>
  import("@/Components/Tables/lgTableComponent/lgTableComponent")
);

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
