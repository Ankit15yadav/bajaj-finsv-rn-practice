import { Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


export const ProfileWithProgress = ({ progress }: { progress: number }) => {
    return (
        <AnimatedCircularProgress
            size={60} // outer size
            width={3}
            fill={(progress)}
            tintColor="#004DA8"
            backgroundColor="#D3D3D3"
            rotation={0}

        >
            {/*  children should be function */}
            {() => (
                <View
                    style={{
                        backgroundColor: '#D3D3D3',
                        height: 55,
                        width: 55,
                        borderRadius: 100,
                        flexDirection: "row",
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            color: "#004DA8",
                            fontSize: 15,
                            fontWeight: "bold",
                        }}
                    >
                        Ay
                    </Text>
                </View>
            )}

        </AnimatedCircularProgress>
    );
};
