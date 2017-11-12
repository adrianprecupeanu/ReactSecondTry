import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import { AppRegistry, FlatList } from 'react-native';


export default class PartsList extends React.Component {
    data: Array;

    constructor(props) {
        super(props);
        this.data = data;
    }


    render() {
        // const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.data}
                    renderItem={({item}) => <Text
                    onPress={()=>this.props.navigation.navigate("EditCarPart",item)}
                    style={styles.item}>
                        {item.carPartNameField}</Text>}
                />
                <Button style={styles.button}
                    onPress={() => this.props.navigation.navigate('Home')}
                    title = "Go back"
                    color="#841584"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textBox: {
        backgroundColor: '#111',
        padding: 10,
        width: 200,
        color: 'red'
    },
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    button: {
        padding: 10,
        width: "100%"
    },
});