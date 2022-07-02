import { createChart,ColorType } from "lightweight-charts"
import { useRef, useEffect, useState } from "react";
import { useDashboard } from "../DashboardContext";

export default function DashboardCardTTVolume(){
	
	const backgroundColor = 'white'
	const lineColor = '#2962FF'
	const textColor = 'black'
	const areaTopColor = '#2962FF'
	const areaBottomColor = 'rgba(41, 98, 255, 0.28)'
    
	const chartContainerRef = useRef();

	const {widget4_data}=useDashboard()

	useEffect(
		() => {
			const handleResize = () => {
				chart.applyOptions({ width: chartContainerRef.current.clientWidth });
			};

			const chart = createChart(chartContainerRef.current, {
				layout: {
					background: { type: ColorType.Solid, color: backgroundColor },
					textColor,
				},
				width: chartContainerRef.current.clientWidth,
				height: 220,
				handleScroll:false,
				handleScale:false,
				crosshair:{
					visible:false,
					vertLine:{
						visible:false,
						labelVisible:false
					},
					horzLine:{
						visible:false,
						labelVisible:false
					}
				}
			});

			chart.priceScale('right').applyOptions({
				visible:false,
				borderVisible:false,
				entireTextOnly:true,
				scaleMargins:{
					top:0,
					bottom:0
				}
			})
			chart.timeScale().fitContent();

			const twittervolumeData=[]
			const tradevolumeData=[]
			widget4_data.map((item,index)=>{
				twittervolumeData.push({time:item.time,value:item.tweet_volume_percentage})
				tradevolumeData.push({time:item.time,value:item.trade_volume_percentage})
				
			})
			const twitterVolume = chart.addAreaSeries({ lineColor: '#0E8D5A', topColor: '#189865', bottomColor: 'rgba(255, 255, 255, 0.6)' });
			twitterVolume.setData(twittervolumeData);

			const tradeVolume = chart.addAreaSeries({ lineColor: '#E35B5B', topColor: '#EE0808', bottomColor: 'rgba(255, 255, 255, 0.6)' });
			tradeVolume.setData(tradevolumeData);

            // const movingAverage = chart.addLineSeries({color:'#BFE3C0', lineWidth:'1'});
            // movingAverage.setData(getMovingAverage(data,20))
            // chart.priceScale(movingAverage)

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);

				chart.remove();
			};
		},
		[widget4_data]
	);

	return (
		<>
		<div
			ref={chartContainerRef}
			/>
			<div className="TnTLegend row ">
				<div className="col-3"><hr className="TnTlegendLine" style={{border:'2px solid #0E8D5A', opacity:1}}/></div>
				<div className="col-9 px-0 d-flex align-items-center"><span className="TnTlegendText">Tweet Volume</span></div>
				<div className="col-3"><hr className="TnTlegendLine" style={{border:'2px solid #E35B5B', opacity:1}}/></div>
				<div className="col-9 px-0 d-flex align-items-center"><span className="TnTlegendText">Trade Volume</span></div>
			</div>
		</>
	);
};

