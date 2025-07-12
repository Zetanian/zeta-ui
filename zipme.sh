#!/bin/bash
set -e

ZIPNAME="frontend.zip"

# Remove old zip if exists
rm -f "$ZIPNAME"

# Create new zip, excluding patterns from .zipignore
zip -r "$ZIPNAME" frontend -x@.zipignore

echo "Created $ZIPNAME excluding patterns from .zipignore"
