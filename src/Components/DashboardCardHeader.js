import { useEffect, useState } from "react"
import { CloseButton } from "react-bootstrap"
import { useDashboard } from "../DashboardContext"
import widgetLibrary from "../widgetLibrary"
import ModalCoinInfo from "./ModalCoinInfo"

export default function DashboardCardHeader({chartId,chartTitle,loc}){

    const [showSetting,setShowSetting]=useState(false)
    const [showInfo,setShowInfo]=useState(false)

    const {setModal,deleteWidget,refreshWidget,activeCoin}=useDashboard()
    
    function changeWidget(){
        setShowSetting(false)
        setModal(true,loc)
    }
    function handleDelete(){
        deleteWidget(loc)
    }   
    function handleRefresh(){
        setShowSetting(false)
        refreshWidget(chartId,activeCoin)
    }
    function handleChangeTimeframe(){
        return 0
    }
    function handleInformation(){
        setShowInfo(true)
        setShowSetting(false)
    }

    const libraryFunction={
        "Refresh Data":handleRefresh,
        "Delete Widget":handleDelete,
        "Change Timeframe":handleChangeTimeframe,
        "Change Widget":changeWidget,
        "Information":handleInformation


    }
    return(
        <div className="dashboardCardHeader d-flex justify-content-between">
            <span className="dashboardCardTitle">{chartTitle}</span>
            <div className="dashboardCardDots" onClick={()=>setShowSetting(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="20" height="6" viewBox="0 0 20 6">
                    <defs>
                        <clipPath id="clip-Artboard_8">
                        <rect width="20" height="6"/>
                        </clipPath>
                    </defs>
                    <g id="Artboard_8" data-name="Artboard – 8" clipPath="url(#clip-Artboard_8)">
                        <rect width="20" height="6" fill="#fff"/>
                        <g id="Group_141" data-name="Group 141" transform="translate(-0.131 -0.023)">
                        <circle id="Ellipse_1" data-name="Ellipse 1" cx="2" cy="2" r="2" transform="translate(1.131 1.023)" fill="#878787"/>
                        <circle id="Ellipse_1-2" data-name="Ellipse 1" cx="2" cy="2" r="2" transform="translate(8.131 1.023)" fill="#878787"/>
                        <circle id="Ellipse_1-3" data-name="Ellipse 1" cx="2" cy="2" r="2" transform="translate(15.131 1.023)" fill="#878787"/>
                        </g>
                    </g>
                </svg>
            </div>
            <ModalCoinInfo
                show={showInfo}
                onHide={()=>setShowInfo(false)}
                chartId={chartId}
                />
                <div className={`settingpopup ${showSetting ? 'helo':'d-none'}`} >
                    <div className="d-flex flex-column justify-content-between h-100">

                        {
                            widgetLibrary[chartId].activities.map((singleItem,index)=>(
                                <div key={index} className="settingpopupchild py-2" onClick={libraryFunction[singleItem]}>
                                <span className="px-3">{singleItem}</span>
                            </div>
                            ))
                        }

                    </div>
                    <div className="settingpopupclose" onClick={()=>setShowSetting(false)}>
                        <CloseButton/>
                    </div>
                </div>
        </div>
    )
}