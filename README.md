# Point In Geometry
> Easy way to test points in circles and polygons, perfect for maps

[![Downloads Stats][npm-downloads]][npm-url]

## Installation

```sh
npm install point-in-geometry --save
```

## Usage example

```
import { PointInCircle } from 'point-in-geometry';

PointInCircle([0, 1], [1, 1], 1);

OR

import { PointInPolygon } from 'point-in-geometry';

PointInPolygon([0, 1], [[0, 2], [2, 1], [1, 3], [3, 1]]);

```

## Contributing

1. Fork it (<https://github.com/luizfer/point-in-geometry/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-url]: https://www.npmjs.com/package/point-in-geometry
[npm-downloads]: https://img.shields.io/npm/dm/point-in-geometry.svg?style=flat-square
