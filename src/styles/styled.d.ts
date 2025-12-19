import "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        bgColor: string;
        TextColor: string;
        ItemColor: string;
        ItemTextColor: string;
        ItemActiveColor: string;
    };
};