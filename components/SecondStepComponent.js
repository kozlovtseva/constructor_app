import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDishToLunch } from '../redux/ActionCreators';

import { StyleSheet, View, ScrollView, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Tile } from 'react-native-elements';

export class SecondStep extends Component {

    state = {
        dishes: this.props.navigation.getParam('dishes'),
        calories: this.props.navigation.getParam('calories'),
        caloriesForLunch: this.props.navigation.getParam('calories')/3
    }

    addDish = (calories, item) => {
        let caloriesLeft = this.state.caloriesForLunch - calories;
        if (caloriesLeft < 0){
            Alert.alert(
                "You can't eat more for lunch",
                "\nLet's construct dinner next?",
                [
                    {text: 'Cancel'},
                    {
                        text: 'OK', 
                        onPress: () => {
                            this.props.navigation.navigate(
                                'ThirdStep',
                                {calories: this.state.calories,
                                dishes: this.state.dishes}
                            )
                        }
                    }
                ],
                { cancelable: false }
            );
        }else{
            this.props.dispatch(addDishToLunch(item));
            this.setState({
                caloriesForLunch: caloriesLeft
            });
        }        
    }

    render() {
        const renderListItem = ({item, index}) => {
            return (
                <Tile
                    key={index}
                    title={item.name}
                    caption={item.description}
                    featured
                    imageSrc={{ url: item.image}}
                    onPress={() => this.addDish(item.calories, item)}
                >
                </Tile>
            );
        };
        let data = this.props.navigation.getParam('dishes');
        let list = data.dishes.dishes;
        return(
            <ScrollView>
                <View style={styles.title}>
                    <Text style={styles.titleText}>
                        Construct your lunch
                    </Text>
                </View>            
                <View style={styles.dishes}>
                    <FlatList 
                        data={list}
                        renderItem={renderListItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate(
                        'ThirdStep',
                        {calories: this.state.calories,
                        dishes: this.state.dishes}
                    )}
                >
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    title: {
        margin: 30
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
        margin: 20
    },
    buttonText:{
        fontSize: 28,
        textAlign:'center',
        padding: 10
    }
});

export default connect()(SecondStep); 