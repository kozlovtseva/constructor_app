import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';

class InputComponent extends Component {
    state = {
        calories: null
    }

    render() { 
        return(
            <View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>
                        Enter amount of calories per day:
                    </Text>
                </View>            
                <View style={styles.input}>
                    <Input
                        placeholder='2500'
                        onChangeText={(number) => this.setState({calories: number})}
                        value={this.state.calories}
                    />
                </View>                
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.onConstruct(this.state.calories)}>
                        <Text style={styles.buttonText}>Construct!</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    title: {
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30
    },
    titleText: {
        fontSize: 24,
        textAlign: 'center'
    },
    input: {
        backgroundColor: '#BBD3A2',
        borderRadius: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 40,
        marginBottom: 60
    },
    button: {
        backgroundColor: '#E4F48B',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
        borderRadius: 10,
        marginRight: 20,
        marginLeft: 20
    },
    buttonText:{
        fontSize: 28,
        textAlign:'center',
        padding: 10
    }
});

export default InputComponent; 