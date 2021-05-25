import * as React from 'react';
import {Image, ImageBackground, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import {Modalize} from 'react-native-modalize'
import ProgressCircle from "react-native-progress-circle";
import { useNavigation } from '@react-navigation/native';

export default function CategoriesScreen() {
    const navigation = useNavigation();
    return (
        <ImageBackground
            source={require('../assets/images/categor.jpeg')}
            style={{width: "100%", height: "100%"}}
        >
            <Text style={{
                color: "#000000",
                fontSize: 35,
                alignSelf: "center",
                textAlign: "center",
                marginTop: 80

            }}>
                Categories
            </Text>

            <Text style={{
                color: "#000000",
                fontSize: 20,
                alignSelf: "center",
                textAlign: "center",
                marginTop: 10

            }}>
                Lectures about ecology

            </Text>

            <Modalize
                handleStyle={{
                    marginTop: 30,
                    backgroundColor: "#e9e9e9",
                    width: 80
                }}
                modalStyle={{
                    borderTopLeftRadius: 60,
                    borderTopRightRadius: 60
                }}
                alwaysOpen={500}
                scrollViewProps={{showsVerticalScrollIndicator: false}}
            >
                <View style={{
                    marginTop: 50,
                    flexDirection: "column",
                    padding: 20,
                    marginHorizontal: 20,
                    borderRadius: 20,
                    alignItems: "center",
                    alignSelf: "center",
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('EcoCitiesScreen')}
                        style={{
                            flexDirection: "row",
                            borderRadius: 20,
                            alignItems: "center",
                            marginTop: 20
                        }}
                    >
                        <Image
                            source={require('../assets/images/image1.png')}
                            style={{width: 100, height: 100, resizeMode: 'cover', borderRadius: 50,}}
                        />

                        <View>
                            <Text style={{
                                color: "#345c74",
                                fontSize: 20,
                                fontWeight: '600',
                                paddingHorizontal: 20,
                                width: 170
                            }}>Eco Cities</Text>
                        </View>


                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('EcoVehicleScreen')}
                        style={{
                            flexDirection: "row",
                            borderRadius: 20,
                            alignItems: "center",
                            marginTop: 20
                        }}
                    >
                        <Image
                            source={require('../assets/images/image2.png')}
                            style={{width: 100, height: 100, resizeMode: 'cover', borderRadius: 50,}}
                        />

                        <View>
                            <Text style={{
                                color: "#345c74",
                                fontSize: 20,
                                fontWeight: '600',
                                paddingHorizontal: 20,
                                width: 170
                            }}>Eco Vehicle</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SavingEnvironmentScreen')}
                        style={{
                            flexDirection: "row",
                            borderRadius: 20,
                            alignItems: "center",
                            marginTop: 20
                        }}
                    >
                        <Image
                            source={require('../assets/images/image3.png')}
                            style={{width: 100, height: 100, resizeMode: 'cover', borderRadius: 50,}}
                        />

                        <View>
                            <Text style={{
                                color: "#345c74",
                                fontSize: 20,
                                fontWeight: '600',
                                paddingHorizontal: 20,
                                width: 170
                            }}>Saving environment</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Achievements')}
                        style={{
                            flexDirection: "row",
                            borderRadius: 20,
                            alignItems: "center",
                            marginTop: 20,
                        }}
                    >
                        <Image
                            source={require('../assets/images/image4.png')}
                            style={{width: 100, height: 100, resizeMode: 'cover', borderRadius: 50,}}
                        />

                        <View>
                            <Text style={{
                                color: "#345c74",
                                fontSize: 20,
                                fontWeight: '600',
                                paddingHorizontal: 20,
                                width: 170
                            }}>Achievements</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </Modalize>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
