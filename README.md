# &lt;img-pulse&gt;

> A web component that creates a Tinder-esque image pulse.

## Demo

[Check it live!](http://matt-d-rat.github.io/img-pulse)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install img-pulse --save
```

Or [download as ZIP](https://github.com/matt-d-rat/img-pulse/archive/master.zip).

## Usage

1. Import polyfill:

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
    ```

2. Import custom element:

    ```html
    <link rel="import" href="bower_components/img-pulse/img-pulse.html">
    ```

3. Start using it!

    ```html
    <img-pulse src="demo-image.jpg" size="150" pulse-color="#ff0000"></img-pulse>
    ```

## Options

Attribute     | Options     | Default      | Description
---           | ---         | ---          | ---
`src`         | *String*    | none         | The src of the image.
`size`        | *Number*    | `150`        | The size of the image. Sets the height and width to the same size.
`pulse-color` | *String*    | `#ff0000`    | The color of the pulse.

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

1. Install [bower](http://bower.io/) & [polyserve](https://npmjs.com/polyserve):

    ```sh
    $ npm install -g bower polyserve
    ```

2. Install local dependencies:

    ```sh
    $ bower install
    ```

3. Start development server and open `http://localhost:8080/components/my-repo/`.

    ```sh
    $ polyserve
    ```

## History

For detailed changelog, check [Releases](https://github.com/matt-d-rat/img-pulse/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)