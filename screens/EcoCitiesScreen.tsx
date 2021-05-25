import * as React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, RefreshControl} from 'react-native';

import {Text, View} from '../components/Themed';
import {useEffect, useState} from "react";
import {ScreenProps} from "react-native-screens";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Markdown from 'react-native-markdown-display';


export default function EcoCitiesScreen() {
    const colorScheme = useColorScheme();

    const styles = StyleSheet.create({
        text: {
            color: Colors[colorScheme].text,
            fontSize: 18,
            lineHeight: 22,
        },
        boldText: {
            fontFamily: 'NotoSerif-Bold',
        }
    });

    return (
        <SafeAreaView>
            <View
                style={{
                    position: "absolute",
                    width: '100%',
                    backgroundColor: '#d7d7d7',
                    padding: 0
                }}
            >
                {/*               <Image
                    style={{
                        height: 300,
                        flex: 1,
                    }}
                    resizeMode="contain"
                    source={require('../assets/images/image1.png')}
                />*/}
                <Image
                    style={{
                        position: 'absolute',
                        height: 300,
                        width: '100%',
                    }}
                    resizeMode="cover"
                    source={require('../assets/images/image1.png')}
                />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{
                    marginTop: 260,
                    marginHorizontal: 10,
                    paddingVertical: 25,
                    paddingHorizontal: 25,
                    display: 'flex',
                    borderRadius: 20,
                }}>
                    <View>
                        <Text style={{
                            fontSize: 27,
                            lineHeight: 29,
                            fontWeight: "700"
                        }}>Eco Cities</Text>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            marginVertical: 10,
                            marginBottom: 20
                        }}>
                            <Text
                                style={{
                                    color: 'grey',
                                    fontSize: 18,
                                    lineHeight: 22,
                                }}
                            >Chapter 1</Text>
                        </View>
                        <Text
                            style={{
                                color: Colors[colorScheme].text,
                                fontSize: 18,
                                lineHeight: 22
                            }}
                        >
                            A green environment has many advantages. It has a positive effect on people's health and
                            contributes to the quality of life in a neighbourhood. Companies like to settle in a green
                            environment and real estate is generally more in demand, which strengthens the economic
                            growth of a city. Together with partners, Wageningen University & Research has been
                            researching the effects of a green city for years.
                        </Text>


                        <Markdown
                            style={{
                                link: {
                                    color: Colors[colorScheme].tint,
                                },
                                hr: {
                                    marginVertical: 20,
                                    opacity: .1
                                },
                                paragraph: styles.text,
                                span: styles.text,
                            }}
                            mergeStyle={true}
                        >
                            A green city improves the environment, ensures rich biodiversity, reduces air pollution,
                            ensures water storage, dampens noise and help cooling down in warm periods. Green is also
                            essential for a climate-proof and sustainable environment. In addition, there is a positive
                            effect on the health and social connections of people living, working and recreating in a
                            green environment.
                        </Markdown>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

