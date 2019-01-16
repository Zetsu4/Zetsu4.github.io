// Are We There Yet?
// Travis Ahern
// Jan. 15, 2019

#include <iostream>

using namespace std;

int main()
{
    int numbers[3];
    cin >> numbers[0];
    cin >> numbers[1];
    cin >> numbers[2];
    cin >> numbers[3];


    // five lines
    for (int k=0; k < 5; k++)
    {
        // one line
        for (int i=0; i < 5; i++)
        {
            int runningTotal = 0;

            for (int j=0; j < i; j++)
            {
                // adding distances
                runningTotal = runningTotal + numbers[j];
            }

            cout << runningTotal << " ";
        }
        cout << endl;
    }

    return 0;
}