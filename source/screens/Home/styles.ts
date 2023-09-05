import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A'
    },
    topBackground: {
        flexShrink: 0,
        width: '100%',
        height: 173,
        backgroundColor: '#0D0D0D',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    containerImages: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    insideContainerImages: {
        flexDirection: 'row',
        marginLeft: 10
    },
    containerInput: {
        width: '100%',
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12
    }
})