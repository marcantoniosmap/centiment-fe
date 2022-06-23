import { Link } from "react-router-dom"

export default function AboutUsCoinList(){


    const coinOption=['Bitcoin','Ethereum','Binance','Ripple','Cardano','Solana','Dogecoin']


    
    return(
        <>
        <div className="w-100" 
                style={{
                    backgroundColor:`#2467DB`,
                    }}>
            <div className="container py-5">
                <div className="py-5">
                    <div className="d-flex justify-content-center py-2">                     
                    {
                        coinOption.map((singleItem,index)=>(
                            <img  key={index} className="px-1" src={`../img/icon/${singleItem}.png`}/>
                        ))
                    }
                    </div>
                    <h2 className="text-center text-white font-weight-bold">Summary in a single View?</h2>
                    <p className=" mb-0 text-center text-white opacity-75">Now you could see our 7 coin performance in one go!</p>
                    <div className="d-flex justify-content-center pt-3">
                    <Link className="btn btn-light text-primary font-weight-bold py-3" to='/aboutus'>See Coin's Table</Link>
                </div>
                </div>
               

            </div>
            
        </div>
        </>
    )
}