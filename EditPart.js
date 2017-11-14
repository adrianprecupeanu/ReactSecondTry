import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TextInput,
    Button,
    ListView,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Communications from 'react-native-communications';
export default class EditCarPart extends React.Component{
    constructor(props){
        super(props);
        this.item = this.props.navigation.state.params.item;
        this.data = data;
        this.state = {
            sellerEmailField: this.item.sellerEmailField,
            carPartNameField: this.item.carPartNameField,
            estimatedPriceField: this.item.estimatedPriceField,
        };
    }
    save(){
        let item = this.state;
        for(let i =0; i<data.length; i++){
            if(data[i].carPartNameField === this.item.carPartNameField){
                data[i] = item;
            }
        }
        this.props.navigation.navigate('PartsList');
    }
    render(){
        return(
            <View>
                <TextInput
                    style={styles.textBox}
                    onChangeText={(carPartName)=>this.setState({carPartNameField: carPartName})}
                    value={this.state.carPartNameField}
                />
                <TextInput
                    style={styles.textBox}
                    keyboardType = 'numeric'
                    onChangeText={(price)=>this.setState({estimatedPriceField: price})}
                    value={this.state.estimatedPriceField.toString()}
                />
                <TextInput
                    style={styles.textBox}
                    onChangeText={(email)=>this.setState({sellerEmailField: email})}
                    value={this.state.sellerEmailField}
                />
                <Button
                    title="Save"
                    onPress={()=>this.save()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    textBox: {
        backgroundColor: '#111',
        padding: 10,
        width: "100%",
        color: '#fff'
    },
    button: {
        margin: 10,
        width: "100%",
        color: "red",
    },
});