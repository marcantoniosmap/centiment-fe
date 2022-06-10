import ReactLoading from "react-loading"

export default function DashboardCardLoading(){

    return(
        <div className="h-100 w-100 d-flex justify-content-center align-items-center">
            
            <div className="d-flex flex-column align-items-center">
            <ReactLoading type="bars" color="#2467DB"/>
            <span> Getting your data ready..</span>

            </div>
        </div>
    )
}