import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        category: {
            name: "",
            image: ""
        },
        price: "$$",
        reviews: 1244,
        rate: 4.5,
    },
];

export default function RestaurantItems({ navigation, ...props }) {
    return (
        <>

            {
                props.restaurantData.map((item, index) => (
                    <TouchableOpacity key={index} activeOpacity={1} style={{
                        marginBottom: 30
                    }}
                        onPress={() =>
                            navigation.navigate("RestaurantDetail",
                                {
                                    name: item.name,
                                    image: item.image,
                                    province: item.province,
                                    rate: item.rate,
                                    category: item.category,
                                    detail: item.detail,
                                    // description: item.description
                                })
                        }
                    >
                        <View style={{
                            marginTop: 5,
                            padding: 15,
                            backgroundColor: "white"
                        }}>
                            <RestaurantImage image={item.image} />
                            <RestaurantInfo name={item.name} rating={item.rate} category={item.category.name} />

                        </View>
                    </TouchableOpacity>

                ))
            }

        </>
    )
}

const RestaurantImage = (props) => (
    <>
        <Image
            source={{
                uri: props.image
            }}
            style={{
                width: '100%',
                height: 180
            }}
        />
        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = (props) => (
    <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10
    }}>
        <View>
            <Text style={{
                fontSize: 15, fontWeight: "bold"
            }}>
                {props.name}
            </Text>
            <Text style={{
                fontSize: 13,
                color: "grey"
            }}>
                {props.category}
            </Text>
        </View>
        <View style={{
            backgroundColor: "#eee",
            height: 30,
            width: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15
        }}>
            <Text>{props.rating}</Text>
        </View>
    </View>
)
