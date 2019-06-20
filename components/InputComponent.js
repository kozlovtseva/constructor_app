import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchDishes } from '../redux/ActionCreators';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';


const mapStateToProps = state => {
    return {
      dishes: state.dishes
    }
}
const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes())
})

class InputComponent extends Component {

    // input data
    state = {
        calories: null
    }

    componentDidMount() {
        this.props.fetchDishes();
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
                    //amount of calories and dishes list are passed to the first step
                    onPress={() => this.props.navigation.navigate(
                        'FirstStep', 
                        {calories: this.state.calories, 
                        dishes: this.props.dishes}
                    )}
                >
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

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);