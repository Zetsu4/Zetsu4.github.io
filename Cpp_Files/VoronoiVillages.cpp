// Voronoi Villages
// Travis Ahern
// Feb. 5, 2019

#include <iostream>
#include <iomanip>

using namespace std;

long int *sortInt(long int arr[], long int length)
{
  // sorts an array of long ints

  for (long int i = 0; i < length; i++)
  // sorting
  {
    long int smallPos = i;

    for (long int j = i; j < length; j++)
      // one pass
      if (arr[j] < arr[smallPos])
        smallPos = j;

    // swap elements
    long int newThing = arr[i];
    arr[i] = arr[smallPos];
    arr[smallPos] = newThing;
  }
  return arr;
}

double *sortdouble(double arr[], long int length)
{
  // sorts an array of doubles

  for (long int i = 0; i < length; i++)
  // sorting
  {
    long int smallPos = i;

    for (long int j = i; j < length; j++)
      // one pass
      if (arr[j] < arr[smallPos])
        smallPos = j;

    // swap elements
    double newThing = arr[i];
    arr[i] = arr[smallPos];
    arr[smallPos] = newThing;
  }
  return arr;
}

double abs(double num)
{
  if (num < 0)
    return num * -1;

  return num;
}

double *findSizes(long int *arr1, long int length1, double arr2[], long int length2)
{
  for (long int i = 1; i < length1 - 1; i++)
  {
    double dist1 = abs((double(arr1[i + 1]) - double(arr1[i])) / 2.0);
    double dist2 = abs((double(arr1[i]) - double(arr1[i - 1])) / 2.0);
    arr2[i] = double(dist1 + dist2);
  }

  arr2[0] = -1.0;
  arr2[length2 - 1] = -1.0;

  return arr2;
}

long int main()
{
  // setting number of decimal places
  cout << fixed << setprecision(1);

  // setting variables
  long int numOfVillages;

  cin >> numOfVillages;

  // get positions
  long int *villagePos = new long int[numOfVillages];
  for (long int i = 0; i < numOfVillages; i++)
    cin >> villagePos[i];

  double *villageSizes = new double[numOfVillages];

  // organize positions
  villagePos = sortlong Int(villagePos, numOfVillages);

  // determine distances between positions
  villageSizes = findSizes(villagePos, numOfVillages, villageSizes, numOfVillages);

  villageSizes = sortdouble(villageSizes, numOfVillages);

  cout << villageSizes[2] << endl;

  return 0;
}
