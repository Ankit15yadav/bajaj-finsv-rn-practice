import { CardData } from "@/types/types";
export const CardItem: CardData[] = [
    {
        id: 1,
        title: "Doctors",
        icon: 'doctor-svgrepo.png',
        off: false,
        offValue: 0
    },
    {
        id: 2,
        title: "Lab Tests",
        icon: 'microscope.png',
        off: false,
        offValue: 0
    },
    {
        id: 3,
        title: "Hospitals",
        icon: 'hospital.png',
        off: false,
        offValue: 0
    },
    {
        id: 4,
        title: "Pharmacy",
        icon: 'pharmacy.png',
        off: false,
        offValue: 0
    },
]

export const imageMap: Record<string, any> = {
    "doctor-svgrepo.png": require("@/assets/images/doctor-svgrepo.png"),
    "microscope.png": require("@/assets/images/microscope.png"),
    "hospital.png": require("@/assets/images/hospital.png"),
    "pharmacy.png": require("@/assets/images/pharmacy.png"),
};
