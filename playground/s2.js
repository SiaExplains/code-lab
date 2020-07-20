function isVowel(x) {
    return x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u';
}
function vowelsubstring(s) {
    let n = s.length;
    let arr = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        if (i == 0)
            // No. of occurrences of 0th character
            // in all the substrings
            arr[i] = n;
        // No. of occurrences of ith character
        // in all the substrings
        else arr[i] = n - i + arr[i - 1] - i;
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
        let ch = s[i];
        // Check if ith character is a vowel
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
            sum += arr[i];
    }

    // Return the total sum
    // of occurrences of vowels
    return sum;
}
console.log(vowelsubstring('aaeiouxa'));
//vowelsubstring('axyzaeiou');
