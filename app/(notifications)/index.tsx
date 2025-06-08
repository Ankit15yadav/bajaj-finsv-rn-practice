import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const NotificationPage = () => {

    return (
        // main outer view
        <ScrollView className='min-h-full bg-white border-t border-t-gray-200'
        >
            <View className='w-full min-h-screen '
            >
                {/* Notification type selection tab */}
                < View className='h-16 px-4 py-3 flex flex-row ' // shadow here
                    style={styles.shadowStyle}
                >
                    <View className='flex flex-row justify-start items-center'
                    >
                        <TouchableOpacity className='w-fit text px-4 py-2 rounded-lg border border-bajaj '
                        >
                            <Text className='font-semibold text-bajaj '
                            >
                                All
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* notification message view */}
                <View className='mt-2  flex flex-col justify-center items-center min-h-screen px-4' >
                    <Text className='font-semibold text-lg ' >
                        No New Notifications
                    </Text>
                    < Text className='text-center mt-2 font-medium' >
                        You're all caught up. We'll let you know when something new arrives
                    </Text>
                </View>
            </View>
        </ScrollView>

    )
}


export default NotificationPage

const styles = StyleSheet.create({
    shadowStyle: {
        backgroundColor: '#ffffff',

        // iOS shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        // Android shadow
        elevation: 3,
    },
});
