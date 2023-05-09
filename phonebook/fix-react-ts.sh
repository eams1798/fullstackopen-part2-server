#!/bin/bash

sed -i 's/"moduleResolution": "bundler"/"moduleResolution": "node"/g' tsconfig.json
sed -i '/"skipLibCheck": true,/a \ \ \ \ "esModuleInterop": true,' tsconfig.json
sed -i '/"allowImportingTsExtensions": true,/d' tsconfig.json
sed -i 's/"moduleResolution": "bundler"/"moduleResolution": "node"/g' tsconfig.node.json
