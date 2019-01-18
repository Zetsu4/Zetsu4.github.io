// Shifty Sum
// Travis Ahern
// Jan. 18, 2019

#include <iostream>

using namespace std;

int shift(int num, int numOfShifts)
{
  if (numOfShifts <= 0)
    return num;
  else
    return num + shift(num*10, numOfShifts-1);
}

int main()
{
  int num, shifts;
  cin >> num >> shifts;

  int numShift = shift(num, shifts);

  cout << numShift << endl;
  return 0;
}