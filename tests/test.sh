#!/bin/bash
echo Arguments: $*
node Common $*
node Module.mjs $*
