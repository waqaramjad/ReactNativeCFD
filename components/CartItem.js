import * as React from 'react';
import {IconButton, Paragraph} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import menuData from '../data/MenuData';

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flexDirection: 'row',
  },
  ItemContainer: {
    flexDirection: 'column',
  },
});

const CartItem = ({MenuItem, removeFromCart, index}) => {
  const tempMenuItem = menuData[0];
  return (
    <View style={styles.Container}>
      <IconButton
        icon="delete"
        onPress={() => {
          removeFromCart(index);
        }}
      />
      <View style={styles.ItemContainer}>
        <Paragraph style={{marginBottom: 0}}>{tempMenuItem.title}</Paragraph>
        <Paragraph style={{fontSize: 12, marginTop: 0}}>
          {tempMenuItem.description}
        </Paragraph>
        <Paragraph style={{fontSize: 14}}>${tempMenuItem.cost}</Paragraph>
      </View>
    </View>
  );
};

export default CartItem;
