/**
 * This file was generated from TimelineChart.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue, ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface TimelineChartContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    data: ListValue;
    dataTime: ListAttributeValue<Date>;
    dataValue: ListAttributeValue<Big>;
    color: DynamicValue<string>;
}

export interface TimelineChartPreviewProps {
    class: string;
    style: string;
    data: {} | { type: string } | null;
    dataTime: string;
    dataValue: string;
    color: string;
}
