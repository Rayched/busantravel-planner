
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
    ToDoText: string|string[]
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
            {openTm: "13:40", endTm: "14:30", ToDoText: "부산 도착, 광안리 이동"},
            {openTm: "14:30", endTm: "15:55", ToDoText: "점심 식사, 광안리 출사"},
            {openTm: "16:00", endTm: "16:20", ToDoText: "체크인 및 출사 준비"},
            {openTm: "16:25", endTm: "17:40", ToDoText: "광안리 → 감천 문화마을"},
            {openTm: "17:45", endTm: "18:30", ToDoText: "감천 문화마을 출사"},
            {openTm: "18:35", endTm: "18:40", ToDoText: "1일차 일정 종료"},
        ]
    }, {
        FullDate: "2026-01-16",
        ToDos: [
            {openTm: "07:30", endTm: "09:30", ToDoText: "기상, 식사, 출사 준비"},
            {openTm: "09:30", endTm: "10:40", ToDoText: "광안리 → 흰여울"},
            {openTm: "10:45", endTm: "13:00", ToDoText: "흰여울 문화마을 출사"},
            {openTm: "13:10", endTm: "14:50", ToDoText: "흰여울 → 청사포"},
            {openTm: "15:00", endTm: "16:15", ToDoText: "청사포 출사"},
            {openTm: "16:20", endTm: "17:00", ToDoText: "해변 열차 탑승"},
            {openTm: "17:05", endTm: "17:35", ToDoText: "해운대 도착, 짧막 출사"},
            {openTm: "17:40", endTm: "17:55", ToDoText: "식당 이동 (쿠지라멘)"},
            {openTm: "18:00", endTm: "19:00", ToDoText: "저녁 식사"},
            {openTm: "19:05", endTm: "19:40", ToDoText: "해운대 → 숙소"},
            {openTm: "19:50", endTm: "20:00", ToDoText: "2일차 일정 종료"},
            {openTm: "20:05", endTm: "22:00", ToDoText: "체크아웃 준비 1"},
        ]
    }, {
        FullDate: "2026-01-17",
        ToDos: [
            {openTm: "06:30", endTm: "06:50", ToDoText: "기상 및 출사 준비"},
            {openTm: "07:05", endTm: "07:40", ToDoText: "광안리 일출 출사"},
            {openTm: "08:00", endTm: "09:30", ToDoText: "체크아웃 준비 2"},
            {openTm: "09:40", endTm: "11:00", ToDoText: "여행 정산"},
            {openTm: "11:10", endTm: "12:00", ToDoText: "광안리 → 부산역"},
            {openTm: "12:05", endTm: "13:00", ToDoText: "점심 식사"},
            {openTm: "13:17", endTm: "15:56", ToDoText: "부산 → 수원, KTX"},
            {openTm: "16:10", endTm: "17:30", ToDoText: "수원역 도착, 복귀"},
        ]
    }
];