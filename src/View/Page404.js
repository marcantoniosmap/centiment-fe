import {Link} from 'react-router-dom'
export default function Page404(){
    

    return(
       <>
       <div style={{height:'90vh'}}>
            <div className="d-flex h-100 justify-content-center align-items-center">
                <div className="px-5">
                 <img src="../img/404page.png" />
                 <h1 className="font-weight-bold text-center">Where are you going?</h1>
                 <div className='d-flex justify-content-center pt-2'>
                 <Link to="/home" className='btn btn-primary btn-lg text-white mx-auto'> Take Me Back Home</Link>
                 </div>
                </div>

            </div>
       </div>
       </>
    )
}