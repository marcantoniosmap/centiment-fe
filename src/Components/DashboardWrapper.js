import { useEffect } from "react";
import { DashboardProvider } from "../DashboardContext";
import DashboardView from "../View/DashboardView";

export default function DashboardWrapper(){
    
    return(
        <DashboardProvider>
            <DashboardView/>
        </DashboardProvider>
    )
}