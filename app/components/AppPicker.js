import React from 'react';
import { View ,StyleSheet, TouchableWithoutFeedback, Modal, Button, Text, FlatList} from 'react-native';
import defaultstyles from '../config/styles';

import { MaterialCommunityIcons} from '@expo/vector-icons'; 
import colors from '../config/color';
import AppText from './AppText';
import react from 'react';
import { useState } from 'react/cjs/react.development';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({icon,items,onSelectItem,selectedItem,placeholder}) {
    const [modalVisible,setModalVisible]= useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon &&<MaterialCommunityIcons name={icon} size={20} color={colors.meduim} style={styles.icon}/>}
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons name="chevron-down" size={20} color={colors.meduim} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() =>setModalVisible(false) }/>
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) => (
                        <PickerItem
                        label={item.label}
                        onPress={() => {
                            setModalVisible(false);
                            onSelectItem(item);
                        }}
                        />
                        )}
                    /> 
                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10
        } ,
        icon: {
            marginRight : 10,
        },
        text: {
            flex: 1,
            },
    })

export default AppPicker;