# use-epoch

`use-epoch` is a package that supports real-time time-related tasks such as returning the current timestamp value, countdown or calculating the current status between given time periods.

We are still developing additional features for the package. Please contribute to the development of the package by suggesting new features, reporting bugs, or contributing to this repository.

## Installation

`npm install use-epoch`

`yarn add use-epoch`

## `useNow`

`useNow()` is a react hook that allows you to retrieve the current timestamp value and return the result every 1 second

```
import { useNow } from "use-epoch";
function App() {
  let now = useNow();
  return (
    <div>
        {now}
    </div>
  );
}
```

## `useTimeStatus` (in development)

`useTimeStatus(start, end)`

The desired return result is `upcoming`, `ongoing`, or `ended` based on the current time.

## `useEpochStatus` (in development)

`useEpochStatus([timestamp0, timestamp1, ... , timestampN])`

The desired return result is `0`, `-1`, or `1`, `2`, `3`,... `n` based on the current time.

```
timestamp     0      1      2      3      n-1    n
--------------|------|------|------|--   --|-----|-----
return       0|1     |2     |3     |4      |n    | -1

```

## Countdown component (in development)

React component to render a countdown clock

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Countdown } from 'use-epoch';

ReactDOM.render(
  <Countdown date={Date.now() + 10000} />,
  document.getElementById('root')
);
```
