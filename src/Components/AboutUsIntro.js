import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

export default function AboutUsIntro(){

    return(
        <div className="container container-xl-custom py-4">
        <div className="row py-lg-5 mt-5">  
            <div className="col-lg-7 pe-lg-5 mb-3 mb-lg-0 d-flex align-items-center" >
                <div>

                    
                        <h2 className="font-weight-bold text-color-dark line-height-1 mb-0 ">Analyse <span className="text-primary">
                            <Typewriter
                                options={{
                                    strings: ['BTC','ETH','BNB', 'XRP','ADA','SOL','DOGE'],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed:180
                                }}
                        /> </span>'s Market Sentiment</h2>                     
                <p className="mb-lg-4 opacity-75 pt-2" >Centiment is the worlds first Twitter Sentiment Monitoring application that is made for the cryptocurrencies community. We summarize and visualize qualitative market sentiment built on Twitter just for you!</p>
                <div className="d-flex align-items-start align-items-sm-center flex-column flex-sm-row">
                    <Link to='/dashboard' className="btn btn-primary text-white font-weight-bold px-5 py-3">TAKE A LOOK</Link>
                </div>
                </div>
            </div>
            <div className="col-lg-5 d-lg-block d-none">
                <div className="position-relative">
                    <div>
                        <img src="../img/introduction.png" className="img-fluid" alt="" />
                    </div>
                
                </div>
            </div>
        
        </div>
    
    </div>
    )
}