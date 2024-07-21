import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MatchingRideGivers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => setUsers(data.users))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Matching Ride Givers</Text>
                <Ionicons name="search" size={24} color="black" />
            </View>
            <ScrollView>
                {users.map(user => (
                    <View key={user.id} style={styles.card}>
                        <View style={styles.userDetails}>
                            {user.image && (
                                <Image
                                    style={styles.userImage}
                                    source={{ uri: user.image }}
                                />
                            )}
                            <View style={styles.userInfo}>
                                <Text style={styles.userName}>{user.firstName} {user.lastName}</Text>
                                <Text style={styles.userStatus}>- User Not Verified</Text>
                                <View style={styles.timeContainer}>
                                    <Ionicons name="time-outline" size={16} color="black" />
                                    <Text style={styles.rideTime}>1:30 pm</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.rideDetails}>
                            <Text style={styles.routeMatch}>Full route match</Text>
                            <View style={styles.rideInfo}>
                                <Text style={styles.distance}>60 m (1 min)</Text>
                                <Image
                                style={styles.carImage}
                                source={{ uri: 'https://th.bing.com/th/id/OIP.BrvR9-atH0KR2dbpeW0wxAAAAA?rs=1&pid=ImgDetMain' }}
                            />
                                <Text style={styles.distance}>50 m (1 min)</Text>
                            </View>
                        </View>
                        <Text style={styles.points}>45 Points</Text>
                        <TouchableOpacity style={styles.requestButton}>
                            <Text style={styles.requestButtonText}>Request a seat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.inviteButton}>
                            <Text style={styles.inviteButtonText}>Invite your contacts to join the ride</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 25,
        margin: 25,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#f9f9f9',
        margin: 10,
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    userDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    userStatus: {
        fontSize: 14,
        color: '#888',
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rideTime: {
        fontSize: 14,
        color: '#888',
        marginLeft: 5,
    },
    rideDetails: {
        marginTop: 10,
        alignItems: 'center',
    },
    routeMatch: {
        fontSize: 16,
        color: '#4caf50',
        marginBottom: 10,
    },
    rideInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    distance: {
        fontSize: 14,
        color: '#888',
    },
    carImage: {
        width: 50,
        height: 50,
        marginHorizontal: 10,
    },
    points: {
        fontSize: 16,
        color: '#4caf50',
        marginTop: 10,
    },
    requestButton: {
        backgroundColor: '#376D21',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    requestButtonText: {
        color: '#ffffff',
        fontSize: 16,
    },
    inviteButton: {
        backgroundColor: '#4caf50',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    inviteButtonText: {
        color: '#ffffff',
        fontSize: 16,
    },
});

export default MatchingRideGivers;
