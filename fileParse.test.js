const uniqueIPs = (arr) => {
    return new Set(arr).size;
}

const mostThreeCommon = (arr) => {
    topThree = []
    count = {}
    for (let elements of arr) {
        count[elements] = count[elements] + 1 || 1
    }
    let topThreeArray = Object.keys(count).sort((a, b) => count[b] - count[a]).slice(0, 3)
    return topThreeArray
}

test('Testing unique amount of elements in an array', () => {
    const testArray = ['1', '2', '3', '3']
    expect(uniqueIPs(testArray)).toBe(3)
})

test('Testing 3 most common elements in an array', () => {
    const testArray = ['1', '2', '3', '3', '2', '2', '1', '7', '2', '7', '9', '2', '5', '7', '7', '1']
    expect(mostThreeCommon(testArray)).toStrictEqual(['2', '7', '1'])
})