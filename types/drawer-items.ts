
export interface DrawerChild {
    id: number,
    title: string,
    children: {
        id: number,
        title: string,
        Icon: string,
        new: boolean
    }[]
}