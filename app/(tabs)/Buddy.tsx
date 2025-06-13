import React from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native'

const messages = [
    { id: '1', from: 'bot', text: 'Hello! I am Buddy, your chatbot assistant.' },
    { id: '2', from: 'user', text: 'Hi Buddy!' },
    { id: '3', from: 'bot', text: 'How can I help you today?' },
    { id: '4', from: 'user', text: 'Tell me a joke.' },
    { id: '5', from: 'bot', text: 'Why don’t developers go broke? Because they always cache money!' }
]

const Buddy = () => {
    return (
        <View className="flex-1 bg-white px-4 py-6">

            {/* Chat Header */}
            {/* <View className="mb-4">
                <Text className="text-xl font-bold text-center text-gray-800">💬 Buddy Chat</Text>
            </View> */}

            {/* Chat Messages */}
            <ScrollView className="flex-1 mb-4" contentContainerStyle={{ paddingBottom: 80 }}>
                {messages.map((msg) => (
                    <View
                        key={msg.id}
                        className={`flex-row mb-3 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <View
                            className={`max-w-[75%] px-4 py-2 rounded-2xl ${msg.from === 'user'
                                ? 'bg-blue-500 rounded-br-none'
                                : 'bg-gray-200 rounded-bl-none'
                                }`}
                        >
                            <Text className={`${msg.from === 'user' ? 'text-white' : 'text-black'}`}>
                                {msg.text}
                            </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            {/* Chat Input */}
            <View className="absolute bottom-4 left-4 right-4 bg-gray-100 px-4 py-2 rounded-full flex-row items-center border border-gray-300">
                <TextInput
                    className="flex-1 text-sm text-gray-800"
                    placeholder="Type a message..."
                    placeholderTextColor="#888"
                    editable={true}
                />
                {/* Fake disabled input, functional input can be wired later */}
            </View>
        </View>
    )
}

export default Buddy
