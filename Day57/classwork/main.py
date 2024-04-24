# 1
# Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

# Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

# If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
# If he doesn't get 10 hoops, return the string "Keep at it until you get it".

def hoop_count(n):
    if n > 10 or n == 10:
        return ("Great, now move on to tricks")
    elif n < 10:
        return ("Keep at it until you get it")
    else:
        return ("nothing")


# 2

# Nathan loves cycling.
# Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
# You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

# For example:

# time = 3 ----> litres = 1
# time = 6.7---> litres = 3
# time = 11.8--> litres = 5


def litres(time):
    return (int(time * 0.5))


# 3

# Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
# Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

# Example:
# n= 5, m=5: 25
# n=-5, m=5:  0

def paperwork(n, m):
      if n < 0:
        return (0)
      elif m < 0:
        return (0)
      else:
        return (n * m)
      
# 4



