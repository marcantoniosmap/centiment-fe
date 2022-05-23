import React, {useContext, useState, useEffect} from "react"
import presetWidget from "./userWidgtet"
const DashboardContext = React.createContext()

export function useDashboard(){
    return useContext(DashboardContext)
}

export function DashboardProvider({children}){

    // const [isIndo,setIsIndo] =useState(true)
    const [widgetSetup,setWidgetSetup]=useState(presetWidget)
    const [chooseWidgetModal,setChooseWidgetModal]=useState(false)
    const [selectedLocation,setSelectedLocation]=useState(null)

    function refreshData(userID,location){
        return 0
    }
    function submitAddWidget(selectedChoice){
        if (typeof selectedChoice === 'number' && isFinite(selectedChoice)){
            var tempArray = widgetSetup;
            tempArray[selectedLocation].id= "widget-"+selectedChoice
            setWidgetSetup(tempArray)
            setModal(false,null)
        }else return
            
    }

    function setModal(command,location){
        setSelectedLocation(location)
        setChooseWidgetModal(command)
    }
    function deleteWidget(location){
        // console.log(widgetSetup)
        var tempArray = widgetSetup;
        tempArray[location].id= "none"
        setWidgetSetup(tempArray)
        setModal(false,null)
    }

   
    const value ={
        widgetSetup,
        chooseWidgetModal,
        setModal,
        submitAddWidget,
        deleteWidget
    }

    return (
        <DashboardContext.Provider value={value}>
            {children}
        </DashboardContext.Provider>
    )

}