# end-sync-3 會議記錄

## 目前實做完成內容（全部）
80%的網頁
### 已完成和預計完成差異
20%的網頁
### 是否有須再修正內容
sidebar設計
```cpp=
#include <iostream>
#include <iomanip>
#include <utility>
#include <vector>
#include <string>
#include <bitset>
#include <list>
#include <stack>
#include <queue>
#include <deque>
#include <set>
#include <map>
#include <algorithm>
#include <iterator>
#include <numeric>
#include <cmath>
#define F first
#define S second
#define eb emplace_back
#define mp make_pair
using namespace std;
typedef long long ll;
typedef pair<int, int> pii;
typedef pair<ll, ll> pll;
 
int main() {
    ios::sync_with_stdio(0), cin.tie(0);
    int n, m, mod = 1000000007;
    cin >> n >> m;
    vector<vector<vector<int>>> dp(n, vector<vector<int>>(m, vector<int> (1<<n)));
    dp[0][0][(1<<n)-2] = 1;
 
    for (int j = 0; j < m; ++j){
        for (int i = 0; i < n; ++i){
            for (int s = 0; s < 1 << n; ++ s){
                if (i == 0){
                    if (j > 0){
                        dp[i][j][s] = dp[n-1][j-1][s^1];
                    }
                }else{
                    if (s & (1 << i)){ //cover tile
                        dp[i][j][s] = dp[i-1][j][s^(1<<i)];//a horixontal tile on [i][j] and [i][j-1]
                        if (s & (1 << (i - 1))){ //a vertical tile on [i][j] and [i-1][j]
                            dp[i][j][s] += dp[i-1][j][s^(1<<(i-1))];
                        }
                    }else{ //not cover
                        dp[i][j][s] = dp[i-1][j][s^(1<<i)];
                    }
                }
                dp[i][j][s] %= mod;
            }
        }
    }
    cout << dp[n-1][m-1][(1<<n)-1] << '\n';
}
Share code to others
Test details
Test 1
```
