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
        this.state.sellerEmailField = "";
        this.state.carPartNameField = "";
        this.state.estimatedPriceField = "";
    }
    save(){
        let item = this.state;
        for(let i =0; i<data.length; i++){
            if(data[i].carPartNameField === item.carPartNameField){
                data[i] = item;
            }
        }
    }
    render(){
        return(
            <View>
                <TextInput
                    style={styles.textBox}
                    onChangeText={(carPartName)=>this.setState({carPartNameField})}
                    value={this.state.carPartNameField}
                />
                <TextInput
                    style={styles.textBox}
                    keyboardType = 'numeric'
                    onChangeText={(price)=>this.setState({estimatedPriceField})}
                    value={this.state.carPartNameField.toString()}
                />
                <TextInput
                    style={styles.textBox}
                    keyboardType = 'email'
                    onChangeText={(email)=>this.setState({sellerEmailField})}
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