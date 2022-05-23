import { createChart,ColorType } from "lightweight-charts"
import { useRef, useEffect } from "react";

export default function DashboardCardTweetVolumeSentiment({data}){
	

    
	const chartContainerRef = useRef();

	useEffect(
		() => {
			const handleResize = () => {
				chart.applyOptions({ width: chartContainerRef.current.clientWidth });
			};

			const chart = createChart(chartContainerRef.current, {
					layout: { textColor: 'black', background: { type: 'solid', color: 'white' } 
				},
				width: chartContainerRef.current.clientWidth,
				height: 230,
				handleScroll:false,
				handleScale:false,
			

				
			});

			
			chart.priceScale('right').applyOptions({
				visible:true,
				borderVisible:false,
				entireTextOnly:true,
				scaleMargins:{
					top:0.2,
					bottom:0
				}
			})


			chart.timeScale().fitContent();


			const histogramSeries = chart.addHistogramSeries({ color: '#0E8D5A' });
			histogramSeries.setData(data);
			

			

            // const movingAverage = chart.addLineSeries({color:'#BFE3C0', lineWidth:'1'});
            // movingAverage.setData(getMovingAverage(data,20))
            // chart.priceScale(movingAverage)

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);

				chart.remove();
			};
		},
		[data]
	);

	return (
		<div
			ref={chartContainerRef}
		/>
	);
};

