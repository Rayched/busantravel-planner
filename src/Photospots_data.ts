//Photospot's data

import { create } from "zustand";

interface I_PhotospotStore {
    testvalue: string[];
    setValue: (newValue: string) => void;
};

interface I_ShowNestedStore {
    ShowNested: boolean;
    setShowNested: (value: boolean) => void;
};

export const PhotospotStore = create<I_PhotospotStore>((set) => ({
    testvalue: [],
    setValue: (newValue) => set((state) => ({
        testvalue: [...state.testvalue, newValue]
    }))
}));

export const ShowNestedStore = create<I_ShowNestedStore>((set) => ({
    ShowNested: false,
    setShowNested: (value) => set({ShowNested: value})
}));