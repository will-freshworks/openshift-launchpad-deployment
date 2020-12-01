#!/bin/bash
# Check that all arguments exist as environment variables

ANY_FAIL=false

for arg in "$@"
do
    VAL=$(eval "echo \$$arg")
    if [ -z $VAL ]; then
        ANY_FAIL=true
        echo "ERROR variable $arg not set!"
    else
        echo "$arg=$VAL"
    fi
done

if [ $ANY_FAIL = true ]; then
    exit 1
fi
