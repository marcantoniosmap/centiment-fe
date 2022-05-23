import { useEffect, useState } from "react"
import { CloseButton } from "react-bootstrap"
import { useDashboard } from "../DashboardContext"

export default function DashboardCardHeader({chartTitle,loc}){

    const [showSetting,setShowSetting]=useState(false)

    const {setModal,deleteWidget}=useDashboard()
    
    function changeWidget(){
        setShowSetting(false)
        setModal(true,loc)
    }
    function handleDelete(){
        deleteWidget(loc)
    }    
    const settingText=['Refresh','Edit Coin Option','Change Widget','Delete Widget','Information']
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
                    <g id="Artboard_8" data-name="Artboard – 8" clip-path="url(#clip-Artboard_8)">
                        <rect width="20" height="6" fill="#fff"/>
                        <g id="Group_141" data-name="Group 141" transform="translate(-0.131 -0.023)">
                        <circle id="Ellipse_1" data-name="Ellipse 1" cx="2" cy="2" r="2" transform="translate(1.131 1.023)" fill="#878787"/>
                        <circle id="Ellipse_1-2" data-name="Ellipse 1" cx="2" cy="2" r="2" transform="translate(8.131 1.023)" fill="#878787"/>
                        <circle id="Ellipse_1-3" data-name="Ellipse 1" cx="2" cy="2" r="2" transform="translate(15.131 1.023)" fill="#878787"/>
                        </g>
                    </g>
                </svg>
            </div>
                <div className={`settingpopup ${showSetting ? 'helo':'d-none'}`} >
                    <div className="d-flex flex-column justify-content-between h-100">

                        <div className="settingpopupchild py-2" onClick={changeWidget}>
                            <span className="px-3">Change Widget</span>
                        </div>
                        <div className="settingpopupchild py-2" onClick={handleDelete}>
                            <span className="px-3">Delete Widget</span>
                        </div>
                        {/* {
                            settingText.map((singleItem,index)=>(
                                <div className="settingpopupchild py-2" onClick={()=>handleClick()}>
                                    <span className="px-3">{singleItem}</span>
                                </div>
                            ))
                        } */}

                    </div>
                    <div className="settingpopupclose" onClick={()=>setShowSetting(false)}>
                        <CloseButton/>
                    </div>
                </div>
        </div>
    )
}