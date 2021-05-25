import * as React from 'react';
import {StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import {ImageBackground, Image, TouchableOpacity} from "react-native";
import {ScrollView, TextInput} from "react-native-gesture-handler";
import ProgressCircle from 'react-native-progress-circle';
import {useNavigation} from "@react-navigation/native";

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <ImageBackground source={require('../assets/images/Home.png')}
                         style={{width: "100%", height: '100%',}}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{
                    paddingHorizontal: 20,
                    fontSize: 40,
                    paddingTop: 40,
                    fontWeight: "700",
                    color: "#FFF"
                }}>
                    Welcome to G-Nida
                </Text>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#FFF",
                    padding: 10,
                    borderRadius: 12,
                    marginHorizontal: 20,
                    marginTop: 20
                }}>
                    <TextInput
                        placeholder="Search for new knowledge!"
                        placeholderTextColor="#345c74"
                        style={{
                            fontSize: 12,
                            width: 280,
                            paddingHorizontal: 12
                        }}
                    />
                </View>
                <View style={{
                    flexDirection: "row",
                    marginTop: 15,
                    marginHorizontal: 20,
                    borderRadius: 20,
                    paddingVertical: 30,
                    paddingLeft: 30,
                    backgroundColor: '#f0ffee',

                }}>
                    <View style={{
                        backgroundColor: '#f0ffee',

                    }}>
                        <Text style={{
                            color: "#345c74",
                            fontSize: 20,
                            width: 250,
                            paddingRight: 100
                        }}>
                            Start learning ecology
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Categories') }
                            style={{
                                flexDirection: "row",
                                backgroundColor: "#007932",
                                alignItems: "center",
                                marginTop: 20,
                                paddingVertical: 10,
                                borderRadius: 14,
                                paddingHorizontal: 10,
                            }}
                        >
                            <Text style={{
                                color: "#FFF",
                                fontSize: 12,
                            }}>Categories</Text>
                        </TouchableOpacity>
                    </View>
                    <Image
                        source={require('../assets/images/undraw.png')}
                        style={{marginLeft: -80, marginTop: 35}}
                    />
                </View>

                <View style={{
                    flexDirection: "column",
                    padding: 30,
                    marginTop: 15,
                    marginHorizontal: 20,
                    borderRadius: 20,
                    alignContent: "center",
                    alignItems: "center",
                    backgroundColor: '#f0ffee',
                }}>
                    <View style={{
                        backgroundColor: '#f0ffee',
                    }}>
                        <Text style={{
                            color: "#345c74",
                            fontSize: 24,
                        }}>
                            Purpose
                        </Text>

                        <Text style={{
                            paddingTop: 5,
                            color: "#345c74",
                            fontSize: 16,
                        }}>
                            The G-Nida is the app for children that it would be possible to show and teach them to
                            care refers to ecology, demonstrate, prove your child about the importance of ecology and
                            environmental consequences.
                        </Text>
                    </View>
                </View>


                <View style={{
                    flexDirection: "column",
                    backgroundColor: '#f0ffee',
                    padding: 30,
                    marginTop: 15,
                    marginHorizontal: 20,
                    borderRadius: 20,
                    alignContent: "center",
                    alignItems: "center",
                }}>
                    <View style={{
                        backgroundColor: '#f0ffee',
                    }}>
                        <Text style={{
                            color: "#345c74",
                            fontSize: 24,
                        }}>
                            Why children?
                        </Text>

                        <Text style={{
                            paddingTop: 5,
                            color: "#345c74",
                            fontSize: 16,
                        }}>
                            Children are the generation of people to whom we will leave our land behind us . And to
                            ensure the good upbringing of children for the earth and for all mankind. Preschool
                            childhood is the initial stage in the formation of a human personality. During this period,
                            the foundations of personal culture are laid. The main goal of ecological education as a
                            means of developing preschool children is the formation of the principles of ecological
                            culture: the correct attitude of the child to nature, his environment, to himself and to
                            people as a part of nature, to things and materials of natural origin that he uses. This
                            attitude is based on basic knowledge of an ecological nature. Nature is the most important
                            means of education and development of preschool children. How many discoveries a child makes
                            by communicating with her! Every living creature seen by a baby is unique. The natural
                            materials (sand, clay, water, snow , etc.) that children love to play with are also varied.
                            Preschoolers interact with nature at different times of the year - when there is fluffy
                            white snow around, and when the gardens are blooming. Together with adults, they rejoice at
                            the coolness of the water in the summer heat and the murmur of a forest stream, forbs of
                            meadows, delicious berries and smells of forests. Not a single didactic material can be
                            compared with nature in terms of the variety and strength of the developmental impact on the
                            child. Objects and phenomena of nature are clearly presented to children. Thus, the baby
                            directly, with the help of the senses, perceives the variety of properties of natural
                            objects: shape, size, sounds, colors, spatial position, movement , etc. He forms initial
                            concrete and vivid ideas about nature, which further help him see and understand the
                            connections and relationships of natural phenomena, learn new concepts. Children learn many
                            connections and relationships between natural phenomena in the process of observation.
                        </Text>
                    </View>
                </View>

            </ScrollView>
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
