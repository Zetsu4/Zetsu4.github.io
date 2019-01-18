// Word differences
// Travis Ahern
// Jan. 17, 2019

#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
  string wordA;
  string wordB;
  string commonString = "";

  cin >> wordA;
  cin >> wordB;

  // loop through string A
  for (int i=0; i < wordA.size(); i++)
  {
    // loop through string B
    for (int j = 0; j < wordB.size(); j++)
    {
      if (wordA[i] == wordB[j])
      {
        commonString += wordA[i];
        wordB = wordB.substr(wordB.find(wordB[j]), wordB.size());
        break;
      }
    }
  }

  // print the common string
  cout << commonString << endl;
}