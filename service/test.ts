import { io, Socket } from 'socket.io-client';

class SocketService {
    private socket: Socket | null = null;
    private isConnected: boolean = false;

    connect(serverUrl: string = 'http://192.168.29.193:8000') {
        if (this.socket?.connected) return;

        this.socket = io(serverUrl, {
            transports: ['websocket'],
            timeout: 10000,
        });

        this.socket.on('connect', () => {
            console.log('Connected to server');
            this.isConnected = true;
        });

        this.socket.on('disconnect', () => {
            console.log('Disconnected from server');
            this.isConnected = false;
        });

        this.socket.on('connect_error', (error) => {
            console.error('Connection error:', error);
        });
    }

    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
            this.socket = null;
            this.isConnected = false;
        }
    }

    // Generate content with streaming
    generateContent(
        prompt: string,
        onChunk: (text: string) => void,
        onComplete: () => void,
        onError: (error: string) => void
    ) {
        if (!this.socket?.connected) {
            onError('Not connected to server');
            return;
        }

        // Listen for events
        this.socket.on('generation-start', () => {
            console.log('Generation started');
        });

        this.socket.on('chunk', (data: { text: string }) => {
            onChunk(data.text);
        });

        this.socket.on('generation-complete', () => {
            console.log('generation completed')
            onComplete();
            this.cleanupListeners();
        });

        this.socket.on('error', (error: { message: string }) => {
            onError(error.message);
            this.cleanupListeners();
        });

        // Emit the request
        this.socket.emit('generate-stream', { prompt });
    }

    private cleanupListeners() {
        if (this.socket) {
            this.socket?.off('generation-start');
            this.socket?.off('chunk');
            this.socket?.off('generation-complete');
            this.socket?.off('error');
        }
    }

    isSocketConnected(): boolean {
        return this.isConnected;
    }
}

export const socketServices = new SocketService();