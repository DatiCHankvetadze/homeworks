# 1.A Needle in the Haystack
def find_needle(haystack):
    index = haystack.index("needle")
    if "needle" in haystack:
         return f"found the needle at position {index}"

   # 2.MakeUpperCase
def make_upper_case(s):
    return s.upper()

# 3.Sum Arrays
def sum_array(a):
    if not a:
        return 0
    else:
        return sum(a)
    
# 4.Invert values
def invert(lst):
    my_arr = []
    for i in lst:
        my_arr.append(i * -1)
    return my_arr    

# 5. Calculate average
def find_average(numbers):
    if not numbers:
        return 0
    else:
        return sum(numbers) / len(numbers)
    
# 6.Are You Playing Banjo?
def are_you_playing_banjo(name):
    if name[0] in "rR":
        return (name + " plays banjo" )
    else:
        return (name + " does not play banjo")
   
    

