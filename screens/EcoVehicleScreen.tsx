import * as React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, RefreshControl} from 'react-native';

import {Text, View} from '../components/Themed';
import {useEffect, useState} from "react";
import {ScreenProps} from "react-native-screens";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Markdown from 'react-native-markdown-display';


export default function EcoVehicleScreen() {
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
                {/*     <Image
                    style={{
                        height: 300,
                        flex: 1,
                    }}
                    resizeMode="contain"
                    source={require('../assets/images/image2.png')}
                />*/}
                <Image
                    style={{
                        position: 'absolute',
                        height: 300,
                        width: '100%',
                        zIndex: -1
                    }}
                    resizeMode="cover"
                    source={require('../assets/images/image2.png')}
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
                        }}>Eco vehicle</Text>
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
                            >Chapter 2</Text>
                        </View>
                        <Text
                            style={{
                                color: Colors[colorScheme].text,
                                fontSize: 18,
                                lineHeight: 22
                            }}
                        >
                            Vehicles that operate primarily on gasoline or diesel have historically accounted for over
                            99% of cars and passenger truck sales. However, sales of cars that operate on other fuels —
                            particularly electricity — are growing. New models of both electric vehicles and plug-in
                            hybrid electric vehicles are entering the market in increasing numbers each year. Other
                            alternative fuel vehicles include those that run on compressed natural gas (CNG) or E85 (a
                            mixture of about 85% ethanol and 15% gasoline).
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
                            Many alternative fuels "burn" cleaner than gasoline or diesel so there are fewer tailpipe
                            emissions. The amount of greenhouse gases (GHG) emitted when the fuel is produced depends on
                            the source of the fuel — see GHG Emissions for more information. These fuels can also be
                            produced domestically, reducing our dependence on imported petroleum. In addition, reducing
                            vehicle emissions and increasing your fuel economy helps the environment and your wallet.
                        </Markdown>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

