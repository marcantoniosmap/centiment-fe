import { Link } from "react-router-dom"

export default function HomeAboutUs(){


    
    return(
        <>
        <div className="w-100" 
                style={{
                    backgroundImage:`url(../img/parallax.jpg)`,
                    backgroundSize:'cover',
                    backgroundPosition:'center',
                    }}>
            <div className="container py-5">
                <div className="py-5">
                    <h2 className="text-center text-white font-weight-bold">Know More About Centiment</h2>
                    <p className="text-center text-white opacity-75">Explore the history and creator's vision for Centiment</p>
                    <div className="d-flex justify-content-center">
                    <Link className="btn btn-primary text-white font-weight-bold py-3" to='/aboutus'>About Us</Link>
                </div>
                </div>
               

            </div>
            
        </div>
        </>
    )
}