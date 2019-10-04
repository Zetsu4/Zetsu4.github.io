# Travis Ahern
# 11271630
# Calculate Cost of a Trip, program


def trip_cost(air_fare, room_cost, number_of_people, number_of_nights):
    """
    calculates the total cost of the travel costs, and room costs
    based on the number of people attending.


    :param air_fare: cost of travel fare per person in dollars
    :param room_cost: cost of double room per night in dollars
    :param number_of_people: number of people attending
    :param number_of_nights: nights staying
    :return: the total cost of the trip
    """
    number_of_rooms = number_of_people // 2 + number_of_people % 2
    total_cost_of_the_trip = air_fare * number_of_people + number_of_rooms * room_cost * number_of_nights
    return total_cost_of_the_trip


print("Calculate Trip Cost")

fare = float(input("travel cost per person in dollars: "))
room = float(input("double room cost per night in dollars: "))
people = int(input("number of people: "))
nights = int(input("number of nights: "))

total_cost = trip_cost(fare, room, people, nights)

print("The total cost for the trip will be", "$" + str(total_cost))
