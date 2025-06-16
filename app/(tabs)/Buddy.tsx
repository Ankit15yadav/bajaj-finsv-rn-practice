import React, { useEffect, useRef, useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Markdown from 'react-native-markdown-display';
import { socketService } from '../../service/socketServices';
import { ChatState, Message } from '../../types/types';

const Buddy = () => {
    const [chatState, setChatState] = useState<ChatState>({
        messages: [],
        isGenerating: false,
        connectionStatus: 'disconnected',
    });
    const [inputText, setInputText] = useState('');
    const scrollViewRef = useRef<ScrollView>(null);
    const currentStreamingMessage = useRef<string>('');

    useEffect(() => {
        socketService.connect();

        const interval = setInterval(() => {
            setChatState((prev) => ({
                ...prev,
                connectionStatus: socketService.isSocketConnected() ? 'connected' : 'disconnected',
            }));
        }, 1000);

        return () => {
            clearInterval(interval);
            socketService.disconnect();
        };
    }, []);

    const addMessage = (message: Omit<Message, 'id' | 'timestamp'>) => {
        const newMessage: Message = {
            ...message,
            id: `${Date.now()}-${Math.random()}`,
            timestamp: new Date(),
        };

        setChatState((prev) => ({
            ...prev,
            messages: [...prev.messages, newMessage],
        }));

        setTimeout(() => {
            scrollViewRef.current?.scrollToEnd({ animated: true });
        }, 100);
    };

    const updateLastMessage = (text: string) => {
        setChatState((prev) => ({
            ...prev,
            messages: prev.messages.map((msg, index) =>
                index === prev.messages.length - 1 ? { ...msg, text, isStreaming: true } : msg
            ),
        }));
    };

    const markLastMessageComplete = () => {
        setChatState((prev) => ({
            ...prev,
            messages: prev.messages.map((msg, index) =>
                index === prev.messages.length - 1 ? { ...msg, isStreaming: false } : msg
            ),
        }));
    };

    const handleSendMessage = () => {
        if (!inputText.trim() || chatState.isGenerating) return;

        if (chatState.connectionStatus === 'disconnected') {
            Alert.alert('Error', 'Not connected to server');
            return;
        }

        addMessage({
            text: inputText.trim(),
            isUser: true,
        });

        addMessage({
            text: '',
            isUser: false,
            isStreaming: true,
        });

        setChatState((prev) => ({ ...prev, isGenerating: true }));
        currentStreamingMessage.current = '';

        socketService.generateContent(
            inputText.trim(),
            chatState?.messages,
            (chunk: string) => {
                currentStreamingMessage.current += chunk;
                updateLastMessage(currentStreamingMessage.current);
                scrollViewRef.current?.scrollToEnd({ animated: true });
            },
            () => {
                setChatState((prev) => ({ ...prev, isGenerating: false }));
                markLastMessageComplete();
                currentStreamingMessage.current = '';
            },
            (error: string) => {
                setChatState((prev) => ({ ...prev, isGenerating: false }));
                updateLastMessage(`Error: ${error}`);
                markLastMessageComplete();
                currentStreamingMessage.current = '';
            }
        );

        setInputText('');
    };

    return (
        <KeyboardAvoidingView
            className="flex-1 bg-gray-100"
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={100}
        >
            {/* Connection Status Bar */}
            <View
                className={`py-2 px-4 items-center ${chatState.connectionStatus === 'connected' ? 'bg-green-600' : 'bg-red-600'
                    }`}
            >
                <Text className="text-white font-bold">
                    {chatState.connectionStatus === 'connected' ? 'Connected' : 'Disconnected'}
                </Text>
            </View>

            {/* Message List */}
            <ScrollView
                ref={scrollViewRef}
                className="flex-1"
                contentContainerStyle={{ padding: 16 }}
            >
                {chatState.messages.map((message) => (
                    <View
                        key={message.id}
                        className={`my-1 px-4 py-3 max-w-[100%] rounded-2xl ${message.isUser
                            ? 'bg-blue-500 self-end'
                            : 'bg-white self-start border border-gray-300'
                            }`}
                    >
                        {message.isUser ? (
                            <Text className="text-white text-sm">{message.text}</Text>
                        ) : (
                            <Markdown
                                style={{
                                    body: { color: '#333', fontSize: 12, marginBottom: 4, flexDirection: 'column', gap: 3 },
                                    strong: { fontWeight: 'bold' },
                                    em: { fontStyle: 'italic' },
                                }}
                            >
                                {message.text}
                            </Markdown>
                        )}
                        {message.isStreaming && (
                            <Text className="text-blue-500 mt-1 text-lg">●</Text>
                        )}
                    </View>
                ))}
            </ScrollView>

            {/* Input Section */}
            <View className="flex-row items-end bg-white p-4">
                <TextInput
                    className="flex-1 border border-gray-300 rounded-full px-4 py-3 max-h-28 mr-3"
                    value={inputText}
                    onChangeText={setInputText}
                    placeholder="Type your message..."
                    multiline
                    editable={!chatState.isGenerating}
                />
                <TouchableOpacity
                    className={`px-5 py-3 rounded-full ${chatState.isGenerating || !inputText.trim()
                        ? 'bg-gray-400'
                        : 'bg-blue-500'
                        }`}
                    onPress={handleSendMessage}
                    disabled={chatState.isGenerating || !inputText.trim()}
                >
                    <Text className="text-white font-bold">
                        {chatState.isGenerating ? '...' : 'Send'}
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Buddy;
