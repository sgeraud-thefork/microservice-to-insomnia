const fs = require('fs');

function replacePatterns(patterns, buffer) {
  let content = buffer.toString();

  Object.keys(patterns).forEach((pattern) => {
    content = content.replace(new RegExp(pattern, 'g'), patterns[pattern]());
  });

  return content;
}

exports.fileToFile = (patterns, inputPath, outputPath) => {
  const rs = fs.createReadStream(inputPath);
  const ws = fs.createWriteStream(outputPath);

  rs.on('readable', () => {
    const chunk = rs.read();

    if (chunk !== null) {
      const content = replacePatterns(patterns, chunk);
      ws.write(content);
    } else {
      ws.end();
    }
  });
};

exports.fileToText = (patterns, inputPath, callback) => {
  const rs = fs.createReadStream(inputPath);

  rs.on('readable', () => {
    const chunk = rs.read();

    if (chunk !== null) {
      const content = replacePatterns(patterns, chunk);
      callback(content);
    }
  });
};
