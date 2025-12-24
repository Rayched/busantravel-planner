
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
};

type ToDos = {
    openTm: string,
    endTm: string,
    ToDoText: string
};

export interface I_DailyPlan {
    FullDate: string;
    ToDos: ToDos[];
};

export const DailyPlans: I_DailyPlan[] = [
    {
        FullDate: "2026-01-15",
        ToDos: [
            {openTm: "07:00", endTm: "08:50", ToDoText: "기상 및 준비 시작"},
            {openTm: "09:00", endTm: "09:30", ToDoText: "예상 출발 시간"},
            {openTm: "10:30", endTm: "10:40", ToDoText: "수원역 도착"},
            {openTm: "10:47", endTm: "13:35", ToDoText: "수원 → 부산, KTX"},
            {openTm: "13:40", endTm: "14:30", ToDoText: "부산 도착, 점심 식사"},
            {openTm: "14:35", endTm: "15:20", ToDoText: "부산역 → 광안리"},
            {openTm: "15:20", endTm: "16:00", ToDoText: "체크인 전 대기"},
            {openTm: "16:00", endTm: "16:20", ToDoText: "체크인 및 출사 준비"},
            {openTm: "16:25", endTm: "17:40", ToDoText: "광안리 → 감천 문화마을"},
            {openTm: "17:45", endTm: "18:30", ToDoText: "감천 문화마을 출사"},
            {openTm: "18:35", endTm: "18:40", ToDoText: "1일차 일정 종료"},
        ]
    }, {
        FullDate: "2026-01-16",
        ToDos: [
            {openTm: "", endTm: "", ToDoText: ""},
            {openTm: "", endTm: "", ToDoText: ""},
            {openTm: "", endTm: "", ToDoText: ""},
            {openTm: "", endTm: "", ToDoText: ""},
            {openTm: "", endTm: "", ToDoText: ""},
            {openTm: "", endTm: "", ToDoText: ""},
            {openTm: "", endTm: "", ToDoText: ""},
            {openTm: "", endTm: "", ToDoText: ""},
            {openTm: "", endTm: "", ToDoText: ""},
            {openTm: "", endTm: "", ToDoText: ""},
        ]
    }, {
        FullDate: "2026-01-17",
        ToDos: [
            {openTm: "", endTm: "", ToDoText: ""},
            {openTm: "", endTm: "", ToDoText: ""},
            {openTm: "", endTm: "", ToDoText: ""},
            {openTm: "", endTm: "", ToDoText: ""},
            {openTm: "", endTm: "", ToDoText: ""},
            {openTm: "", endTm: "", ToDoText: ""},
            {openTm: "", endTm: "", ToDoText: ""},
            {openTm: "", endTm: "", ToDoText: ""},
            {openTm: "", endTm: "", ToDoText: ""},
            {openTm: "", endTm: "", ToDoText: ""},
        ]
    }
];