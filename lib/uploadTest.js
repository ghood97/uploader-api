// configure .env
require('dotenv').config()

// require FileSystem and AWS SDK
const fs = require('fs')
const AWS = require('aws-sdk')

// set region
AWS.config.update({region: 'us-east-1'})

// create s3 service object
const s3 = new AWS.S3()
console.log(s3)

// define bucket based on environment variable
const bucketName = process.env.BUCKET_NAME
console.log(bucketName)

// Access command line arguments
const inFile = process.argv[2]

fs.readFile(inFile, (err, data) => {
  if (err) throw err

  console.log(data)
})
