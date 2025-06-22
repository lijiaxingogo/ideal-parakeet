import unittest
from two_sum import two_sum

class TestTwoSum(unittest.TestCase):
    def test_two_sum_found(self):
        nums = [2, 7, 11, 15]
        target = 9
        self.assertEqual(two_sum(nums, target), [0, 1])
    
    def test_two_sum_not_found(self):
        nums = [3, 2, 4]
        target = 6
        self.assertEqual(two_sum(nums, target), [])
    
    def test_two_sum_empty_list(self):
        nums = []
        target = 0
        self.assertEqual(two_sum(nums, target), [])
    
    def test_two_sum_duplicate_values(self):
        nums = [3, 2, 4, 2]
        target = 6
        self.assertEqual(two_sum(nums, target), [1, 3])

if __name__ == '__main__':
    unittest.main()