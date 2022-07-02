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
			const data = [{ open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 }, { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: 1642514276 }, { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 }, { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 }, { open: 9.51, high: 10.46, low: 9.10, close: 10.17, time: 1642773476 }, { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 }, { open: 10.47, high: 11.39, low: 10.40, close: 10.81, time: 1642946276 }, { open: 10.81, high: 11.60, low: 10.30, close: 10.75, time: 1643032676 }, { open: 10.75, high: 11.60, low: 10.49, close: 10.93, time: 1643119076 }, { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 }];
			const newSeries = chart.addCandlestickSeries();
			console.log(widgetPrice_data)
			newSeries.setData(widgetPrice_data);
			chart.timeScale().fitContent();
			// chart.priceScale(newSeries)


            const movingAverage = chart.addLineSeries({color:'#BFE3C0', lineWidth:'1'});
            movingAverage.setData(getMovingAverage(widgetPrice_data,20))
            chart.priceScale(movingAverage)

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

