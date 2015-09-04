# tintinnabulum
Static website for Tidmarsh sound art hosting.

## Installing Dependencies ##
First, clone the repo with `git clone https://github.com/eflynch/tintinnabulum`.
Then, install node `brew install node`.
Then, install node dependencies
```
cd tintinnabulum
npm install
```

Finally, install `gulp` globally `npm install -g gulp`.

## Compiling Source ##
Run `gulp`
which uses browserify with the reactify transform to build JSX files in `/src`
putting them in `/www/scripts`.

## Serving Locally ##
The React developer tools don't work correctly if you are reading files from disk (rather than over http). To work around this when working on this repository locally, you can serve the `/www` directory with python with `python3 -m http.server 8000`.
