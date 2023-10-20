print(5 % 2) # გამოითვლის ნაშთს პირდაპირ არ გაყოფს და არ დაწერს 2.5 (/)-(%) დაწერს რომ ნაშთი დარჩა 1 ანუ
#even ლუწი
#odd კენტი 
#f/str= ცვლადის შეყვანა ცვლადში

number_count = 1

while number_count <= 30:
    if number_count % 2 == 1:
        print(str(number_count) + " odd")
    else:
        print(str(number_count) + " is even")
    number_count += 1

    print("finished")


i = 2
while i < 30:
    print(i,"კენტია")
    print(i+1,"ლუწია")
    i += 2

    i = 10
    # i = i+1
    i +=1
    print (i) 

i = 2
while i < 20:
    print(i+2, "ლუწია")
    i += 2

sum = 0 
i = 0
while i < 100:
    print(i+2, "ლუწია")
    i +=2
print(sum)

sum = 0
x = 100
while x > 0:
    sum += x
    x -= 2

print(sum)






















