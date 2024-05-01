x = [1,2,3,4,5,6,7,8]

print(min(x))


# def remove_smallest(numbers):
 
  
#   min_numbers = numbers[0]

#   for number in numbers:
#     if min_numbers > number:
#         min_numbers = number




def lists(number_list):
    max_number = number_list[0]


    for number in number_list:
        if max_number < number:
            max_number = number
    return max_number

    
number_list = [1,2,4,7,4,8]

print(lists(number_list))