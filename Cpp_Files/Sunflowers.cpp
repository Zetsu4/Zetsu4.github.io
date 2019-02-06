// Sunflowers
// Travis Ahern
// Jan. 16, 2019

#include <iostream>

using namespace std;

int numOfSunflowers;

// create number array
int **numArray;

int **rotate90clock()
{
  // rotate array 90 degrees clockwise
  int **newArr = new int *[numOfSunflowers];
  for (int i = 0; i < numOfSunflowers; i++)
    newArr[i] = new int[numOfSunflowers];

  for (int i = 0; i < numOfSunflowers; i++)
    for (int j = 0; j < numOfSunflowers; j++)
    {
      newArr[i][j] = numArray[j][i];
      cout << newArr[i][j] << endl;
    }

  cout << newArr << endl;

  return newArr;
}

int arrMin()
{
  // find smallest value in array
  int smallestValue = numArray[0][0];
  for (int i = 0; i < numOfSunflowers; i++)
    for (int j = 0; j < numOfSunflowers; j++)
    {
      if (numArray[i][j] < smallestValue)
        smallestValue = numArray[i][j];
      cout << numArray[i][j] << endl;
    }

    cout << smallestValue << endl;

  return smallestValue;
}

int main()
{
  cin >> numOfSunflowers;

  // create number array
  numArray = new int *[numOfSunflowers];
  for (int i = 0; i < numOfSunflowers; i++)
    numArray[i] = new int[numOfSunflowers];

  cout << numArray << endl;

  // put input in number array
  for (int i = 0; i < numOfSunflowers; i++)
    for (int j = 0; j < numOfSunflowers; j++)
    {
      cin >> numArray[i][j];
      cout << numArray[i][j] << endl;
    }

  // rotate array
  cout << numArray << endl;
  int arrayMin = arrMin();
  cout << numArray << endl;
  while (numArray[0][0] != arrayMin)
  {
  cout << numArray << endl;
  numArray = rotate90clock();
  }
  cout << numArray << endl;

  // output numArray
  for (int i = 0; i < numOfSunflowers; i++)
  {
    for (int j = 0; j < numOfSunflowers; j++)
      cout << numArray[i][j] << " ";

    cout << endl;
  }

  return 0;
}
