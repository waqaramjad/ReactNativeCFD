import 'react-native';
import React, {useState} from 'react';
import MenuData from '../data/MenuData';

const cartTests = require('../App');

describe('Cart item test', () => {
  test('adding water to cart should cost 1.99', () => {
    function testSingleItem() {
      var tempCart = [];
      function testAddToCart(cartItem) {
        tempCart = [...tempCart, cartItem];
        return tempCart;
      }
      testAddToCart(MenuData[0]);
      expect(tempCart[0].cost).toEqual(1.99);
    }
    testSingleItem();
  });
});

describe('Cart calculation test', () => {
  test('adding one of each item should total 42.94', () => {
    function testAllItems() {
      var tempCart = [];
      function testAddToCart(cartItem) {
        tempCart = [...tempCart, cartItem];
        return tempCart;
      }
      for (let i = 0; i < MenuData.length; i++) {
        testAddToCart(MenuData[i]);
      }
      expect(
        Number(
          tempCart
            .map(item => item.cost)
            .reduce((prev, curt) => prev + curt)
            .toFixed(2),
        ),
      ).toEqual(42.94);
    }
    testAllItems();
  });
});

describe('Cart multiple of one item calculation test', () => {
  test('adding 5 waters should total 9.95', () => {
    function testAllItems() {
      var tempCart = [];
      function testAddToCart(cartItem) {
        tempCart = [...tempCart, cartItem];
        return tempCart;
      }
      for (let i = 0; i < 5; i++) {
        testAddToCart(MenuData[0]);
      }
      expect(
        Number(
          tempCart
            .map(item => item.cost)
            .reduce((prev, curt) => prev + curt)
            .toFixed(2),
        ),
      ).toEqual(9.95);
    }
    testAllItems();
  });
});
