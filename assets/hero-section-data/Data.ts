import { CardData } from "@/types/hero-section-card"
import { Bandage, Hospital, Microscope, Stethoscope } from "lucide-react-native"
export const CardItem: CardData[] = [
    {
        id: 1,
        title: "Doctors",
        icon: Stethoscope,
        off: false,
        offValue: 0
    },
    {
        id: 2,
        title: "Lab Tests",
        icon: Microscope,
        off: false,
        offValue: 0
    },
    {
        id: 3,
        title: "Hospitals",
        icon: Hospital,
        off: false,
        offValue: 0
    },
    {
        id: 4,
        title: "Pharmacy",
        icon: Bandage,
        off: false,
        offValue: 0
    },
]