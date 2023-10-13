from turtle import *

#we want to paint a house

width(5)
color("black")
speed(15)

forward(150)
left(90)
forward(150)
left(90)
forward(150)
left(90)
forward(150)

#drawing door w

left(90)
forward(50)
begin_fill()
color("blue")
left(90)
forward(75)
right(90)
forward(50)
right(90)
forward(75)
end_fill()

#3 drawing roof

penup()
goto(150, 150)
pendown()
begin_fill()
color("blue")

right(150)
forward(150)
left(120)
forward(150)
end_fill()


#4 drawing windows

begin_fill()
color("black")
left(120)
forward(15)
right(90)
forward(45)
left(90)
forward(40)   
left(90)
forward(45)
right(90)
forward(40)
right(90)
forward(45)
left(90)
forward(40)
left(90)
forward(45)
end_fill()

exitonclick()


