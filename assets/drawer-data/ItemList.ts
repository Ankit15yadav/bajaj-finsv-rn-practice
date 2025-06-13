import { DrawerChild } from "@/types/types";


export const DrawerItem: DrawerChild[] = [
    {
        id: 1,
        title: 'Personal',
        children: [
            {
                id: 1,
                title: 'My ABHA',
                Icon: "person-circle-outline",
                new: false
            },
            {
                id: 2,
                title: 'My Transactions',
                Icon: "logo-paypal",
                new: true
            },
            {
                id: 3,
                title: 'My Health Plans',
                Icon: "medkit-outline",
                new: false
            },
            {
                id: 4,
                title: 'My Claims',
                Icon: "bag-check-outline",
                new: false
            },
            {
                id: 5,
                title: 'My Doctors',
                Icon: "person-outline",
                new: false
            },
            {
                id: 6,
                title: 'My Health',
                Icon: "leaf-outline",
                new: false
            },
            {
                id: 7,
                title: 'Health Pay',
                Icon: "qr-code-outline",
                new: false
            },
            {
                id: 8,
                title: 'Medicards',
                Icon: "card-outline",
                new: false
            },
        ]
    },
    {
        id: 2,
        title: 'Business',
        children: [
            {
                id: 1,
                title: 'For Doctors',
                Icon: "newspaper-outline",
                new: false
            },
            {
                id: 2,
                title: 'Corporate Benefits',
                Icon: "bag-handle-outline",
                new: false
            },
        ]
    },
    {
        id: 3,
        title: "Account",
        children: [
            {
                id: 1,
                title: "About us",
                Icon: "information-circle-outline",
                new: false
            },
            {
                id: 2,
                title: "Rate the app",
                Icon: "star-outline",
                new: false,
            },
            {
                id: 3,
                title: "Share & earn coins",
                Icon: "share-social-outline",
                new: true,
            },
            {
                id: 4,
                title: "Help & support",
                Icon: "help-circle-outline",
                new: false,
            },
            {
                id: 5,
                title: "Logout",
                Icon: "power-outline",
                new: false,
            },
        ]
    }
]