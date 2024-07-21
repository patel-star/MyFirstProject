
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MainScreen from './Components/screens/MainScreen'; // Adjust the import path as needed

const App = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <MainScreen />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
});

export default App;
