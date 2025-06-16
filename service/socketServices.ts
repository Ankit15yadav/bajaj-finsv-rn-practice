import { Message } from "@/types/types";
import { io, Socket } from "socket.io-client";

class SocketService {
    private socket: Socket | null = null
    private isConnected: boolean = false

    // function for connection establishment
    public connect(serverUrl: string = 'http://192.168.29.193:4000') {
        // if socket is already connected then no need to make a new connection
        if (this.socket?.connected) return;

        this.socket = io(serverUrl, {
            transports: ['websocket'],
            timeout: 10000
        })

        this.socket.on('connect', () => {
            console.log('socket from the frontend connected')
            this.isConnected = true
        })

        this.socket.on('disconnect', () => {
            console.log('socket from the frontend Disconnected')
            this.isConnected = false;
        })

        this.socket.on("connect_error", () => {
            console.log("ERROR WHILE CONNECTING THE SOCKETS");
        })
    }

    public disconnect() {
        // remove all the connections present
        if (this.socket) {
            this.socket.disconnect()
            this.isConnected = false;
            this.socket = null;
        }
    }

    public generateContent(prompt: string, history: Message[], onChunk: (text: string) => void, onComplete: () => void, onError: (error: string) => void) {
        if (!this.socket?.connected) {
            onError("not connected to the server");
            return;
        }

        // Clean up any existing listeners first to prevent accumulation
        this.cleanUpListeners();

        // Use once() for single-fire events and on() only for chunk which fires multiple times
        this.socket.once('generation-start', () => {
            console.log("GENERATION OF CONTENT STARTED")
        })

        // listening for the chunks of response from the ai model
        this.socket.on('chunk', (data: { text: string }) => {
            onChunk(data.text);
        })

        // this once will autoremove after firing once , when the function is called

        this.socket.once('generation-complete', () => {
            console.log('GENERATION OF CONTENT COMPLETED')
            onComplete();
            this.cleanUpListeners();
        })

        this.socket.once('error', (error: { message: string }) => {
            onError(error.message)
            this.cleanUpListeners();
        })

        this.socket.emit('generate-stream', { prompt, history })
    }

    private cleanUpListeners() {
        if (this.socket) {
            this.socket?.off('chunk')
            this.socket?.off('generation-start')
            this.socket?.off('generation-complete')
            this.socket?.off('error')
        }
    }

    public isSocketConnected(): boolean {
        return this.isConnected
    }
}

export const socketService = new SocketService();