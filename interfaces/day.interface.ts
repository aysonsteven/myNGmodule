import { IMyDate } from "./date.interface";
import { IMyMarkedDate } from "./marked-date.interface";

export interface IMyCalendarDay {
    dateObj: IMyDate;
    cmo: number;
    currDay: boolean;
    disabled: boolean;
    markedDate: IMyMarkedDate;
    highlight: boolean;
}
