import { DrawerItem } from "@/assets/drawer-data/ItemList";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ProfileWithProgress } from "../profile-with-progress";

export function customDrawerContent(props: DrawerContentComponentProps) {
    return (
        <DrawerContentScrollView {...props} style={styles.drawerScrollView}>

            {/* edit profile button */}
            <TouchableOpacity style={styles.profileContainer}>
                <View>
                    <Text style={styles.profileName}>
                        Ankit yadav
                    </Text>
                    <View style={styles.editProfileContainer}>
                        <Text style={styles.editProfileText}>
                            Edit profile
                        </Text>
                        <Ionicons
                            name='pencil-outline'
                            size={12}
                            color={'#004DA8'}
                        />
                    </View>
                </View>

                {/* profile update percentag at the top of drawer */}
                <ProfileWithProgress progress={50} />
            </TouchableOpacity>

            <DrawerItemList {...props} />

            {/* drawer list items */}
            <View>
                {DrawerItem.map((item) => (
                    <View key={item.id}>
                        {/* title of the section */}
                        <Text style={styles.sectionTitle}>
                            {item.title}
                        </Text>

                        {item.children.map((childData) => (
                            // child list items of the section
                            <View key={childData.id}>
                                {childData.title !== 'Logout' ? (
                                    <TouchableOpacity
                                        style={styles.drawerItem}
                                        onPress={() => router.push('/health-pay')}
                                    >
                                        <Text>
                                            <Ionicons
                                                name={childData.Icon as React.ComponentProps<typeof Ionicons>['name']}
                                                size={18}
                                            />
                                        </Text>
                                        <Text style={styles.drawerItemText}>
                                            {childData.title}
                                        </Text>
                                        {childData.new && (
                                            <Text style={styles.newBadge}>
                                                New
                                            </Text>
                                        )}
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity
                                        style={styles.drawerItem}
                                        onPress={() => alert('Logged Out')}
                                    >
                                        <Ionicons
                                            name={childData.Icon as React.ComponentProps<typeof Ionicons>['name']}
                                            size={18}
                                            color={'#004DA8'}
                                        />
                                        <Text style={styles.logoutText}>
                                            {childData.title}
                                        </Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                        ))}

                        {item.id < 3 && (
                            <View style={styles.divider} />
                        )}
                    </View>
                ))}
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    drawerScrollView: {
        paddingHorizontal: 20,
        paddingEnd: 10
    },
    profileContainer: {
        flexDirection: 'row',
        marginBottom: 40,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profileName: {
        fontWeight: '700',
        fontSize: 18
    },
    editProfileContainer: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 4
    },
    editProfileText: {
        fontWeight: '800',
        fontSize: 12,
        color: '#004DA8'
    },
    sectionTitle: {
        color: 'gray',
        fontSize: 10,
        fontFamily: 'serif',
        fontWeight: '900',
        marginTop: 25,
        marginBottom: 20,
        textTransform: 'uppercase',
        opacity: 1
    },
    drawerItem: {
        marginBottom: 28,
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
    },
    drawerItemText: {
        fontSize: 14,
        fontWeight: '800',
    },
    logoutText: {
        fontSize: 14,
        fontWeight: '800',
        fontFamily: 'Lato',
        color: '#004DA8'
    },
    newBadge: {
        fontSize: 10,
        fontWeight: '600',
        backgroundColor: '#004DA8',
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: 'white',
        borderRadius: 100,
        marginLeft: -10
    },
    divider: {
        width: '100%',
        height: 0.3,
        backgroundColor: 'grey',
    }
});