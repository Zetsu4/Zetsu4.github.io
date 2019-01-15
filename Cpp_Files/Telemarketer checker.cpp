// Telemarketer or not?
// Travis Ahern
// Jan. 15, 2019

#include <iostream>

using namespace std;

int main()
{
  string call = "answer";
  int n1, n2, n3, n4;
  cin >> n1;
  cin >> n2;
  cin >> n3;
  cin >> n4;

  if(n1 == 8 || n1 == 9)
    if(n4 == 8 || n4 == 9)
      if(n2 == n3)
        call = "ignore";

  cout << call << endl;
  return 0;
}
