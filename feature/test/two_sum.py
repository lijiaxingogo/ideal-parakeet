"""
Two Sum Problem

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example:
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

"""

def two_sum(nums, target):
    """
    Finds the indices of two numbers in the given list that add up to the target.

    Args:
        nums (list[int]): The list of integers to search.
        target (int): The target sum.

    Returns:
        list[int]: The indices of the two numbers that add up to the target.
    """
    num_dict = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_dict:
            return [num_dict[complement], i]
        num_dict[num] = i
    return []