const { randomUUID } = require('crypto');

function memoize(func) {
  const cache = {};

  return (seed, ...args) => {
    if (seed && cache.hasOwnProperty(seed)) {
      return cache[seed];
    }

    const result = func(seed, ...args);

    if (seed) {
      cache[seed] = result;
    }

    return result;
  };
}

exports.generateId = memoize((seed) => {
  if (seed && typeof seed !== 'string') {
    throw new Error('generateId expects a string as first argument');
  }

  return `${randomUUID()}${randomUUID()}`.replace(/-/g, '').substring(0, 40);
});

exports.generateUuid = memoize((seed) => {
  if (seed && typeof seed !== 'string') {
    throw new Error('generateUuid expects a string as first argument');
  }

  return randomUUID().replace(/-/g, '');
});

function generateRandomInt(min, max) {
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min) + min);
}

exports.generateRandomValueOfType = (type) => {
  if (type === 'array') {
    return []; // Empty array as we can know the type of its items
  }

  if (type === 'boolean') {
    return Math.random() < 0.5;
  }

  if (type === 'integer' || type === 'number') {
    return generateRandomInt(10, 100);
  }

  if (type === 'object') {
    return {}; // TODO: Deep dive into object properties
  }

  if (type === 'string') {
    return '';
  }

  if (type === 'uuid') {
    return "{% uuid 'v4' %}"; // Let Insomnia generates a UUID at request execution
  }

  throw new Error(`generateValueOfType: Unsupported type "${type}"`);
};

exports.getMethodBody = (name, params) => {
  const body = {
    jsonrpc: '2.0',
    method: name,
    params,
    id: "{% uuid 'v4' %}",
  };

  return JSON.stringify(body, null, '\t')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\t/g, '\\t');
};
