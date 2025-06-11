import React from 'react';
import {
    FlatList,
    Image,
    Pressable,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

// Test data structures
interface TestCard {
    id: string;
    title: string;
    color: string;
}

interface ImageCard {
    id: string;
    title: string;
    imageUrl: string;
}

const testData: TestCard[] = [
    { id: '1', title: 'Card 1', color: '#FF6B6B' },
    { id: '2', title: 'Card 2', color: '#4ECDC4' },
    { id: '3', title: 'Card 3', color: '#45B7D1' },
    { id: '4', title: 'Card 4', color: '#96CEB4' },
    { id: '5', title: 'Card 5', color: '#FFEAA7' },
];

const imageData: ImageCard[] = [
    {
        id: '1',
        title: 'Image 1',
        imageUrl: 'https://picsum.photos/280/150?random=1'
    },
    {
        id: '2',
        title: 'Image 2',
        imageUrl: 'https://picsum.photos/280/150?random=2'
    },
    {
        id: '3',
        title: 'Image 3',
        imageUrl: 'https://picsum.photos/280/150?random=3'
    },
    {
        id: '4',
        title: 'Image 4',
        imageUrl: 'https://picsum.photos/280/150?random=4'
    },
    {
        id: '5',
        title: 'Image 5',
        imageUrl: 'https://picsum.photos/280/150?random=5'
    },
];

const TestFlatList: React.FC = () => {

    const renderColorCard = ({ item }: { item: TestCard }) => (
        <Pressable
            className="mr-4 w-[280px] h-[150px] rounded-xl justify-center items-center"
            style={{ backgroundColor: item.color }}
        >
            <Text className="text-white text-lg font-bold">{item.title}</Text>
        </Pressable>
    );

    const renderImageCard = ({ item }: { item: ImageCard }) => (
        <TouchableOpacity className="mr-4">
            <Image
                source={{ uri: item.imageUrl }}
                className="w-[250px] h-[160px] rounded-xl"
                resizeMode="cover"
            />
            <Text className="text-center mt-2 text-sm font-medium">{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView className="flex-1 bg-white">
            <FlatList
                ListHeaderComponent={
                    <View className="px-5 pt-5">
                        {/* Header */}
                        <Text className="text-2xl font-bold text-gray-800 mb-5">
                            FlatList Test Component
                        </Text>

                        {/* Test 1: Colored Cards */}
                        <Text className="text-lg font-semibold text-gray-700 mb-3">
                            Test 1: Colored Cards
                        </Text>
                        <FlatList
                            data={testData}
                            renderItem={renderColorCard}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 0 }}
                            style={{ marginBottom: 20 }}
                        />

                        {/* Test 2: Network Images */}
                        <Text className="text-lg font-semibold text-gray-700 mb-3">
                            Test 2: Network Images
                        </Text>
                        <FlatList
                            data={imageData}
                            renderItem={renderImageCard}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 10 }}
                            style={{ marginBottom: 20 }}
                        />

                        {/* Test 3 Header */}
                        <Text className="text-lg font-semibold text-gray-700 mb-3">
                            Test 3: Vertical List
                        </Text>
                    </View>
                }
                data={testData}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        className="mb-3 mx-5 p-4 rounded-lg flex-row items-center"
                        style={{ backgroundColor: item.color }}
                    >
                        <Text className="text-white text-lg font-bold">{item.title}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 30 }}
            />
        </SafeAreaView>
    );
};

export default TestFlatList;
