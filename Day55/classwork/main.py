# print("luka")

# num1 = int(input("enter your first number "))
# num2 = int(input("enter your second number "))

# print(num1 - num2)
# print(num1 * num2)
# print(num1 / num2)
# print(num1 + num2)
# print(num1 // num2)


# a = int(input("pirveli gverdi "))
# b = int(input("meore gverdi "))
# c= int(input("mesame gverdi "))

# if (a + b > c and c + b > a and a + c > b):
#     print("Es samkutxedi iarsebebs")
# else:
#     print("es samkutxedi ar iarsebebs")


def calculator(operator,x,y):
    if operator == "+":
        return x + y
    elif operator == "-":
        return x - y
    elif operator == "*":
        return x * y
    elif operator == "/":
        if y != 0:
            return x / y
    else:
        return "invalid operation"
    
num1 = 5
num2 = 10
num3 = num1 + num2
print(num3)
num3 = num1 * num2
print(num3)


        
    




