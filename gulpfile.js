const {src, dest} = require('gulp');

function copyFiles() {
    return src('./src/**')
        .pipe(dest('./dist'));
}

exports.copyFiles = copyFiles;