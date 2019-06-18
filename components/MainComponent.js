import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDishes } from '../redux/ActionCreators';
import { StyleSheet, View, Text, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


import InputComponent from './InputComponent';
import FirstStep from './FirstStepComponent';
import SecondStep from './SecondStepComponent';
import ThirdStep from './ThirdStepComponent';
import Result from './ResultComponent';


const mapStateToProps = state => {
    return {
      dishes: state.dishes
    }
}
  
const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes())
})

const MainNavigator = createStackNavigator(
    {
        Input: {
            screen: InputComponent,
        },
        FirstStep: {
            screen: FirstStep,
        },
        SecondStep: {
            screen: SecondStep,
        },
        ThirdStep: {
            screen: ThirdStep,
        },
        Result: {
            screen: Result,
        }
    },
    {
        initialRouteName: 'Input',
    }
);
const Navigator = createAppContainer(MainNavigator);


class Main extends Component {

    state = {
        calories: null
    }

    componentDidMount() {
        this.props.fetchDishes();
    }

    onConstruct = (calories) => {
        this.setState({
            calories: calories
        });
    }

    render() { 
        return (
            <View style={{flex:1, paddingTop: Expo.Constants.statusBarHeight }}>
                <View style={styles.header}>
                    <Image source={require('./images/logo.png')} style={styles.logo} />
                    <View style={styles.title}>
                        <Text style={styles.titleText}>
                            Ration
                        </Text>
                        <Text style={styles.titleText}>
                            Constructor
                        </Text>
                    </View>
                </View>
                <Navigator />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row'
    },
    logo: {
        width: 80,
        height: 80
    },
    title: {
        alignItems: 'center',
        backgroundColor: '#EFF6C9',
        flex: 2,
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 28
    },   
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Main);