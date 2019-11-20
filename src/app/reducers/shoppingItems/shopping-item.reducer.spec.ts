import { shoppingItemReducer, initialState } from './shopping-item.reducer';

describe('ShoppingItem Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = shoppingItemReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
