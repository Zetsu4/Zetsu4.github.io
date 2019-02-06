// Sunflowers
// Travis Ahern
// Jan. 16, 2019

#include <iostream>

using namespace std;

int **rotate90clock(int **arr, int x, int y)
{
  // rotate array 90 degrees clockwise
  int **newArr = new int *[y];
  for (int i = 0; i < y; i++)
    newArr[i] = new int[x];

  for (int i = 0; i < y; i++)
    for (int j = 0; j < x; j++)
      newArr[i][j] = arr[x - 1 - j][i];

  return newArr;
}

int arrMin(int **arr, int x, int y)
{
  // find smallest value in array
  int smallestValue = arr[0][0];
  for (int i = 0; i < y; i++)
    for (int j = 0; j < x; j++)
      if (arr[i][j] < smallestValue)
        smallestValue = arr[i][j];

  return smallestValue;
}

int main()
{
  int numOfSunflowers;
  cin >> numOfSunflowers;

  // create number array
  int **numArray = new int *[numOfSunflowers];
  for (int i = 0; i < numOfSunflowers; i++)
    numArray[i] = new int[numOfSunflowers];

  // put input in number array
  for (int i = 0; i < numOfSunflowers; i++)
    for (int j = 0; j < numOfSunflowers; j++)
      cin >> numArray[i][j];

  // rotate array
  int arrayMin = arrMin(numArray, numOfSunflowers, numOfSunflowers);
  while (numArray[0][0] != arrayMin)
    numArray = rotate90clock(numArray, numOfSunflowers, numOfSunflowers);

  // output numArray
  for (int i = 0; i < numOfSunflowers; i++)
  {
    for (int j = 0; j < numOfSunflowers; j++)
      cout << numArray[i][j] << " ";

    cout << endl;
  }

  return 0;
}
