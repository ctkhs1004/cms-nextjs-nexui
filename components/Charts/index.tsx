import React from "react";
import Chart, { Props } from "react-apexcharts";

type SteamProps = {
    chartList: Props["series"];
};

export const Steam: React.FC<SteamProps> = ({ chartList }) => {

    const seriesData: Props["series"] = chartList || [];
    console.log('chartList', chartList)
    console.log('seriesData', seriesData);

    // @ts-ignore
    const options: Props["options"] = {
        chart: {
            type: "area",
            animations: {
                easing: "linear",
                speed: 300,
            },
            sparkline: {
                enabled: false,
            },
            brush: {
                enabled: false,
            },
            id: "basic-bar",
            fontFamily: "Inter, sans-serif",
            foreColor: "hsl(var(--nextui-default-800))",
            stacked: true,
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
            labels: {
                style: {
                    colors: "hsl(var(--nextui-default-800))",
                    fontFamily: "Inter, sans-serif",
                },
            },
            axisBorder: {
                color: "hsl(var(--nextui-nextui-default-200))",
            },
            axisTicks: {
                color: "hsl(var(--nextui-nextui-default-200))",
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: "hsl(var(--nextui-default-800))",
                    fontFamily: "Inter, sans-serif",
                },
            },
        },
        tooltip: {
            enabled: false,
        },
        grid: {
            show: true,
            borderColor: "hsl(var(--nextui-default-200))",
            strokeDashArray: 0,
            position: "back",
        },
        stroke: {
            curve: "smooth",
            fill: {
                colors: ["red"],
            },
        },
    };

    return (
        <>
            <div className="flex justify-center items-center w-full h-full">
                <div id="chart">
                    <Chart options={options} series={seriesData} type="area" height={425} width={800} />
                </div>
            </div>
        </>
    );
};
