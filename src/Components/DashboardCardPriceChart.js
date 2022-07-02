import { createChart,ColorType } from "lightweight-charts"
import { useRef, useEffect } from "react";
import { ma } from "moving-averages";
import { useDashboard } from "../DashboardContext";

export default function DashboardCardPriceChart(){

	const {widgetPrice_data}=useDashboard()
	
	const backgroundColor = 'white'
	const lineColor = '#2962FF'
	const textColor = 'black'
	const areaTopColor = '#2962FF'
	const areaBottomColor = 'rgba(41, 98, 255, 0.28)'

    function getMovingAverage(data,maNum){
        var temparaay=[]
        var outputArray=[]
        data.map((singleData,index)=>{
            temparaay.push(singleData.close)
        })
        const movingAverage = ma(temparaay,maNum)

        data.map((singleData,index)=>{
            outputArray.push({
                time:singleData.time,
                value:movingAverage[index]
            })
        })

        return outputArray
    }


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
				height: 480,
				localization:{
					timeFormatter : businessDayOrTimestamp =>{
						return Date(businessDayOrTimestamp).slice(0,24)
					}
				}

			});
			chart.timeScale().fitContent();

			const newSeries = chart.addCandlestickSeries();
			newSeries.setData(widgetPrice_data);

            // const movingAverage = chart.addLineSeries({color:'#BFE3C0', lineWidth:'1'});
            // movingAverage.setData(getMovingAverage(widgetPrice_data,20))
            // chart.priceScale(movingAverage)

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);

				chart.remove();
			};
		},
		[widgetPrice_data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
	);

	return (
		<div
			ref={chartContainerRef}
		/>
	);
};

