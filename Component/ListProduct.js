import { TouchableOpacity, View, Text, StyleSheet, Image, FlatList } from 'react-native';
import BikeBlue from '../assets/bikeBlue.png';
import BikePink from '../assets/bikePink.png';
import BikeRed1 from '../assets/bikeRed1.png';
import BikeRed2 from '../assets/bikeRed2.png';
import Heart from '../assets/heart.png';

function ListProduct({ navigation }) {
    const name = [
        {
            title: 'All',
        },
        {
            title: 'RoadBike',
        },
        {
            title: 'Mountain',
        },
    ];

    const data = [
        {
            image: BikeBlue,
            name: 'Pinarello',
            price: '1800',
        },
        {
            image: BikeRed2,
            name: 'Pina Mountai',
            price: '1700',
        },
        {
            image: BikePink,
            name: 'Pina Bike',
            price: '1500',
        },
        {
            image: BikeRed1,
            name: 'Pinarello',
            price: '1900',
        },
        {
            image: BikePink,
            name: 'Pinarello',
            price: '2700',
        },
        {
            image: BikeRed2,
            name: 'Pinarello',
            price: '1350',
        },
    ];

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.header}>The world’s Best Bike</View>
                <FlatList
                    horizontal
                    data={name}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.option}>
                                <TouchableOpacity style={styles.btnOption}>
                                    <Text style={styles.txtOption}>{item.title}</Text>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                />
                <FlatList
                    data={data}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                style={styles.listProduct}
                                onPress={() =>
                                    navigation.navigate('DetailProduct', {
                                        imgProduct: item.image,
                                        nameProduct: item.name,
                                    })
                                }
                            >
                                <Image style={styles.iconHeart} source={Heart} />
                                <Image style={styles.imgProduct} source={item.image} />
                                <Text style={styles.name}>{item.name}</Text>
                                <View style={styles.boxPrice}>
                                    <Text style={styles.iconPrice}>$</Text>
                                    <Text style={styles.price}>{item.price}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        </View>
    );
}

export default ListProduct;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    container: {
        width: 369,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        marginHorizontal: 'auto',
    },
    header: {
        fontSize: 25,
        fontWeight: 700,
        color: 'rgba(233, 65, 65, 1)',
        marginTop: 20,
    },
    option: {
        marginTop: 35,
        marginRight: 35,
        marginBottom: 30,
    },
    btnOption: {
        width: 99,
        height: 32,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(233, 65, 65, 0.53)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtOption: {
        color: 'rgba(190, 182, 182, 1)',
    },

    listProduct: {
        width: 167,
        height: 200,
        position: 'relative',
        backgroundColor: 'rgba(247, 186, 131, 0.15)',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 'auto',
        marginVertical: 8,
    },
    iconHeart: {
        position: 'absolute',
        width: 25,
        height: 25,
        top: 5,
        left: 5,
    },
    imgProduct: {
        width: 135,
        height: 127,
        resizeMode: 'contain',
    },
    name: {
        fontSize: 20,
        fontWeight: 400,
        textAlign: 'center',
    },
    boxPrice: {
        flexDirection: 'row',
    },
    iconPrice: {
        color: 'rgba(247, 186, 131, 1)',
        fontSize: 20,
        fontWeight: 400,
    },
    price: {
        fontSize: 20,
        fontWeight: 400,
    },
});
