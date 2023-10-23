import React from "react";
import Chart, { Props } from "react-apexcharts";

type TagChartProps = {
    tagsData: { [key: string]: number };
};

export const Steam: React.FC<TagChartProps> = ({ tagsData }) => {

    const seriesData: Props["series"] = [{
        name: "Tags Count",
        data: Object.values(tagsData)
    }];
    const categories: string[] = Object.keys(tagsData);

    const options: Props["options"] = {
        colors: ['red', 'blue'], // これは各シリーズの色を指定します。複数のシリーズがある場合、配列の形で色を指定します。
        plotOptions: {
            bar: {
                colors: {
                    ranges: [
                        { from: 0, to: 50, color: 'green' },
                        { from: 51, to: 100, color: 'yellow' },
                        { from: 101, to: 200, color: 'red' }
                    ]
                }
            }
        },
        chart: {
            type: "bar",
            animations: {
                easing: "linear",
                speed: 300,
            },
            fontFamily: "Inter, sans-serif",
            foreColor: "hsl(var(--nextui-default-800))",
            stacked: true,
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: categories,
            labels: {
                style: {
                    colors: "hsl(var(--nextui-default-800))",
                    fontFamily: "Inter, sans-serif",
                },
            },
        },
        yaxis: {
            title: {
                text: 'トレンド入り話題'
            }
        },
        grid: {
            show: true,
            borderColor: "hsl(var(--nextui-default-200))",
            strokeDashArray: 0,
            position: "back",
        }
    };

    return (
        <div className="flex justify-center items-center w-full h-full">
            <div id="chart">
                <Chart options={options} series={seriesData} type="bar" height={425} width={800} />
            </div>
        </div>
    );
};
