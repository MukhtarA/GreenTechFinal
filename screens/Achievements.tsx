import * as React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, RefreshControl} from 'react-native';

import {Text, View} from '../components/Themed';
import {useEffect, useState} from "react";
import {ScreenProps} from "react-native-screens";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Markdown from 'react-native-markdown-display';


export default function Achievements() {
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
                {/*        <Image
                    style={{
                        height: 300,
                        flex: 1,
                    }}
                    resizeMode="contain"
                    source={require('../assets/images/image4.png')}
                />*/}
                <Image
                    style={{
                        position: 'absolute',
                        height: 300,
                        width: '100%',
                    }}
                    resizeMode="cover"
                    source={require('../assets/images/image4.png')}
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
                        }}>Achievements</Text>
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
                            >Chapter 4</Text>
                        </View>
                        <Text
                            style={{
                                color: Colors[colorScheme].text,
                                fontSize: 18,
                                lineHeight: 22,
                                fontWeight: '600',
                                paddingBottom: 5,
                            }}
                        >
                            Stabilization of the populations of many globally threatened animal species
                        </Text>
                        <Text
                            style={{
                                color: Colors[colorScheme].text,
                                fontSize: 18,
                                lineHeight: 22,
                                paddingBottom: 5,
                            }}
                        >
                            Populations of Saiga antelope, European mink, Bukhara deer, goitered gazelle, Siberian musk
                            deer and snow leopard are either stable or increasing at a steady rate in Kazakhstan. This
                            success is due, in part, to the fact that protected rare and endangered animal species are
                            not hunted in Kazakhstan and anti-poaching measures are quite effective; although poaching
                            remains a threat to several wild ungulate and bird species.
                        </Text>


                        <Text
                            style={{
                                color: Colors[colorScheme].text,
                                fontSize: 18,
                                lineHeight: 22,
                                fontWeight: '600',
                                paddingBottom: 5,
                            }}
                        >
                            Intensive afforestation work
                        </Text>
                        <Text
                            style={{
                                color: Colors[colorScheme].text,
                                fontSize: 18,
                                lineHeight: 22,
                                paddingBottom: 5,
                            }}
                        >
                            Kazakhstan is carrying out intensive afforestation work aimed at mitigating the adverse
                            effects of the shrinking of the Aral Sea and increasing forest cover by 8,175 km2 by 2030.
                            The Government is also encouraging private land users to undertake afforestation
                            initiatives.
                        </Text>


                        <Text
                            style={{
                                color: Colors[colorScheme].text,
                                fontSize: 18,
                                lineHeight: 22,
                                fontWeight: '600',
                                paddingBottom: 5,
                            }}
                        >
                            Implementation of river basin management
                        </Text>
                        <Text
                            style={{
                                color: Colors[colorScheme].text,
                                fontSize: 18,
                                lineHeight: 22,
                                paddingBottom: 5,
                            }}
                        >
                            Within the post-Soviet geopolitical area, Kazakhstan is one of the pioneers in implementing
                            the basin management approach. Basin councils have been established to involve water users
                            and basin agreements have been concluded. Eight basin inspectorates cover hydrographic
                            basins, extending over the territories of several oblasts.
                        </Text>

                        <Text
                            style={{
                                color: Colors[colorScheme].text,
                                fontSize: 18,
                                lineHeight: 22,
                                fontWeight: '600',
                                paddingBottom: 5,
                            }}
                        >
                            Implementation of river basin management
                        </Text>
                        <Text
                            style={{
                                color: Colors[colorScheme].text,
                                fontSize: 18,
                                lineHeight: 22,
                                paddingBottom: 5,
                            }}
                        >
                            Within the post-Soviet geopolitical area, Kazakhstan is one of the pioneers in implementing
                            the basin management approach. Basin councils have been established to involve water users
                            and basin agreements have been concluded. Eight basin inspectorates cover hydrographic
                            basins, extending over the territories of several oblasts.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

