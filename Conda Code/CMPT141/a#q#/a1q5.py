# Travis Ahern
# 11271630

import math as m

H = float(input("The height at which the computer is dropped: "))
print("the ground is now covered with your beautiful computer bits")
time_of_impact = m.sqrt(2*H/9.8)
print("the computer is dropped at", H, "meters and hit the ground after", time_of_impact, "seconds")
