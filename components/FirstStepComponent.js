import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Carousel } from 'react-native-carousel';

export class FirstStep extends Component {
    state = {
        calories: this.props.navigation.getParam('calories')
    }

    render() { 
        return(
            <View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>
                        Construct your breakfast
                    </Text>
                </View>            
                <View style={styles.carousel}>
                    {/* <Carousel width={375}>
                        <View>
                        <Text>Page 1</Text>
                        </View>
                        <View>
                        <Text>Page 2</Text>
                        </View>
                        <View>
                        <Text>Page 3</Text>
                        </View>
                    </Carousel> */}
                </View>
                {/* <TouchableOpacity
                    style={styles.button + styles.addButton}
                    onPress={() => this.addDish}
                >
                        <Text style={styles.buttonText}>Add The Dish</Text>
                </TouchableOpacity>             */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate(
                        'SecondStep', {calories: this.state.calories}
                    )}
                >
                        <Text style={styles.buttonText}>Next</Text>
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
    },
    addButton: {
        backgroundColor: '#F7F1BA'
    }
});

export default FirstStep; 