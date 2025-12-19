
const DayTexts = ["일", "월", "화", "수", "목", "금", "토"];

export function GetDayText(TargetDt: string){
    const NewDates = new Date(TargetDt);
    const nums = NewDates.getDay();

    return DayTexts[nums];
};

