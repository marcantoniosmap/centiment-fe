import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

export default function AboutUsProfile(){

    return(
        <div className="container container-xl-custom py-4">
        <div className="row py-lg-5 mt-5">  
          
            <div className="col-lg-6 px-5 col-12">
                <div className="position-relative px-2">
                    <div>
                        <img className="floatingImage img-fluid" src="../img/picturemarc.png" alt="" />
                    </div>
                
                </div>
            </div>
            <div className="col-lg-6 ps-lg-5 mb-3 mb-lg-0 d-flex align-items-center" >
                <div>    
                    <h1 className="font-weight-bold text-color-dark line-height-1 mb-0 ">Greeting From Creator</h1>                     
                    <p className="mb-1 opacity-75 pt-2 " style={{textAlign:'justify'}} >The correlation between crypto and its sentiment own twitter is undeniably high, which makes me curious why isn't there a platform for the community to explore deeper on its sentiment, to make a firm conclusion on the current market situation.</p>
                    <p className="mb-3 opacity-75 pt-2 " style={{textAlign:'justify'}} >Centiment is a solution derived from this problem, now with centiment, we could just find the conclusion of what's happening in the crypto market. What is trending? Which coin outperforms the other this week? All of that info, just a click away...</p>
                    <p className="mb-1 pt-2 opacity-75 " >Regards, </p>
                        <p className="font-weight-bold text-primary mb-0">MARCANTONIO PURNAMA S.Kom</p>
                        <p className="font-weight-bold text-dark mb-0" style={{lineHeight:'18px'}}>Co-Founder</p>
                </div>
            </div>
        
        </div>
    
    </div>
    )
}