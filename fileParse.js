const fs = require('fs');
const readline = require('readline')
const { uniqueIPs, mostThreeCommon } = require('./logic')


const fileParse = () => {
    let logFile = process.argv[2]
    let IPs = []
    let URLs = []

    const rdln = readline.createInterface({
        input: fs.createReadStream(`${logFile}.log`),
        output: process.stdout,
        terminal: false
    })

    rdln.on('line', ((line) => {
        const ip = line.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g)
        IPs.push(ip[0])
        const url = line.substring(
            line.indexOf("GET") + 4,
            line.lastIndexOf(" HTTP"));
        URLs.push(url)
    }))

    rdln.on('close', (() => {
        console.log(`Within this log file there are ${uniqueIPs(IPs)} unique IP adresses, the top three most active being ${mostThreeCommon(IPs)[0]}, ${mostThreeCommon(IPs)[1]} and ${mostThreeCommon(IPs)[2]}. the top three most visited URLs were ${mostThreeCommon(URLs)[0]}, ${mostThreeCommon(URLs)[1]} and ${mostThreeCommon(URLs)[2]}`)
    }))
}
fileParse();

module.exports = { fileParse }