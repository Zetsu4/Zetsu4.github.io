// Occupy Parking
// Travis Ahern
// Jan. 15, 2019

#include <iostream>

using namespace std;

int main()
{
    int spaces;
    string park1;
    string park2;

    cin >> spaces;
    cin >> park1;
    cin >> park2;

    int sameSpace = 0;
    for(int i=0; i < spaces; i++) {
        if (park1[i] == 'C' && park2[i] == 'C')
            sameSpace++;
    }

    cout << sameSpace << endl;
    return 0;
}