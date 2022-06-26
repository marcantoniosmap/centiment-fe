import Slider from "react-slick/lib/slider"
import widgetLibrary from "../widgetLibrary"

export default function HomeWidgetSlider(){

  const WidgetArray = Object.values(widgetLibrary)

  const setting ={
    className:'h-100',
    appendDots: dots => (
        <div
          style={{
            bottom: '-20px',
            color : '#fff !important'
          }}
        >
            {dots}
        </div>
      ),
    infinite: true,
    slidesToShow: 3,
    arrows:false,
    dots:true,
    slidesToScroll: 1,
    autoplay:true,
    speed:1000,
    autoplaySpeed:8000,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
}
    
    return(
       <div className="backgroundDefault pt-5">
        <div className="container">
          <h2 className="mb-3" style={{fontWeight:'600'}}>Our Widgets</h2>
          <div className=" ">
            <Slider {...setting}>

              {
                WidgetArray.map((singleItem,index)=>(
                  <div className="px-1" key={index}>
                    <img className="img-fluid" src={`../img/previewWidget/${singleItem.id}.png`} />
                    <div className="ps-3 pt-1">
                      <h6 className=" mb-0 font-weight-bold">{singleItem.title}</h6>
                      <p className="opacity-75" style={{fontSize:'0.9rem'}}>{singleItem.simpleExplanation}</p>

                    </div>
        
                  </div>
                ))
              }
            </Slider>
          
        </div>
        </div>
       </div>
    )
}