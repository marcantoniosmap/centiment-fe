import { Link } from "react-router-dom"
import Slider from "react-slick"

export default function AboutUsSlick(){

    const sliderContent=[

        {imageUrl: '/img/slider/slider-1.png',
        Textline1 : 'Visualizing Market Centiment',
        Textline2 : 'By integrating Twitter Data',
        Paragraph : 'We integrate market sentiment formed in the Twitter to the existing price chart used in technical analysis',
        CTA : 'Create Account',
        CTAlink : '/register',
        whiteText:false
        },

        {imageUrl: '/img/slider/slider-2.jpg',
        Textline1 : 'Customized Widget for a Better ',
        Textline2 : 'Understanding the Market Condition',
        Paragraph : 'Centiment will not only provide a single technical indicator but multiple widgets in a dashboard format',
        CTA : 'Startup Dashboard',
        CTAlink : '/dashboard',
        whiteText:false
        },

        {imageUrl: '/img/slider/slider-3.png',
        Textline1 : 'Capturing The Real Sentiment',
        Textline2 : 'of the Seven biggest Coin ',
        Paragraph : 'Centiment will serve you precise data of the seven biggest coin sorted by market capitalization.',
        CTA : 'Explore Coin',
        CTAlink : '/home',
        whiteText:false
        },
    ]
    const setting ={
        className:'h-100',
        appendDots: dots => (
            <div
              style={{
                bottom: '30px',
                color : '#fff !important'
              }}
            >
                {dots}
            </div>
          ),
        infinite: true,
        slidesToShow: 1,
        arrows:false,
        dots:true,
        slidesToScroll: 1,
        autoplay:true,
        dotsClass: 'slick-dots button__bar',
        speed:1000,
        autoplaySpeed:8000,
        adaptiveHeight: true
    }
    return(
        <>
        <div style={{height:'calc(100vh - 100px)', display:'block',width:'100%',position:'relative'}}>
            <Slider {...setting}>
            {sliderContent.map((content,index)=>
            <div key={index}>
                    <div  className="overlay overlay-show overlay-op-7 pt-5" style={{backgroundImage:`url(${content.imageUrl})`,backgroundSize:'cover',backgroundPosition:'center',height:'calc(100vh - 100px', boxSizing:'border-box'}} >
                        <div className="container container-xl-custom pt-5 h-100">
						    <div className="row align-items-center pt-5 h-100">
							    <div className={`col `}>
                                    {
                                        content.additional ?
                                         content.additional :
                                         <>
                                        <h1 className="text-white text-8 text-lg-12 line-height-2 mb-2">
                                            <span>{content.Textline1}<br/> 
                                                <span style={{fontWeight:600}}>{content.Textline2}</span>
                                            </span>
                                        </h1>
								        <p className="text-4 text-white text-lg-4-5 font-weight-light opacity-9 mb-4  " style={{maxWidth:'700px'}} >{content.Paragraph}</p>
                                    {   
                                         content.CTA &&<Link to={content.CTAlink} className="btn btn-primary btn-modern font-weight-bold text-white text-3 py-3 btn-px-5 mt-2">{content.CTA}<i className="fas fa-arrow-right ms-2"></i></Link>
                                    }
                                    </>
                                    }
							    </div>
						    </div>
					    </div>
					</div>
                    </div>
        )}

            </Slider>

        </div>
        </>
    )
}