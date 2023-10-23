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
        plotOptions: {
            bar: {
                distributed: true,
                colors: {
                    ranges: [
                        { from: 0, to: 10, color: '#FF5733' },
                        { from: 11, to: 200, color: '#33FF57' },
                        { from: 200, to: 1000, color: '#5733FF' },
                    ]
                }
            }
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
