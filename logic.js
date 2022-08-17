function uniqueIPs(arr) {
    return new Set(arr).size;
}

const mostThreeCommon = (arr) => {
    const count = {}
    for (let elements of arr) {
        count[elements] = count[elements] + 1 || 1
    }
    let topThreeArray = Object.keys(count).sort((a, b) => count[b] - count[a]).slice(0, 3)
    return topThreeArray
}

module.exports = { mostThreeCommon, uniqueIPs }