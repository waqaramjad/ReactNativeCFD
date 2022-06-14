import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Menu from './components/Menu';
import CartBar from './components/CartBar';
import CartDialog from './components/CartDialog';
import {Provider} from 'react-native-paper';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  const addToCart = menuItem => {
    setCart([...cart, menuItem]);
    console.warn(menuItem);
  };

  const emptyCart = () => {
    setCart([]);
    setIsVisible(false);
  };

  const removeFromCart = index => {
    let tempArray = cart;
    tempArray.splice(index, 1);
    setCart(tempArray);
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 10);
  };

  return (
    <Provider>
      <SafeAreaView style={styles.mainView} accessibilityLabel="testview">
        <StatusBar />
        <ScrollView horizontal={false}>
          <View>
            <Menu addToCart={addToCart} />
          </View>
        </ScrollView>
        <CartDialog
          visible={isVisible}
          makeNotVisible={toggleVisible}
          removeFromCart={removeFromCart}
          cart={cart}
          emptyCart={emptyCart}
        />
        <CartBar
          cart={cart}
          emptyCart={emptyCart}
          makeVisible={toggleVisible}
        />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  mainView: {
    backgroundColor: '#000000',
  },
});

export const testAddToCart = cartItem => {
  const [cart, setCart] = useState([]);
  setCart([...cart, cartItem]);
  return cart;
};

export default App;
