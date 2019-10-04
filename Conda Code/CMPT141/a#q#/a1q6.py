# Travis Ahern
# 11271630

cost_of_case = float(input("Payment for case: "))
staff_working = int(input("Staff: "))

print("Phoenix Wright's 25% is:", "$"+str(cost_of_case*0.25))
print("The staff's share of 75% is:", "$"+str(cost_of_case*0.75))
print("Each staff member receives:", "$"+str(cost_of_case*0.75/staff_working))
