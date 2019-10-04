# Text Interactive - Test for Python
# Travis Ahern


# functions
def create_world(rows, cols):
    # create a 2D array with a bunch of previously defined things
    array = []

    # creating the array
    for row in range(rows):
        array.append([])

        # border on top and bottom
        if row == 0 or row == rows-1:
            for col in range(cols):
                array[row].append({"tile": "border", "occupied": ""})

        # making the world
        else:
            for col in range(cols):
                # border on left and right
                if col == 0 or col == cols-1:
                    array[row].append({"tile": "border", "occupied": ""})
                # the world
                else:
                    array[row].append({"tile": "grass", "occupied": ""})
    return array


def world_map(rows, cols):
    # print a map of the world
    for row in range(rows):
        line = ""
        for col in range(cols):
            if world[row][col]["occupied"] != "":
                line += mapLegend[ world[row][col]["occupied"] ]
            else:
                line += mapLegend[ world[row][col]["tile"] ]
        print(line)


def action_list():
    # print a list of actions
    for key in sorted(actions.keys()):
        print(key, ":", actions[key])


def move(direction):
    # move in a specified direction
    if direction == "up" or direction == "north":
        playerLocal["row-y"] -= 1

    elif direction == "right" or direction == "east":
        playerLocal["col-x"] += 1

    elif direction == "down" or direction == "south":
        playerLocal["row-y"] += 1

    elif direction == "left" or direction == "west":
        playerLocal["col-x"] -= 1


# global variables
mapLegend = {
    "grass"     : '"',
    "sand"      : "'",
    "rocks"     : ":",
    "safe path" : "#",
    "building"  : "^",
    "border"    : "|",
    "player"    : "@",
    "enemy"     : "*",
}

size = 15 # must be even for player to start at centre
world = create_world(size, size)

actions = {
    "quit"  : "quit game",
    "help"  : "show this text",
    "map"   : "show a map of the world",
    "move"  : "move in a specified direction",
    "attack": "attack a creature in vicinity",
    "take"  : "take a specified item in vicinity",
    "heal"  : "drink a Health Potion if available"
}

# action_list()
world_map(size, size)

player = {
    "inventory": [],
    "hp"       : 10,
    "attack"   : 10,
    "defense"  : 10
}

playerLocal = {"row-y": int((size-1)/2), "col-x": int((size-1)/2)}

# print("Player actions go here:")
#
# # game loop
# while True:
#     # player chooses an action
#     print("")
#     playerAction = input()
#     print("")
#     playerAction = playerAction.lower()
#
#     # possible actions to be taken
#     if not playerAction.find("quit"):
#         # quit game
#         print("Goodbye Friend")
#         break
#
#     elif not playerAction.find("help"):
#         # displays a list of possible actions
#         action_list()
#
#     elif not playerAction.find("map"):
#         # display a map and legend
#         world_map()
#
#     elif not playerAction.find("move"):
#         # move in a direction
#         playerAction = playerAction.strip("move ")
#         move(playerAction)
