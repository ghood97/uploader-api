// configure .env
require('dotenv').config()

// require mime-type
const mime = require('mime-types')

// require FileSystem and AWS SDK
const fs = require('fs')
const AWS = require('aws-sdk')

// set region
AWS.config.update({region: 'us-east-1'})

// create s3 service object
const s3 = new AWS.S3()

// define bucket based on environment variable
const bucketName = process.env.BUCKET_NAME
console.log(bucketName)

// Access command line arguments
const inFile = process.argv[2]

fs.readFile(inFile, (err, fileData) => {
  if (err) throw err

  // create params obj for s3.upload
  const params = {
    Bucket: bucketName,
    Key: 'something',
    Body: fileData,
    ACL: 'public-read',
    ContentType: mime.lookup(inFile)
  }
  console.log(params.ContentType)

  s3.upload(params, (err, s3Data) => {
    if (err) throw err

    console.log(s3Data)
  })
})
