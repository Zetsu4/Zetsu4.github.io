// Word differences
// Travis Ahern
// Jan. 17, 2019

#include <iostream>
#include <iomanip>
using namespace std;

string commonLeft(string str1, string str2)
{
  string common;

  // loop through string 1
  for (int i = 0; i < str1.size(); i++)
  {
    // loop through string 2
    for (int j = 0; j < str2.size(); j++)
    {
      if (str1[i] == str2[j])
      {
        common += str1[i];
        str2 = str2.substr(str2.find(str2[j]) + 1, str2.size());
        break;
      }
    }
  }

  return common;
}

string commonRight(string str1, string str2)
{
  string common;

  // loop through string 1
  for (int i = str1.size(); i >= 0; i--)
  {
    // loop through string 2
    for (int j = str2.size(); j >= 0; j--)
    {
      if (str1[i] == str2[j])
      {
        common += str1[i];
        str2 = str2.substr(0, str2.find(str2[j]));
        break;
      }
    }
  }

  return common;
}

string commonString(string str1, string str2)
{
  string common = "";

  // loop through string 1
  for (int i = 0; i < str1.size(); i++)
    // loop through string 2
    for (int j = 0; j < str2.size(); j++)
      if (str1[i] == str2[j] && common.find(str1[i]) == string::npos)
        common += str1[i];

  if (common == "")
    common = "NONE";

  return common;
}

string sortedString(string str)
{
  // loop through strings
  for (int i = 0; i < str.size(); i++)
  {
    int location = i;
    for (int j = i; j < str.size(); j++)
    {
      // find smallest value
      if (str[j] < str[location])
        location = j;
    }
    // swap positions
    char aChar = str[i];
    str[i] = str[location];
    str[location] = aChar;
  }

  return str;
}

int main()
{
  for (int i = 0; i < 5; i++)
  {
    string wordA;
    string wordB;

    cin >> wordA;
    cin >> wordB;

    // create 4 common strings
    string common1 = commonLeft(wordA, wordB);
    string common2 = commonLeft(wordB, wordA);
    string common3 = commonRight(wordA, wordB);
    string common4 = commonRight(wordB, wordA);

    // sort common strings
    string allCommon = commonString(commonString(common1, common2), commonString(common3, common4));

    if (allCommon != "NONE")
      allCommon = sortedString(allCommon);

    // print the common string
    cout << allCommon << endl;
  }
}