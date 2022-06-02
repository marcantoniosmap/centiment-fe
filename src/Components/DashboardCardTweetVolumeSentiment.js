import { createChart,ColorType } from "lightweight-charts"
import { useRef, useEffect, useState } from "react";
import { useDashboard } from "../DashboardContext";

export default function DashboardCardTweetVolumeSentiment({loc,refreshTrigger}){
	
	
	const {getWidgetData,widget1_data}=useDashboard()
	const chartContainerRef = useRef();
	// const [data,setData]=useState(getWidgetData('widget-1'))
	
	
	useEffect(
		() => {
			// setData(getWidgetData('widget-1'))
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
			histogramSeries.setData(widget1_data);
			

			

            // const movingAverage = chart.addLineSeries({color:'#BFE3C0', lineWidth:'1'});
            // movingAverage.setData(getMovingAverage(data,20))
            // chart.priceScale(movingAverage)

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);

				chart.remove();
			};
		},
		[refreshTrigger,widget1_data]
	);

	return (
		<div
			ref={chartContainerRef}
		/>
	);
};

