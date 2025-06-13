import { DoctorSepcialitiesCard } from "@/types/types";
import { RelativePathString } from "expo-router";

export const DoctorSpecialityCardsData: DoctorSepcialitiesCard[] = [
    {
        id: "1",
        title: "General Physician",
        numberOfDocs: 502,
        icon: "general-physician",
        onPress: "/wellsure" as RelativePathString,
    },
    {
        id: "2",
        title: "Dermatologist",
        numberOfDocs: 149,
        icon: "dermatologist",
        onPress: "/wellsure" as RelativePathString,
    },
    {
        id: "3",
        title: "Gynaecologist and Obstetrician",
        numberOfDocs: 198,
        icon: "gynaecologist",
        onPress: "/wellsure" as RelativePathString,
    },
    {
        id: "4",
        title: "Paediatrician",
        numberOfDocs: 158,
        icon: "paediatrician",
        onPress: "/wellsure" as RelativePathString,
    },
    {
        id: "5",
        title: "Ayurveda",
        numberOfDocs: 155,
        icon: "ayurveda",
        onPress: "/wellsure" as RelativePathString,
    },
    {
        id: "6",
        title: "ENT",
        numberOfDocs: 60,
        icon: "ent",
        onPress: "/wellsure" as RelativePathString,
    },
    {
        id: "7",
        title: "Dentist",
        numberOfDocs: 681,
        icon: "dentist",
        onPress: "/wellsure" as RelativePathString,
    },
    {
        id: "8",
        title: "Ophthalmologist",
        numberOfDocs: 110,
        icon: "ophthalmologist",
        onPress: "/wellsure" as RelativePathString,
    },
    {
        id: "9",
        title: "Homeopath",
        numberOfDocs: 182,
        icon: "homeopath",
        onPress: "/wellsure" as RelativePathString,
    },
    {
        id: "10",
        title: "Psychiatrist",
        numberOfDocs: 49,
        icon: "psychiatrist",
        onPress: "/wellsure" as RelativePathString,
    },
];


export const doctorCardImageMap: Record<string, any> = {
    "ayurveda": require("@/assets/home/doctor-card/ayurveda.jpg"),
    "dentist": require("@/assets/home/doctor-card/dentist.jpg"),
    "dermatologist": require("@/assets/home/doctor-card/dermatologist.jpg"),
    "ent": require("@/assets/home/doctor-card/ent.jpg"),
    "general-physician": require("@/assets/home/doctor-card/general-physician.jpg"),
    "gynaecologist": require("@/assets/home/doctor-card/gynaecologist.jpg"),
    "homeopath": require("@/assets/home/doctor-card/homeopath.jpg"),
    "ophthalmologist": require("@/assets/home/doctor-card/ophthalmologist.jpg"),
    "paediatrician": require("@/assets/home/doctor-card/paediatrician.jpg"),
    "psychiatrist": require("@/assets/home/doctor-card/psychiatrist.jpg"),
};


// export const 