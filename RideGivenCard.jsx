// RideGiverCard.jsx
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RideGiverCard = ({ rideGiver }) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Image source={{ uri: rideGiver.avatar }} style={styles.avatar} />
                <View style={styles.headerText}>
                    <Text style={styles.name}>{rideGiver.name}</Text>
                    <Text style={styles.status}>- {rideGiver.status}</Text>
                    <Text style={styles.time}>{rideGiver.time}</Text>
                </View>
            </View>
            <View style={styles.route}>
                <Text style={styles.routeMatch}>Full route match</Text>
                <View style={styles.routeDetails}>
                    <Text>{rideGiver.start.distance} m</Text>
                    <Text>Sedan</Text>
                    <Text>{rideGiver.end.distance} m</Text>
                </View>
            </View>
            <Text style={styles.points}>{rideGiver.points} Points</Text>
            <TouchableOpacity style={styles.requestButton}>
                <Text style={styles.requestButtonText}>Request a seat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.inviteButton}>
                <Text style={styles.inviteButtonText}>Invite</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 2,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    headerText: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    status: {
        color: 'gray',
    },
    time: {
        color: 'gray',
    },
    route: {
        marginVertical: 16,
        alignItems: 'center',
    },
    routeMatch: {
        backgroundColor: '#d4edda',
        color: '#155724',
        padding: 4,
        borderRadius: 4,
        marginBottom: 8,
    },
    routeDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    points: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#28a745',
        marginBottom: 16,
    },
    requestButton: {
        backgroundColor: '#28a745',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 8,
    },
    requestButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    inviteButton: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    inviteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default RideGiverCard;
