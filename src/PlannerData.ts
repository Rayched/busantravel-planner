interface I_DayPlan {
    Times: string;
    ToDos: string;
};

export const FirstDayPlan: I_DayPlan[] = [
    {Times: "10:47 ~ 13:35", ToDos: "수원역 → 부산역 (KTX)"}
];

interface I_HotelInfos {
    HotelName: string;
    HotelAddress: string;
    CheckIn: {
        Dates: string;
        Times: string;
    }
    CheckOut: {
        Dates: string;
        Times: string;
    };
};

export const HotelInfos: I_HotelInfos = {
    HotelName: "광안 오션뷰 더 테라스",
    HotelAddress: "부산광역시 수영구 광남로 94번길 16",
    CheckIn: {
        Dates: "2026-01-15",
        Times: "16:00"
    },
    CheckOut: {
        Dates: "2026-01-17",
        Times: "12:00"
    }
};