import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import BikeBlue from '../assets/bikeBlue.png';

function Started({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.txtHeader}>A premium online store for sporter and their stylish choice</Text>
            </View>
            <View style={styles.product}>
                <Image style={styles.imgProduct} source={BikeBlue} />
            </View>
            <View style={styles.nameProduct}>
                POWER BIKE <br /> SHOP
            </View>
            <TouchableOpacity style={styles.btnStarted} onPress={() => navigation.navigate('ListProduct')}>
                <Text style={styles.txtBtnStarted}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Started;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    header: {
        width: 351,
        height: 87,
        marginTop: 30,
    },
    txtHeader: {
        fontSize: 26,
        fontWeight: 400,
        textAlign: 'center',
    },
    product: {
        width: 359,
        height: 388,
        borderRadius: 50,
        backgroundColor: 'rgba(233, 65, 65, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgProduct: {
        width: 292,
        height: 270,
    },
    nameProduct: {
        fontSize: 26,
        fontWeight: 700,
        textAlign: 'center',
        marginTop: 10,
    },
    btnStarted: {
        width: 340,
        height: 64,
        borderRadius: 30,
        backgroundColor: 'rgba(233, 65, 65, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    txtBtnStarted: {
        fontSize: 27,
        fontWeight: 400,
        color: 'rgba(254, 254, 254, 1)',
    },
});
