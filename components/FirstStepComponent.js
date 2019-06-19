import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, FlatList } from 'react-native';
import { Tile } from 'react-native-elements';

export class FirstStep extends Component {
    state = {
        calories: this.props.navigation.getParam('calories')
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
                        Construct your breakfast
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
                        'SecondStep', {calories: this.state.calories}
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
        margin: 20
    },
    buttonText:{
        fontSize: 28,
        textAlign:'center',
        padding: 10
    }
});

export default FirstStep; 