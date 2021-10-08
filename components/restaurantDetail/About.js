import React from 'react'
import { View, Text, Image } from 'react-native'



// const image = 'https://i.ytimg.com/vi/M8BgOszCwls/maxresdefault.jpg';
// const title = 'lebua at State Tower';
// const description = 'Overlooking the Chao Phraya River, this upscale, high-rise hotel is 1 km from the Saphan Taksin Skytrain station, and 6 km from the landmark Grand Palace.';


const apiRestaurantInfo = {
    name: " มุสลิมยโส แซ่บเวอร์",
    image: "http://halal.maf.co.th/backend/uploads/place/238/thumbnail.jpg",
    province: "Bangkok",
    // reviews: "1500",
    rate: 4.5,
    // categories: [
    //     { title: "Thai" },
    //     { title: "Comfort Food" }
    // ],
    category: {
        name: "ร้านอาหาร",
        image: "http://halal.maf.co.th/backend/uploads/category/mobile-icon/food-white@2x.png"
    },
    detail: {
        address: "ถนนศรีนครินทร์ ตำบลสวนหลวง อ.เขตสวนหลวง, จ.กรุงเทพมหานคร",
        phone: "089-923-1784",
        time: "Monday - Sunday 16:00 - 23:00"
    }
}



export default function About(props) {


    //destructuring of the api
    const {
        name,
        image,
        province,
        rate,
        category,
        detail
        // } = apiRestaurantInfo;
    } = props.route.params;


    // const formattedCategories= categories.map((cate) => cate.title).join(" . ");

    const description = `${category.name} ${province ? " • " + province : ""
        } • 🎫 • ${rate} ⭐ ${detail.time} • ${detail.phone} • ${detail.address}`;

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle title={name} />
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
