# Repro repo - invalid hook call

## Description

This repo explains the micro frontend architecture setup where we observe a problem with invalid hooks calls
while passing a Component to a host application for further rendering.

The actual use case is that we have a "custom modals" API. The host application takes care of rendering modals in a right way,
micro frontends can use that API to pass custom modals as react functions that are rendered when modal type is requested.

This works for simple modals with no hooks, but when introducing any hook call it throws an error.

We tried using `createPortal` for that but this didn't change anything.

## How to run it

- `yarn`
- `yarn build:micro`
- `yarn serve:micro` + separate process `yarn dev`
