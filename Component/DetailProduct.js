import { TouchableOpacity, View, Text, StyleSheet, Image, FlatList } from 'react-native';
import BikeRed2 from '../assets/bikeRed2.png';
import Heart from '../assets/heart.png';

function DetailProduct({ navigation, route }) {
    const imgProduct = route.params;
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.boxImgProduct}>
                    <Image
                        source={imgProduct == undefined ? BikeRed2 : imgProduct.imgProduct}
                        style={styles.imgProduct}
                    />
                </View>
                <Text style={styles.nameProduct}>
                    {imgProduct == undefined ? 'Pina Mountain' : imgProduct.nameProduct}
                </Text>
                <View style={styles.boxPrice}>
                    <Text style={styles.price}> 15% OFF I 350$</Text>
                    <Text style={styles.afterPrice}> 449$</Text>
                </View>
                <Text style={styles.txtDescription}>Description</Text>
                <Text style={styles.contentDescription}>
                    {' '}
                    It is a very important form of writing as we write almost everything in paragraphs, be it an answer,
                    essay, story, emails, etc.
                </Text>
                <View style={styles.boxFuture}>
                    <Image style={styles.iconHeart} source={Heart} />
                    <TouchableOpacity
                        style={styles.btnAdd}
                        onPress={() => navigation.navigate('Started', { imgProduct: imgProduct })}
                    >
                        <Text style={styles.txtBtnAdd}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default DetailProduct;

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
    boxImgProduct: {
        width: '100%',
        height: 350,
        borderRadius: 5,
        backgroundColor: 'rgba(233, 65, 65, 0.1)',
    },
    imgProduct: {
        width: 297,
        height: 340,
        resizeMode: 'contain',
        margin: 'auto',
    },
    nameProduct: {
        fontSize: 35,
        fontWeight: 400,
    },
    boxPrice: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontSize: 25,
        fontWeight: 400,
        marginLeft: 10,
        color: 'rgba(0, 0, 0, 0.59)',
    },
    afterPrice: {
        fontSize: 25,
        fontWeight: 400,
    },
    txtDescription: {
        fontSize: 25,
        fontWeight: 400,
        marginTop: 5,
        color: 'rgba(0, 0, 0, 1)',
    },
    contentDescription: {
        fontSize: 22,
        fontWeight: 400,
        color: 'rgba(0, 0, 0, 0.57)',
    },
    boxFuture: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    iconHeart: {
        width: 35,
        height: 35,
    },
    btnAdd: {
        width: 269,
        height: 54,
        backgroundColor: 'rgba(233, 65, 65, 1)',
        borderRadius: 30,
    },
    txtBtnAdd: {
        fontSize: 25,
        fontWeight: 400,
        color: 'rgba(255, 250, 250, 1)',
        margin: 'auto',
    },
});
