import { IMyCalendarDay } from "./day.interface";

export interface IMyWeek {
    week: Array<IMyCalendarDay>;
    weekNbr: number;
}
