import { createChart,ColorType } from "lightweight-charts"
import { useRef, useEffect } from "react";

export default function DashboardCardTTVolume({data}){
	
	const backgroundColor = 'white'
	const lineColor = '#2962FF'
	const textColor = 'black'
	const areaTopColor = '#2962FF'
	const areaBottomColor = 'rgba(41, 98, 255, 0.28)'
    
	const chartContainerRef = useRef();

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
				height: 230,

			});
			chart.timeScale().fitContent();

			const twittervolumeData=[]
			const tradevolumeData=[]
			data.map((item,index)=>{
				twittervolumeData.push({time:item.time,value:item.twitter_volume})
				tradevolumeData.push({time:item.time,value:item.trade_volume})
				
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
		[data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
	);

	return (
		<div
			ref={chartContainerRef}
		/>
	);
};

