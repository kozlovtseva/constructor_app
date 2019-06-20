import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyleSheet, View, ScrollView, Text, TouchableOpacity, FlatList } from 'react-native';
import { Tile } from 'react-native-elements';

//get result list from the store
const mapStateToProps = state => {
    return {
      breakfastDishes: state.dishes.breakfastList,
      lunchDishes: state.dishes.lunchList,
      dinnerDishes: state.dishes.dinnerList
    }
}

export class Result extends Component {
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
        return(
            <ScrollView>
                <View style={styles.title}>
                    <Text style={styles.titleText}>
                        Your ration per day
                    </Text>
                </View>
                <View style={styles.subtitle}>
                    <Text style={styles.subtitleText}>
                        Breakfast
                    </Text>
                </View>
                <View style={styles.dishes}>
                    <FlatList 
                        data={this.props.breakfastDishes}
                        renderItem={renderListItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
                <View style={styles.subtitle}>
                    <Text style={styles.subtitleText}>
                        Lunch
                    </Text>
                </View>
                <View style={styles.dishes}>
                    <FlatList 
                        data={this.props.lunchDishes}
                        renderItem={renderListItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
                <View style={styles.subtitle}>
                    <Text style={styles.subtitleText}>
                        Dinner
                    </Text>
                </View>
                <View style={styles.dishes}>
                    <FlatList 
                        data={this.props.dinnerDishes}
                        renderItem={renderListItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>          

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Input')}
                >
                        <Text style={styles.buttonText}>Try Again!</Text>
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
    subtitle: {
        marginTop: 40,
        marginBottom: 30
    },
    subtitleText: {
        fontSize: 18,
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

export default connect(mapStateToProps)(Result);