// Sunflowers
// Travis Ahern
// Jan. 16, 2019

#include <iostream>

using namespace std;

int numOfSunflowers;

// create number array
int **numArray;

int **rotate90clock() {
  // rotate array 90 degrees clockwise
  int **newArr = new int *[numOfSunflowers];
  for (int i = 0; i < numOfSunflowers; i++)
    newArr[i] = new int[numOfSunflowers];

  for (int i = 0; i < numOfSunflowers; i++)
    for (int j = 0; j < numOfSunflowers; j++)
      newArr[i][j] = numArray[j][i];

  return newArr;
}

int arrMin() {
  // find smallest value in array
  int smallestValue = numArray[0][0];
  for (int i = 0; i < numOfSunflowers; i++)
    for (int j = 0; j < numOfSunflowers; j++)
      if (numArray[i][j] < smallestValue)
        smallestValue = numArray[i][j];

  return smallestValue;
}

int main()
{
  cin >> numOfSunflowers;

  // create number array
  numArray = new int *[numOfSunflowers];
  for (int i = 0; i < numOfSunflowers; i++)
      numArray[i] = new int[numOfSunflowers];
  // int **numArray = new int *[numOfSunflowers];
  // for (int i = 0; i < numOfSunflowers; i++)
  //   numArray[i] = new int[numOfSunflowers];

  // put input in number array
  for (int i = 0; i < numOfSunflowers; i++)
    for (int j = 0; j < numOfSunflowers; j++)
      cin >> numArray[i][j];

  // rotate array
  int arrayMin = arrMin();
  while (numArray[0][0] != arrayMin)
    numArray = rotate90clock();

  // output numArray
  for (int i = 0; i < numOfSunflowers; i++)
  {
    for (int j = 0; j < numOfSunflowers; j++)
      cout << numArray[i][j] << " ";

    cout << endl;
  }

  return 0;
}
