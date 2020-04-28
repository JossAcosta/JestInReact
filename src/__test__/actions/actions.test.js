import actions from '../../actions/';
import ProducMock from '../../__mocks__/ProductMock';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('', () => {
    test('AddToCart Action ', () => {
        const payload = ProviderMock;
        const expected = {
            type: "ADD_TO_CART",
            payload,
        };
        expect(actions.addToCart(payload)).toEqual(expected);
    });
});

test('removefromcart Action', () => {
    const payload = ProviderMock;
    const expected = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    expect(actions.removeFromCart(payload)).toEqual(expected);
  });