
export type I_Ticket = {
    ticketId: string,
    targetDt: string,
    startNm: string,
    startTm: string,
    endNm: string,
    endTm: string
};

type I_DefaultData = {
    categoryId: string,
    categoryNm: string,
    DateText: string
};

interface I_PlannerData {
    DefaultData: I_DefaultData[];
    transportData: I_Ticket[];
    hotelsData: {
        hotelNm: string;
        hotelAddress: string;
        CheckIn: {
            Dates: string;
            Times: string;
        };
        CheckOut: {
            Dates: string;
            Times: string;
        };
    };
};

export const PlannerData: I_PlannerData = {
    DefaultData: [
        {
            categoryId: "DepartureInfo",
            categoryNm: "출발 일",
            DateText: "2026-01-15"
        },
        {
            categoryId: "ReturnInfo",
            categoryNm: "복귀 일",
            DateText: "2026-01-17"
        }
    ],
    transportData: [
        {
            ticketId: "20260115start",
            targetDt: "2026-01-15",
            startNm: "수원역",
            startTm: "10:47",
            endNm: "부산역",
            endTm: "13:35"
        },
        {
            ticketId: "20260117return",
            targetDt: "2026-01-17",
            startNm: "부산역",
            startTm: "13:17",
            endNm: "수원역",
            endTm: "15:56"
        }
    ],
    hotelsData: {
        hotelNm: "광안 오션뷰 더 테라스",
        hotelAddress: "부산 수영구 광남로 94번길 16",
        CheckIn: {
            Dates: "2026-01-15",
            Times: "16:00"
        },
        CheckOut: {
            Dates: "2026-01-17",
            Times: "12:00"
        },
    }
}