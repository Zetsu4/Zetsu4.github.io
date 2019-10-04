# Travis Ahern
# 11271630
# Calculate Average Speed, program


def calculate_speed(distance, time):
    """
    Calculate the speed it takes to travel
    some distance in some time.

    :param distance: the distance needed to travel
    :param time: the time the distance is to be covered
    :return: the speed needed to travel the distance in the given time
    """
    return distance/time


print("Calculate Speed")
distance_traveled = float(input("Distance traveled (km): "))
time_interval = float(input("Time allotted for travel (hours): "))

print("To travel", distance_traveled, "km in", time_interval, "hours, you must travel at",
      calculate_speed(distance_traveled, time_interval), "km/h")
