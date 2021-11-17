import { FunctionComponent, createElement } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-moment";

export interface LineChartProps {
    data: Array<{ x: number; y: any }>;
}

export const LineChart: FunctionComponent<LineChartProps> = ({ data }) => {
    const dataOpt = {
        datasets: [
            {
                label: "# of Votes",
                data,
                fill: false,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgba(255, 99, 132, 0.2)"
            }
        ]
    };

    const options: any = {
        scales: {
            x: {
                type: "time"
            },
            y: {
                beginAtZero: true
            }
        }
    };
    console.info("PLOT", data);

    return (
        <div className="chart-container">
            <Line data={dataOpt} options={options} />
        </div>
    );
};
