import * as React from 'react';
import {Appbar, Paragraph} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';

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

const CartBar = ({cart, makeVisible}) => {
  const [cartTotal, setCartTotal] = useState(0);

  let tempCart = 0;

  useEffect(() => {
    tempCart = cart;
    setCartTotal(total(tempCart).toFixed(2));
  });

  const total = cart => {
    var cost = 0;
    {
      if (cart !== undefined) {
        cart.map((cartItem, i) => {
          cost += cartItem.cost;
        });
      }
    }
    return cost;
  };

  return (
    <Appbar style={styles.bottom}>
      <Appbar.Action
        icon="cart"
        onPress={() => {
          makeVisible();
        }}
        style={styles.ButtonContainer}
      />
      <Paragraph style={styles.Price}>${cartTotal}</Paragraph>
    </Appbar>
  );
};

export default CartBar;
