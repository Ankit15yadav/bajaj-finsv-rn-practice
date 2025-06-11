// ─── Data/home-page-doctor-cards.ts ────────────────────────────────────────────
import { DoctorCardsHomepage } from "@/types/types";
import { RelativePathString } from "expo-router";

export const DoctorCards: DoctorCardsHomepage[] = [
    {
        id: "1",
        icon: "image-1",
        onPress: "/wellsure" as RelativePathString,
    },
    {
        id: "2",
        icon: "image-2",
        onPress: "/wellsure" as RelativePathString,
    },
    {
        id: "3",
        icon: "image-3",
        onPress: "/wellsure" as RelativePathString,
    },
    {
        id: "4",
        icon: "image-4",
        onPress: "/wellsure" as RelativePathString,
    },
];

export const SearchSectionImageMap: Record<string, any> = {
    "image-1": require("@/assets/home/home-page-hero-section-image-4.jpg"),
    "image-2": require("@/assets/home/home-page-hero-section-image-3.jpg"),
    "image-3": require("@/assets/home/home-page-hero-section-image-2.jpg"),
    "image-4": require("@/assets/home/home-page-hero-section-image.jpg"),
};
