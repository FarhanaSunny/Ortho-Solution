import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom"
import records from "../../../data/records.json";
import Records from "./Records";

function ReportPage() {
    const navigate = useNavigate();

    return (
    <div>
        {records.map((item) => (
                <Records
                patientName ={item.patientName}
                trackerNumber={item.trackerNumber}
                initiallyBondedBy={item.initiallyBondedBy}
                initialBondingDate={item.initialBondingDate}
                rebondedToothNo={item.rebondedToothNo}
                rebondedBy={item.rebondedBy}
                rebondingDate={item.rebondingDate}
                additionalComment={item.additionalComment}
                />

            ))}

    </div>

    )
}

export default ReportPage 