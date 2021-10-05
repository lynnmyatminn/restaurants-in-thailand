import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Platform, View, ScrollView } from 'react-native';
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';

// const ACCESS_TOKEN = "e807f1fcf82d132f9bb018ca6738a19f";

export default function Home({ navigation }) {

    const [restaurantData, setRestaurantData] = useState(localRestaurants);

    const getRestaurantsFromAPI = () => {
        const API_URL =
            'https://api.halalthai.com/restaurant/province/bkk?access_token=e807f1fcf82d132f9bb018ca6738a19f&sortby=place_name&orderby=asc';

        const apiOptions = {
            headers: {
                Authorization: "Bearer",
            }
        }

        return fetch(
            API_URL, apiOptions
        ).then((res) => res.json())
            .then(
                (json) =>
                    setRestaurantData(json)
                // console.log(json)
            )

    };

    useEffect(() => {
        console.log(getRestaurantsFromAPI());
    }, [])

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={styles.HeaderTabArea}>

                {/* <HeaderTabs /> */}
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>
            {/* <Divider width={1} /> */}
            <BottomTabs />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#eee',
        flex: 1
    },
    HeaderTabArea: {
        backgroundColor: 'white',
        padding: 15
    }
})

