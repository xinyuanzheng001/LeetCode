/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    const MOD = 1_000_000_007;

	const dp = Array(target + 1).fill(0)
	dp[0] = 1;

	for (let i = 1; i <= n; i++) {
		for (let j = target; j >= 0; j--) {
			dp[j] = 0;

			for (let p = 1; p <= k; p++) {
				if (j >= p)
					dp[j] = (dp[j] + dp[j - p]) % MOD;
				else
					break;
			}
		}
	}

	return dp[target];
};