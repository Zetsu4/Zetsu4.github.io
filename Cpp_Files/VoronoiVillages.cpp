// Voronoi Villages
// Travis Ahern
// Feb. 5, 2019

#include <iostream>
#include <iomanip>

using namespace std;

int *sortInt(int arr[], int length)
{
  // sorts an array of ints

  for (int i = 0; i < length; i++)
  // sorting
  {
    int smallPos = i;

    for (int j = i; j < length; j++)
      // one pass
      if (arr[j] < arr[smallPos])
        smallPos = j;

    // swap elements
    int newThing = arr[i];
    arr[i] = arr[smallPos];
    arr[smallPos] = newThing;
  }
  return arr;
}

float *sortFloat(float arr[], int length)
{
  // sorts an array of floats

  for (int i = 0; i < length; i++)
  // sorting
  {
    int smallPos = i;

    for (int j = i; j < length; j++)
      // one pass
      if (arr[j] < arr[smallPos])
        smallPos = j;

    // swap elements
    float newThing = arr[i];
    arr[i] = arr[smallPos];
    arr[smallPos] = newThing;
  }
  return arr;
}

float abs(float num)
{
  if (num < 0)
    return num * -1;

  return num;
}

float *findSizes(int *arr1, int length1, float arr2[], int length2)
{
  for (int i = 1; i < length1 - 1; i++)
  {
    float dist1 = abs((float(arr1[i + 1]) - float(arr1[i])) / 2.0);
    float dist2 = abs((float(arr1[i]) - float(arr1[i - 1])) / 2.0);
    arr2[i] = float(dist1 + dist2);
  }

  arr2[0] = -1.0;
  arr2[length2 - 1] = -1.0;

  return arr2;
}

int main()
{
  // setting variables
  int numOfVillages;

  cin >> numOfVillages;

  // get positions
  int *villagePos = new int[numOfVillages];
  for (int i = 0; i < numOfVillages; i++)
    cin >> villagePos[i];

  float *villageSizes = new float[numOfVillages];

  // organize positions
  villagePos = sortInt(villagePos, numOfVillages);

  // determine distances between positions
  villageSizes = findSizes(villagePos, numOfVillages, villageSizes, numOfVillages);

  villageSizes = sortFloat(villageSizes, numOfVillages);

  cout << setprecision(2) << villageSizes[2] << endl;

  return 0;
}
