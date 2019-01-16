// Are We There Yet?
// Travis Ahern
// Jan. 15, 2019

#include <iostream>

using namespace std;

int main()
{
    int numbers[4];
    cin >> numbers[0];
    cin >> numbers[1];
    cin >> numbers[2];
    cin >> numbers[3];


    for (int k=0; k < 5; k++) {
        // five lines

        for (int i=0; i < 5; i++) {
            // one line
            int runningTotal = 0;
            int loops;

            if (k>i) {
                // pos 1 > pos 2
                for (loops = i; loops < k; loops++) {
                    runningTotal += numbers[loops];
                }

            } else if (k<i) {
                // pos 1 < pos 2
                for (loops = k; loops < i; loops++) {
                    runningTotal += numbers[loops];
                }
            }

            cout << runningTotal << " ";
        }
        cout << endl;
    }

    return 0;
}