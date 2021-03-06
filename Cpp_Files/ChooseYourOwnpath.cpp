// Choose Your Own Path
// Travis Ahern
// Jan. 17, 2019

#include <iostream>

using namespace std;

int **allChoices;

bool isEnding(int page)
{
  return allChoices[page][0] == 0;
}

int findShortestPath(int pos, int iteration)
{
  if (allChoices[pos][0] == 0)
    return iteration;
  else
    return findShortestPath(allChoices[pos][1], iteration++);
}

int findShortestPath(int **arr, int length)
{
  int page;
  
  while (!isEnding(page))
  {
    if ()
  }
}

int main()
{
  int pages;
  int shortestPath;
  bool pagesReachable = false;

  cin >> pages;


  // get input
  **allChoices = new int *[pages];
  for (int i = 0; i < pages; i++)
  {
    int num;
    cin >> num;

    allChoices[i] = new int[num];
    allChoices[i][0] = num;

    for (int j = 0; j < allChoices[i][0]; j++)
      cin >> allChoices[i][j+1];
  }

  // find shortest path
  int path = findShortestPath(0, 0);
  cout << path << endl;

  // output
  // cout << shortestPath << endl;
  return 0;
}