import { FunctionComponent, createElement } from "react";
import { LineChart } from "./components/LineChart";
import moment from "moment";

import { TimelineChartContainerProps } from "../typings/TimelineChartProps";

import "./ui/TimelineChart.css";

const TimelineChart: FunctionComponent<TimelineChartContainerProps> = ({ data, dataTime, dataValue }) => {
    if (!data || data.status !== "available" || !data.items || !dataTime || !dataValue) {
        return null;
    }

    const plotData: any[] = data.items.map(item => {
        const x = moment(dataTime.get(item).value);
        const y = dataValue.get(item).value?.toNumber();
        return { x, y };
    });

    return (
        <div className="chart-container">
            <LineChart data={plotData} />
        </div>
    );
};

export default TimelineChart;
