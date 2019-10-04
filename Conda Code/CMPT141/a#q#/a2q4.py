# Travis Ahern
# 11271630
# The Lemonade Stand Calculator


def cost(n_lemons, cost_per_lemon):
    """
    Calculate the amount spent for lemons.

    :param n_lemons: number of lemons purchased
    :param cost_per_lemon: cost per lemon
    :return: the total cost of the lemons
    """
    return n_lemons * cost_per_lemon


def revenue(donations, n_lemonades, price_per_lemonade):
    """
    Calculates all the money made for the day.

    :param donations: donations received
    :param n_lemonades: the number of lemonades sold
    :param price_per_lemonade: the cost per lemonade
    :return: the total money relieved for the day
    """
    return donations + n_lemonades * price_per_lemonade


def profit(donations, n_lemonades, price_per_lemonade, n_lemons, cost_per_lemon):
    """
    Calculates the net gain,
    considering lemon expenses,
    donations and lemonades sold

    :param donations: donations received
    :param n_lemonades: number of lemonades sold
    :param price_per_lemonade: selling price of lemonade
    :param n_lemons: number of lemons purchased
    :param cost_per_lemon: the cost per lemon
    :return: the total profit of lemonade sales
    """
    return revenue(donations, n_lemonades, price_per_lemonade) - cost(n_lemons, cost_per_lemon)


n_lemonades = float(input("How many lemonades were sold? "))
n_lemons = float(input("How many lemons did you use? "))
price_per_lemonade = float(input("How much does one lemonade cost (dollars)? "))
cost_per_lemon = float(input("How much does one lemon cost (dollars)? "))
donations = float(input("How much donations where received (dollars)? "))

print("Cost: $" + str(cost(n_lemons, cost_per_lemon)))
print("Revenue: $" + str(revenue(donations, n_lemonades, price_per_lemonade)))
print("Profit: $" + str(profit(donations, n_lemonades, price_per_lemonade, n_lemons, cost_per_lemon)))
