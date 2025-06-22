"""
This module implements the Three Sum problem.

Given an array of integers `nums` and an integer `target`, 
return all unique triplets `[nums[i], nums[j], nums[k]]` such that:
- `i != j`, `i != k`, and `j != k`
- `nums[i] + nums[j] + nums[k] == target`

The solution set must not contain duplicate triplets.
"""

def three_sum(nums, target):
    """
    Solves the Three Sum problem.
    
    Args:
        nums (List[int]): The input array of integers.
        target (int): The target sum.
    
    Returns:
        List[List[int]]: A list of all unique triplets that sum to the target.
    """
    nums.sort()
    result = []
    
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        
        left = i + 1
        right = len(nums) - 1
        
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            
            if total == target:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                left += 1
                right -= 1
            elif total < target:
                left += 1
            else:
                right -= 1
    
    return result