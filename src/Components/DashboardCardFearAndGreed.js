import ReactSpeedometer from "react-d3-speedometer"

export default function DashboardCardFearAndGreed(){

    const library={
        'Extreme Fear':'#E35B5B',
        'Fear':'#DC8444',
        'Neutral':'#D1C51F',
        'Greed':'#71AA3C',
        'Extreme Greed':'#0E8D5A',

    }
    const data=[
      {
        time: 'Now',
        score: 40,
        text : 'Fear'
      },
      {
        time: 'Yesterday',
        score: 24,
        text: 'Extreme Fear'
      },
      {
        time: 'Last Week',
        score: 75,
        text : 'Greed'
      },
      {
        time: 'Last Month',
        score: 81,
        text : 'Extreme Greed'
      },
]
    return(
        <div className="w-100 h-100 row m-0">
            <div className="col-lg-7 px-0 pt-3">
            <ReactSpeedometer
                value={40}
                fluidWidth={true}
                height={500}
                maxValue={100}
                needleHeightRatio={0.7}
                currentValueText={'Index : ${value}'}
                segmentColors={['#E35B5B','#DC8444','#D1C51F','#71AA3C','#0E8D5A']}
                ringWidth={48}
                needleTransitionDuration={3333}
                needleTransition="easeElastic"
                needleColor="#585858"
                maxSegmentLabels={0}
                />
            </div>
            <div className="col-lg-5">
                <div className="d-flex flex-column">
                    {data.map((singleItem,index)=>(
                        <div key={index}>
                        <div className="py-2">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="fearAndGreedTextUp">{singleItem.time}</p>
                                    <p className="fearAndGreedTextBottom" style={{color:library[singleItem.text]}}>{singleItem.text}</p>
                                </div>
                                <div className="fearAndGreedTextNumber d-flex justify-content-center align-items-center" style={{backgroundColor:library[singleItem.text]}}>{singleItem.score}</div>
                            </div>
                            
                        </div>
                            <hr className="fearAndGreedLine"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}