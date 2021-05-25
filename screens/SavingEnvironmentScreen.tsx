import * as React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, RefreshControl} from 'react-native';

import {Text, View} from '../components/Themed';
import {useEffect, useState} from "react";
import {ScreenProps} from "react-native-screens";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Markdown from 'react-native-markdown-display';


export default function SavingEnvironmentScreen() {
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
                {/*                <Image
                    style={{
                        height: 300,
                        flex: 1,
                    }}
                    resizeMode="contain"
                    source={require('../assets/images/image3.png')}
                />*/}
                <Image
                    style={{
                        position: 'absolute',
                        height: 300,
                        width: '100%',
                        zIndex: -1
                    }}
                    resizeMode="cover"
                    source={require('../assets/images/image3.png')}
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
                        }}>Saving environment</Text>
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
                            >Chapter 3</Text>
                        </View>
                        <Text
                            style={{
                                color: Colors[colorScheme].text,
                                fontSize: 18,
                                lineHeight: 22
                            }}
                        >The environmental crisis is complex, requiring many solutions. However, it is the
                            responsibility of the State Government to protect and improve the environment. This can not
                            be accomplished by merely writing legislation but by enforcing measures to save the natural
                            world. The world environmental crisis has resulted in the ubiquitous poverty of developing
                            nations (called the "pollution of poverty"). The growing control of resources has allowed a
                            small consortium of powerful countries the ability to enjoy Earth's resources while other
                            developing countries suffer in the abyss of the crisis. A redistribution of power and
                            resources shared by the entire global community is needed. Although measures such as the
                            Environmental Protection Act of 1986 have begun to set standards for a higher quality of
                            living, not all industries have been regulated by the act, and no effective method of
                            monitoring industrial pollution has been established in India. Factors such as depleting
                            jungles, the squandering of natural resources such as soil, water and air and rapid
                            urbanization have accelerated the need for stronger environmental laws and greater awareness
                            and actions. A philosophy that emphasizes the inter-dependence of man and nature most be
                            adopted globally if the augmenting crisis is to be abated.</Text>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

