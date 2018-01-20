#!/bin/bash

fails=''

inspect() {
  if [ $1 -ne 0 ]; then
    fails="${fails} $2"
  fi
}

docker-compose -f docker-compose-ci.yml run mpwo-api flask test
inspect $? api

testcafe chrome mpwo_client/e2e
inspect $? e2e

if [ -n "${fails}" ];
  then
    echo "Tests failed: ${fails}"
    exit 1
  else
    echo "Tests passed!"
    exit 0
fi