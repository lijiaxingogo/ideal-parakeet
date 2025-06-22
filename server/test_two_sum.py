import unittest
from two_sum import two_sum

class TestTwoSum(unittest.TestCase):
    def test_two_sum_basic(self):
        nums = [2, 7, 11, 15]
        target = 9
        expected = [0, 1]
        self.assertEqual(two_sum(nums, target), expected)

    def test_two_sum_duplicate(self):
        nums = [3, 2, 4, 3]
        target = 6
        expected = [1, 3]
        self.assertEqual(two_sum(nums, target), expected)

    def test_two_sum_no_solution(self):
        nums = [1, 2, 3, 4]
        target = 10
        expected = []
        self.assertEqual(two_sum(nums, target), expected)

if __name__ == '__main__':
    unittest.main()