import * as React from 'react';
import {Button, Dialog} from 'react-native-paper';
import Cart from './Cart';
import {ScrollView} from 'react-native';

const MyComponent = ({
  cart,
  visible,
  makeNotVisible,
  removeFromCart,
  emptyCart,
}) => {
  return (
    <Dialog
      style={{maxHeight: '70%', paddingBottom: 0}}
      visible={visible}
      onDismiss={() => makeNotVisible()}>
      <Dialog.Title>Alert</Dialog.Title>
      <ScrollView>
        <Dialog.Content style={{paddingBottom: 0, marginBottom: 0}}>
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            style={{alignContent: 'flex-start'}}
            onPress={() => {
              emptyCart();
            }}>
            Empty Cart
          </Button>
          <Button
            onPress={() => {
              makeNotVisible();
            }}>
            Done
          </Button>
        </Dialog.Actions>
      </ScrollView>
    </Dialog>
  );
};

export default MyComponent;
