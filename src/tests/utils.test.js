import { assert, expect } from 'chai';
import {
  shuffle,
  groupify,
  capitalize,
  createSet
} from '../utils/utils';

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

      expect(groupify(arr, 3)[1]).to.eql(['B', 'E']);
    });
  });

  describe('#capitalize()', () => {
    it('should capitalize the first letter of arg', () => {
      expect(capitalize('tom')).to.equal('Tom');
    });
  });

  describe('#createSet()', () => {
    it('should create a randomized and capitalized array', () => {
      expect(createSet('a, b, c')).to.have.members(['A', 'B', 'C']);
      expect(createSet('a, b, c, d, e, f, g')).to.not.have.ordered.members([['A', 'B', 'C', 'D', 'E', 'F', 'G']]);
    });
  });
});
