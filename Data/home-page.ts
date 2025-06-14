import { DoctorSepcialitiesCard, ILabTest, SymptomsCardTypes } from "@/types/types";
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


export const SelectSymptomsData: SymptomsCardTypes[] = [

    {
        id: '1',
        icon: 'fever',
        title: "Fever",
        onPress: "/wellsure" as RelativePathString
    },
    {
        id: '2',
        icon: 'hairfall',
        title: "Hairfall",
        onPress: "/wellsure" as RelativePathString
    },
    {
        id: '3',
        icon: 'joint',
        title: "Joint Pain",
        onPress: "/wellsure" as RelativePathString
    },
    {
        id: '4',
        icon: 'tooth',
        title: "Tooth Ache",
        onPress: "/wellsure" as RelativePathString
    },
    {
        id: '5',
        icon: 'skin',
        title: "Skin Infection",
        onPress: "/wellsure" as RelativePathString
    },
    {
        id: '6',
        icon: 'femaleOrg',
        title: "Periods",
        onPress: "/wellsure" as RelativePathString
    },
]

export const symptomsCardImageMap: Record<string, any> = {
    "fever": require('@/assets/home/symptoms/fever.png'),
    "hairfall": require('@/assets/home/symptoms/hairfall.png'),
    "joint": require('@/assets/home/symptoms/jointpain.png'),
    "tooth": require('@/assets/home/symptoms/tooth.png'),
    "skin": require('@/assets/home/symptoms/skinInfection.png'),
    "femaleOrg": require('@/assets/home/symptoms/femaleOrg.png'),
}

export const LabTestData: ILabTest[] = [
    {
        id: '1',
        icon: 'healthyHeart',
        title: 'Healthy Heart',
        onPress: '/wellsure' as RelativePathString
    },
    {
        id: '2',
        icon: 'fullBody',
        title: 'Full Body Check-up',
        onPress: '/wellsure' as RelativePathString
    },
    {
        id: '3',
        icon: 'ultrasound',
        title: 'Ultrasound',
        onPress: '/wellsure' as RelativePathString
    },
    {
        id: '4',
        icon: 'cancer',
        title: 'Cancer',
        onPress: '/wellsure' as RelativePathString
    },
    {
        id: '5',
        icon: 'arthritis',
        title: 'Arthritis',
        onPress: '/wellsure' as RelativePathString
    },
    {
        id: '6',
        icon: 'liver',
        title: 'Healthy Liver',
        onPress: '/wellsure' as RelativePathString
    },
]

export const labTestCardImageMap: Record<string, any> = {
    'arthritis': require("@/assets/home/lab-tests/arthritis.png"),
    'fullBody': require("@/assets/home/lab-tests/full-body.png"),
    'ultrasound': require("@/assets/home/lab-tests/ultrasound.png"),
    'cancer': require("@/assets/home/lab-tests/cancer.png"),
    'healthyHeart': require("@/assets/home/lab-tests/healthy-heart.png"),
    'liver': require("@/assets/home/lab-tests/liver.png"),
}