SET var=%cd%
cd C:\Program Files\Amazon\AWSCLI\bin\
aws s3 sync "%var%"/dist/maksim-zakharov-site/ s3://maksim-zakharov.com --acl public-read --delete --profile admin
exit