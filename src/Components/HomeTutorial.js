import Slider from "react-slick/lib/slider";

export default function HomeTutorial(){

    const settings = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        adaptiveHeight:true,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
      };

      const tutorialContent=[
          {
            title:'Creating an Account',
            text:'Before you start visualizing, it is best to create an account by visiting /login, and create a new account if you did not have any. Creating an account lets you keep your widget options and more utilities!',

          },
          {
            title:'Selecting a Widget',
            text:'Once landed in our dashboard, you would be served by our basic preset dashboard configuarion with two empty slots. Choosing the right widget for you, try every each one of them and see the Centiment magic!',
            
          },
          {
            title:'Selecting your Coin',
            text:'We provide 7 biggest coin at the moment, pick the coin you desired to analyze in just 3 clicks by changing it in the coin information widget.',
          },
          {
            title:'Analyze and Learn',
            text:'Here come the last step but the most crucial part in using Centiment, is too analyze all the data served back to you. You can always tweek around which widgets suits you and what timeframe you want the data to be shown on the chart. Get use to the widget information and learn what this might correlate to the current crypto market.',
          },
      ]
    return(
        <div className="container container-xl-custom py-5 px-5">
            <h1 className="font-weight-bold pt-3 pb-lg-5 pb-1    text-center">How to use <span className="text-primary">Centiment</span>?</h1>
            <div className="row">
                <div className="col-lg-5 d-lg-block d-none">
                    <img src="../img/Tutorial Image.png" alt="person" className="img-fluid"/>
                </div>
                <div className="col-lg-7 ps-3 col-12">
                    <div className="process process-vertical py-4">
                    {
                    tutorialContent.map((singleItem,index)=>(
                        <div className="process-step" key={index}>
                            <div className="process-step-circle">
                                <strong className="process-step-circle-content">{index+1}</strong>
                            </div>
                            <div className="process-step-content px-2">
                                <h4 className="mb-1 mt-2 text-4 font-weight-bold">{singleItem.title}</h4>
                                <p className="mb-0 opacity-75">{singleItem.text}</p>
                            </div>
                        </div>
                    ))
                    }

                    </div>
                </div>
                
            </div>
           
    
        </div>
    )
}