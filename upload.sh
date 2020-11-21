#!/usr/bin/env bash

ng build --prod --base-href=/webtools/ &&
  ngh -d dist/webtools -S
