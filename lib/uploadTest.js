// require FileSystem and AWS SDK
const fs = require('fs')
const AWS = require('aws-sdk')

// set region
AWS.config.update({region: 'us-east-1'})

// create s3 service object
const s3 = new AWS.S3()

// Access command line arguments
const inFile = process.argv[2]

fs.readFile(inFile, (err, data) => {
  if (err) throw err

  console.log(s3)
})
