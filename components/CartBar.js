import * as React from 'react';
import {Appbar, Paragraph} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {useEffect} from 'react';

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  Price: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Roboto',
    marginLeft: '70%',
    position: 'relative',
    top: 2,
  },
});

const total = cart => {
  if (cart == undefined || cart == [] || cart == null) {
    return 0;
  } else {
    return cart.map(item => item.cost).reduce((prev, curt) => prev + curt);
  }
};

const CartBar = ({cart, makeVisible}) => {
  let tempCart = 0;
  useEffect(() => {
    tempCart = cart;
    console.warn(cart);
  });
  return (
    <Appbar style={styles.bottom}>
      <Appbar.Action
        icon="cart"
        onPress={() => {
          makeVisible();
        }}
        style={styles.ButtonContainer}
      />
      <Paragraph style={styles.Price}>${total(tempCart).toFixed(2)}</Paragraph>
    </Appbar>
  );
};

export default CartBar;
