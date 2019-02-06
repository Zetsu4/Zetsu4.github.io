// Voronoi Villages
// Travis Ahern
// Feb. 5, 2019

#include <iostream>

using namespace std;

int* sortInt(int arr[], int length)
{
  // sort an array

  for (int i=0; i<length; i++)
  // sorting
  {
    int smallPos = i;

    for (int j=i; j<length; j++)
    // one pass
      if (arr[j] < arr[i])
        smallPos = j;

    // swap elements
    int newThing = arr[i];
    arr[i] = arr[smallPos];
    arr[smallPos] = newThing;
  }
  return arr;
}

float* sortFloat(float arr[], int length)
{
  // sorts an array

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

int* findSizes(int arr1[], int length1, float arr2[], int length2)
{
  for (int i = 1; i < length1 - 1; i++)
  {
    float dist1 = (float(arr1[i + 1]) - float(arr1[i])) / 2.0;
    float dist2 = (float(arr1[i]) - float(arr1[i - 1])) / 2.0;
    arr2[i] = dist1 + dist2;
  }

  arr2[0] = infinity();
  arr2[length2] = infinity();

  return arr2;
}

int main()
{
  // setting variables
  int numOfVillages;

  cin >> numOfVillages;

  // get positions
  int villagePos[numOfVillages];
  for (int i=0; i < numOfVillages; i++)
    cin >> villagePos[i];

  float villageSizes[numOfVillages];

  // organize positions
  villagePos = sortInt(villagePos, numOfVillages);

  // determine distances between positions
  villageSizes = findSizes(villagePos, numOfVillages, villageSizes, numOfVillages);

  villageSizes = sortFloat(villageSizes);

  cout << villageSizes[0] << endl;

  return 0;
}
