import { Link } from "react-router-dom"

export default function AboutUsIcons(){


    const icons=[
        {
            imageUrl:'pipeline',
            text:'Continous Data Pipeline'
        },
        {
            imageUrl:'robot',
            text:'Bot Tweet Filter Capabilities'
        },
        {
            imageUrl:'sentiment',
            text:'Sentiment Analysis Model'
        },
        {
            imageUrl:'visual',
            text:'Data Visualization Options'
        },
    ]
    return(
        <>
        <div className="w-100" style={{backgroundColor:'#282E39'}}>
            <div className="container py-5">
                <div className="pt-3 pb-5">
                    <h2 className="text-center text-white font-weight-bold">Our Features</h2>
                </div>
                <div className="row pb-3">
                   {
                       icons.map((singleItem,index)=>(
                           <div key={index} className="col-lg-3 col-12 pb-2 pb-lg-0">
                               <div className="d-flex align-items-center justify-content-center align-self-center">
                                   <div>
                                       <div className="d-flex justify-content-center">
                                        <img className="img-fluid m-auto"src={`../img/icon/${singleItem.imageUrl}.svg`}/>

                                       </div>
                                    <p className="text-white " style={{fontSize:'1.1rem'}}>{singleItem.text}</p>

                                   </div>
                                </div>
                            </div>
                       ))
                   }
                </div>
                <div className="d-flex justify-content-center pt-3">
                    <Link className="btn btn-light font-weight-bold py-3" to='/register'>Create an Account</Link>
                </div>
            </div>
            
        </div>
        </>
    )
}