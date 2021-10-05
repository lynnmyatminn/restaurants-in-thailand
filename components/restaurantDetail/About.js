import React from 'react'
import { View, Text, Image } from 'react-native'



const image = 'https://i.ytimg.com/vi/M8BgOszCwls/maxresdefault.jpg';
const title = 'lebua at State Tower';
const description = 'Overlooking the Chao Phraya River, this upscale, high-rise hotel is 1 km from the Saphan Taksin Skytrain station, and 6 km from the landmark Grand Palace.';


const restaurantInfo = {
    name: "Farmhouse Kitchen Thai Cuisine",
    image: "",
    pirce: "$$",
    reviews: "1500",
    rating: 4.5,
    categories: [
        { title: "Thai" },
        { title: "Comfort Food" }
    ]
}

export default function About() {
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle title={title} />
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image source={{
        uri: props.image
    }}
        style={{
            width: '100%',
            height: 180
        }}
    />
)

const RestaurantTitle = (props) => (
    <Text style={{
        fontSize: 29,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15
    }}>
        {props.title}
    </Text>
)

const RestaurantDescription = (props) => (
    <Text>
        {props.description}
    </Text>
)
