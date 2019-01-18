// Sunflowers
// Travis Ahern
// Jan. 16, 2019

#include <iostream>

using namespace std;

int rotate90clock(int anArr, int arrSqr) {
  // rotate array 90 degrees clockwise
  int newArr[arrSqr][arrSqr];

  for (int i = 0; i < arrSqr; i++)
    for (int j = 0; j < arrSqr; j++)
      newArr[i][j] = anArr[j][i];

  return **newArr;
}

int arrMin(int anArr, int arrSqr) {
  // find smallest value in array
  int smallestValue = anArr[0][0];
  for (int i = 0; i < arrSqr; i++)
    for (int j = 0; j < arrSqr; j++)
      if (anArr[i][j] < smallestValue)
        smallestValue = anArr[i][j];

  return smallestValue;
}

int main()
{
  int numOfSunflowers;
  cin >> numOfSunflowers;

  // create numArray
  int numArray[numOfSunflowers][numOfSunflowers];
  for (int i = 0; i < numOfSunflowers; i++)
    for (int j = 0; j < numOfSunflowers; i++)
      cin >> numArray[i][j];

  // rotate array
  int arrayMin = arrMin(**numArray, numOfSunflowers);
  while (numArray[0][0] != arrayMin)
    numArray = rotate90clock(**numArray, numOfSunflowers);

  // output numArray
  for (int i = 0; i < numArray.length(); i++)
  {
    for (int j = 0; j < numArray[i].length(); j++)
      cout << numArray[i][j] + ' ';

    cout << endl;
  }
}