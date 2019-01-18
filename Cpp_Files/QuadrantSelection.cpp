// Quadrant Selection
// Travis Ahern
// Jan. 18, 2019

#include <iostream>

using namespace std;

int main()
{
  // get input
  int x;
  int y;
  cin >> x >> y;

  int quad = 1;
  if (x > 0)
  {
    if (y < 0)
      quad = 4;
  }
  else
  {
    if (y > 0)
      quad = 2;

    if (y < 0)
      quad = 3;
  }

  cout << quad << endl;
  return 0;
}