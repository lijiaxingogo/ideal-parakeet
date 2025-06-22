def two_sum(nums, target):
    """
    Finds the indices of the two numbers such that they add up to the target.
    
    Args:
        nums (list[int]): The list of integers.
        target (int): The target sum.
    
    Returns:
        list[int]: The indices of the two numbers.
    """
    # Create a dictionary to store the complement of each number
    complements = {}
    
    # Iterate through the list of numbers
    for i, num in enumerate(nums):
        # Check if the complement of the current number is in the dictionary
        complement = target - num
        if complement in complements:
            # If so, return the indices of the two numbers
            return [complements[complement], i]
        # Otherwise, add the current number and its index to the dictionary
        complements[num] = i
    
    # If no two numbers add up to the target, return an empty list
    return []