
const DayTexts = ["일", "월", "화", "수", "목", "금", "토"];

export function GetDayText(TargetDt: string){
    const NewDates = new Date(TargetDt);
    const nums = NewDates.getDay();

    return DayTexts[nums];
};

const modifys = (targets: number) => {
    if(targets < 10){
        return "0" + String(targets);
    } else {
        return String(targets);
    }
};

const GetNowDate = () => {
    const NowDate = new Date();
    const FullYear = NowDate.getFullYear();
    const Month = modifys(NowDate.getMonth() + 1);
    const Dates = modifys(NowDate.getDate());

    const FullDate = `${FullYear}-` + Month + "-" + Dates;

    return FullDate;
};

export const GetDiffs = (TargetDt: string) => {
    const TodayDate = GetNowDate();
    const TodayToMS = new Date(TodayDate).getTime();
    const TargetsToMS = new Date(TargetDt).getTime();

    const DiffMS = Math.floor(
        Math.abs((TargetsToMS - TodayToMS) / (24 * 60 * 60 * 1000))
    );

    if(DiffMS === 0){
        return "D-Day"
    } else {
        return `D-${DiffMS}`;
    }
};