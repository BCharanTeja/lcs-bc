export const ways = (req, res) => {
    const { arr, S } = req.query;

    if (!arr || !S) {
        return res.status(400).json({
            error: "Please provide arr and S"
        });
    }

    const nums = arr.split(",").map(Number);
    const s = S.split(",").map(Number);

    const result = solve(nums, s);
    res.send("WAYS OF MAKING CHANGE");
    res.send("Array Coins = "+arr);
    res.send("Targer Array ="+S);
    res.send("ANS = "+result );
};

function solve(A, S) {
    let ans = new Array(S.length);

    for (let i = 0; i < S.length; i++) {
        // create dp for each target
        let dp = Array.from(
            { length: A.length + 1 },
            () => Array(S[i] + 1).fill(-1)
        );

        ans[i] = help(A, A.length, S[i], dp);
    }

    return ans;
}

function help(a, n, t, dp) {
    if (t === 0) return 1;
    if (t < 0 || n === 0) return 0;

    if (dp[n][t] !== -1) {
        return dp[n][t];
    }

    let l = help(a, n, t - a[n - 1], dp);
    let r = help(a, n - 1, t, dp);

    dp[n][t] = l + r;
    return dp[n][t];
}
