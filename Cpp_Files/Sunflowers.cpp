// Sunflowers
// Travis Ahern
// Jan. 16, 2019

#include <iostream>

using namespace std;

int rotate90clock(anArr, arrSqr) {
    // rotate array 90 degrees clockwise
    int newArr[arrSqr*arrSqr];

        // LINE 1
    for (int i = 0; i < arrSqr; i++)
    {
        newArr[i] = anArr[i+arrSqr*(arrSqr-1)];
    }

    return newArr;
}

int arrMin(anArr, arrLen) {
    // find smallest value in array
    int smallestValue = anArr[0];
    for (int i = 0; i < arrLen; i++)
    {
        if (anArr[i] < smallestValue)
        {
            smallestValue = anArr[i]
        }
    }

    return smallestValue;
}

int main()
{
    int numOfSunflowers;
    cin >> numOfSunflowers;

    // create numArray
    int numArray[numOfSunflowers * numOfSunflowers];
    for (int i = 0; i < numOfSunflowers * numOfSunflowers; i++)
    {
        cin >> numArray[i];
    }

    // rotate array
    int arrayMin = arrMin(numArray, numOfSunflowers * numOfSunflowers);
    while (numArray[i] != arrayMin)
    {
        numArray = rotate90clock(numArray, numOfSunflowers);
    }

    // output numArray
    for (int i = 0; i < numOfSunflowers * numOfSunflowers; i++)
    {
        if (i % numOfSunflowers) 
        {
            cout << endl;
        }

        cout << numArray[i] + ' ';
    }
}
