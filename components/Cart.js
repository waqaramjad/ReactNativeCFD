import CartItem from './CartItem';
import * as React from 'react';
import {View} from 'react-native';
import MenuData from '../data/MenuData';
import {useEffect, useState} from 'react';
import {Text} from 'react-native-paper';

const Cart = ({cart, removeFromCart}) => {
  if (cart !== undefined) {
    return (
      <View style={{paddingBottom: 60}}>
        {cart.map((menuItem, i) => (
          <>
            <CartItem
              key={i}
              index={i - 1}
              menuItem={menuItem}
              removeFromCart={removeFromCart}
            />
          </>
        ))}
      </View>
    );
  } else {
    return (
      <View style={{paddingBottom: 60}}>
        <Text>Your Cart is Empty</Text>
      </View>
    );
  }
};
export default Cart;
