# nums = [1, 3, 5, 2, 4, 8, 6, 7, 8, 9, 10]
# # print(len(nums)) #ითვლის სიაში მყოფ ელემენტებს

# # surname = "chankvetadze"
# # print(len(surname))


# set_of_nums = set(nums)
# print(set_of_nums)


# letters = ["a", "b", "c"]
# letters += ["d", "e"]

# print(len(letters))
# print(letters)

# age = 10
# age += 5
# print(age)


# str = "some text"
# x = len(str)
# print(x)

# x ="abc"

# x *= 2

# print(len(x))

# nums = [1, 2, 3]
# nums.append(4) #appemd amatebs siis boloshi da damatebis funqcia
# print(nums)

# words = ["python", "fun"]
#       #0
# words.insert(1, "is") #amatebs sasurvel elements siis sasurvel poziciaze
# #sad chajdes #ra chajdes
# print(words)

# nums = ["mama", "deda"]
# nums.insert(1, "dati")
# nums.append("gio")
# print(nums)


# letters = ["p", "q", "r"]

# print(letters.index('r'))
# print(letters.index('q'))


# x = [1, 8, 42, 3]
# print(min(x)) #x-სიის მინიმალური რიცხვი
# print(max(x)) #x-სიის მაქსიმალური რიცხვი


# nums = [1, 8, 42, 3]
# res = min(nums) + max(nums)

# print(res)


# x = [2, 4, 6, 2, 4, 7, 2, 9]
# print(x.count(2)) # x სიაში ითვლის 2 რამდენჯერაა
# x.remove(4) #წაშლის 4-ს x სიიდან
# print(x)
# x.reverse() #სიის შებრუნება
# print(x)



# x = [2, 4, 6, 2, 4, 7, 2, 9]
# print(x.count(2)) 
# x.remove(4) 
# print(x)
# x.reverse() 
# print(x)


# while x == 4:
#     print(4)



# nums = [4, 5, 6]
# msg = "Numbers: {0} {1} {2}". format(nums[0], nums[1], nums[2])
# print(msg)


# family = ["ჩემი დედიკოა ----, ჩემი მამიკოა ----, მე ვარ  ----"]
# msg = "family: {0} {1} {2}". format(family[], family["reziko"], family["dati"])
# print(msg)

# family = ["tatuli", "reziko", "dati"]
# msg = "my mother is: {0}". format(family[0])
# print(msg)
# msg = "my father is: {0}". format(family[1])
# print(msg)
# msg = "my name is: {0}". format(family[2])
# print(msg)

family = ["tatuli", "reziko", "dati"]
msg = "my mother is: {}". format(family[0])
print(msg)
msg = "my father is: {}". format(family[1])
print(msg)
msg = "my name is: {}". format(family[2])
print(msg)