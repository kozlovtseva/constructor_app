import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDishes } from '../redux/ActionCreators';
import { StyleSheet, View, Platform, Text, Image } from 'react-native';

const mapStateToProps = state => {
    return {
      dishes: state.dishes
    }
}
  
const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes())
})

class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes();
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