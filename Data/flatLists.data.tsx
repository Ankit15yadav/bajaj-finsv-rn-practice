import { ITopHospitals } from "@/types/types";

export const TopHospitalsData: ITopHospitals[] = [
    {
        id: 1,
        image: 'deccan',
        logo: '',
        name: 'Deccan Hardikar Hospital - Sushrut Medical Care And Research Society',
    },
    {
        id: 2,
        image: 'rubyHall',
        logo: '',
        name: 'Ruby Hall Clinic - Sassoon Road',
    },
    {
        id: 3,
        image: 'nobel',
        logo: '',
        name: 'Noble Hospital',
    },
    {
        id: 4,
        image: 'manipalKharadi',
        logo: '',
        name: 'Manipal Hospital - Kharadi',
    },
    {
        id: 5,
        image: 'manipalBaner',
        logo: '',
        name: 'Manipal Hospital - Baner',
    },
    {
        id: 6,
        image: 'pearl',
        logo: '',
        name: "Pearl Women's Hospital & Yash IVF India Pvt Ltd",
    },
    {
        id: 7,
        image: 'onpPrime',
        logo: '',
        name: 'ONP Prime Hospital',
    },
    {
        id: 8,
        image: 'poonaEye',
        logo: '',
        name: 'Poona Eye Care',
    },
    {
        id: 9,
        image: 'jehangir',
        logo: '',
        name: 'Jehangir Hospital',
    },
    {
        id: 10,
        image: 'gems',
        logo: '',
        name: 'Gems Hospital & Endoscopy Centre',
    },
];


export const TopHospitalDataImageMap: Record<string, any> = {
    'deccan': require('@/assets/home/top-hospitals/deccan-hardikar.png'),
    'rubyHall': require('@/assets/home/top-hospitals/ruby-hall.png'),
    'nobel': require('@/assets/home/top-hospitals/nobel-hospital.png'),
    'manipalKharadi': require('@/assets/home/top-hospitals/manipal-kharadi.png'),
    'manipalBaner': require('@/assets/home/top-hospitals/manipal-baner.png'),
    'pearl': require('@/assets/home/top-hospitals/pearl-women.png'),
    'onpPrime': require('@/assets/home/top-hospitals/onp-prime.png'),
    'poonaEye': require('@/assets/home/top-hospitals/poona-eye.png'),
    'jehangir': require('@/assets/home/top-hospitals/jehangir.png'),
    'gems': require('@/assets/home/top-hospitals/gems-endoscopy.png'),
}