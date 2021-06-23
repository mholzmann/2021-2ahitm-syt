const names = [
    'Maier', 
    'Mair', 
    'Majer', 
    'Majr', 
    'Mayer', 
    'Mayr', 
    'Meier', 
    'Meir', 
    'Mejer', 
    'Mejr', 
    'Meyer', 
    'Meyr',
    'Mahr',
    'Ma_er',
    'Ma_r',
    'M_yr',
    'Myer',
    'Baier',
    'Bayr'
];

/**
 * 
 * @param {RegExp} pattern 
 */
function printMatchingNames(pattern) {
    console.log(`Pattern: ${pattern}`);
    let filteredNames = names.filter(name => pattern.test(name));
    console.log(filteredNames);
    console.log();
}

console.log('Maiers with "ai", "ay", "ei", "ey"');
printMatchingNames(/^M[ae][iy].*r$/);

console.log('Names starting with a capital letter and ending with "r" but not "er"');
printMatchingNames(/^[A-Z].*[^e]r$/);                       

console.log('Names just consisting of letters');
printMatchingNames(/^[A-Z][a-z]*$/);                       