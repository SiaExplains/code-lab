function isVowel(x) {
    return x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u';
}
function vowelsubstring(s) {
    let hash = new Set();
    let buffer = [];
    let counter = 0;
    let temp = 0;
    for (let i = 0; i < s.length; i++) {
        if (isVowel(s[i]) == true) {
            buffer[i] = s[i];
            hash.add(s[i]);
            if (i != 0 && buffer[i] == buffer[i - 1]) {
                temp++;
            }

            if (hash.size == 5) {
                if (buffer.length != hash.size) {
                    counter += temp;
                }
                counter++;
            }
        } else {
            hash.clear();
            buffer = [];
        }
    }
    return counter;
}

console.log(vowelsubstring('aaeiouxa'));
//vowelsubstring('axyzaeiou');
