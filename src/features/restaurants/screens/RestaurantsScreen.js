import React from 'react';
import { Searchbar } from 'react-native-paper';
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export const ResturantsScreen = () => (
    <SafeAreaView style={styles.container}>
    <View style={styles.search}>
    <Searchbar />
    </View>
    <View style={styles.list}>
        <Text>List</Text>
        
    </View>
</SafeAreaView>
);

const styles = StyleSheet.create({ 
    container: { 
        flex:1,
        marginTop: StatusBar.currentHeight 
      },
      search: {
      backgroundColor:"#0093E9", 
        padding:20
      },
      list: {
        backgroundColor:"#4158D0", 
        padding:20, 
        flex:1
      }
    });