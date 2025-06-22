"""
Two Sum Problem

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example:
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
"""

def two_sum(nums, target):
    """
    Solves the Two Sum problem.

    Args:
        nums (List[int]): An array of integers.
        target (int): The target sum.

    Returns:
        List[int]: The indices of the two numbers that sum up to the target.
    """
    # Create a dictionary to store the complement of each number
    complement_dict = {}

    # Iterate through the list of numbers
    for i, num in enumerate(nums):
        # Check if the complement of the current number is in the dictionary
        complement = target - num
        if complement in complement_dict:
            # If the complement is found, return the indices
            return [complement_dict[complement], i]
        # Otherwise, add the current number and its index to the dictionary
        complement_dict[num] = i

    # If no pair is found, return an empty list
    return []