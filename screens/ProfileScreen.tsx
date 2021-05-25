import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';

import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
} from 'react-native-paper';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Image
                        style={{
                            marginTop: 10,
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                        }}
                        source={require('./../assets/images/adaptive-icon.png')}
                    />
                    <View style={{marginLeft: 20}}>
                        <Title style={[styles.title, {
                            marginTop:15,
                            marginBottom: 5,
                        }]}>Mukhtar</Title>
                        <Caption style={styles.caption}>@mkr</Caption>
                    </View>
                </View>
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Text style={{color:"#777777", marginLeft: 20}}>Almaty, Kazakhstan</Text>
                </View>
                <View style={styles.row}>
                    <Text style={{color:"#777777", marginLeft: 20}}>777</Text>
                </View>
                <View style={styles.row}>
                    <Text style={{color:"#777777", marginLeft: 20}}>MikeOxmal@email.com</Text>
                </View>
            </View>

            <View style={styles.menuWrapper}>
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Text style={styles.menuItemText}>Progress</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Text style={styles.menuItemText}>Learn more</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                </TouchableRipple>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderColor: '#0d6204',
        borderWidth: 0.5,
    },
    menuItemText: {
        color: '#000000',
        marginLeft: 20,
        fontSize: 16,
    },
});
