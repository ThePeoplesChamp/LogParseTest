const { uniqueIPs, mostThreeCommon } = require('../logic')


test('Testing unique amount of elements in an array', () => {
    const testArray = ['1', '2', '3', '3']
    expect(uniqueIPs(testArray)).toBe(3)
})

test('Testing 3 most common elements in an array', () => {
    const testArray = ['1', '2', '3', '3', '2', '2', '1', '7', '2', '7', '9', '2', '5', '7', '7', '1']
    expect(mostThreeCommon(testArray)).toStrictEqual(['2', '7', '1'])
})
