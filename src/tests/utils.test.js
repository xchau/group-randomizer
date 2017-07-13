import { assert, expect } from 'chai';
import { shuffle, groupify } from '../utils/utils';

describe('Test utility functions', () => {
  describe('#shuffle()', () => {
    it('should sort of shuffle array elements', () => {
      const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

      expect(shuffle(arr)).to.not.have.ordered.members(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
    });
  });

  describe('#groupify()', () => {
    it('should evenly split arr of names into N groups', () => {
      const arr = ['A', 'B', 'C', 'D', 'E'];

      expect(groupify(arr, 3)['1']).to.eql(['A', 'D']);
    });
  });
});
