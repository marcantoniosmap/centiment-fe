import { useAuth } from "../AuthContext"
import { useDashboard } from "../DashboardContext"

export default function DashboardCardEmpty({loc}){

    const {isAuthenticated,setModal,setLoginModalFunc}=useAuth()

    function handleAddWidget(){
        if (isAuthenticated){
            setModal(true,loc)
        }
        else{
            setLoginModalFunc(true)
        }
    }


    return(
        <div className="emptyOuterWrapper" onClick={handleAddWidget}>
            <div className="dashboardCardEmptyOuter d-flex justify-content-center align-items-center">
                <div>
                    <div className="d-flex justify-content-center h-100">
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="80" height="80" viewBox="0 0 80 80">
                            <defs>
                                <clipPath id="clip-Artboard_9">
                                <rect width="80" height="80"/>
                                </clipPath>
                            </defs>
                            <g id="Artboard_9" data-name="Artboard – 9" clipPath="url(#clip-Artboard_9)">
                                <rect width="80" height="80" fill="#fff"/>
                                <path id="Path_69" data-name="Path 69" d="M42,2A40,40,0,1,0,82,42,40,40,0,0,0,42,2Zm0,72A32,32,0,1,1,74,42,32,32,0,0,1,42,74ZM58,38H46V26a4,4,0,1,0-8,0V38H26a4,4,0,1,0,0,8H38V58a4,4,0,0,0,8,0V46H58a4,4,0,0,0,0-8Z" transform="translate(-2 -2)" fill="#d1d5df"/>
                            </g>
                        </svg>
                    </div>
                    <h4 className="dashboardCardEmptyText pt-2">Add Widget</h4>
                </div>
            </div>
            
        </div>
    )
}