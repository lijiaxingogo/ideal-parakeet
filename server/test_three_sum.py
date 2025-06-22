import unittest
from three_sum import three_sum

class TestThreeSum(unittest.TestCase):
    def test_empty_list(self):
        self.assertEqual(three_sum([], 0), [])

    def test_single_element(self):
        self.assertEqual(three_sum([0], 0), [])

    def test_basic_case(self):
        self.assertEqual(three_sum([-1, 0, 1, 2, -1, -4], 0), [[-1, -1, 2], [-1, 0, 1]])

    def test_duplicate_elements(self):
        self.assertEqual(three_sum([-2, 0, 0, 2, 2], 0), [[-2, 0, 2]])

    def test_negative_target(self):
        self.assertEqual(three_sum([-1, 0, 1, 2, -1, -4], -1), [[-4, 1, 2], [-1, -1, 1]])

if __name__ == '__main__':
    unittest.main()