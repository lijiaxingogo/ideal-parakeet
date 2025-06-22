def two_sum(nums, target):
    """
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    
    Args:
        nums (List[int]): Array of integers
        target (int): Target sum
    
    Returns:
        List[int]: Indices of the two numbers that sum up to the target
    """
    # Create a dictionary to store the complement of each number
    complement_dict = {}
    
    # Iterate through the array
    for i, num in enumerate(nums):
        # Check if the complement of the current number is in the dictionary
        complement = target - num
        if complement in complement_dict:
            # If it is, return the indices of the two numbers
            return [complement_dict[complement], i]
        # Otherwise, add the current number and its index to the dictionary
        complement_dict[num] = i
    
    # If no two numbers sum up to the target, return an empty list
    return []