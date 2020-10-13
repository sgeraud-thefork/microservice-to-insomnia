const patterns = require('./patterns');
const templatizer = require('./templatizer');
const utils = require('./utils');

exports.getRequest = (serviceName, method) => {
  const properties = method.params.properties || {};
  const params = {};

  Object.keys(properties).forEach((propName) => {
    const { type } = properties[propName];

    if (propName === 'restaurantUuid') {
      params[propName] = '{{ restaurant.restaurantUuid }}';
    } else if (type === 'string' && propName.endsWith('Uuid')) {
      params[propName] = `#{random_uuid}`;
    } else {
      params[propName] = `#{random_${type}}`;
    }
  });

  const requestPatterns = {
    '#{method_body}': () => utils.getMethodBody(method.name, params),
    '#{method_name}': () => method.name,
    '#{method_desc}': () => (method.description || '').replace(/\s*\n\s*/g, ' '),
    '#{req_uuid}': () => utils.generateUuid(),
    '#{service_name}': () => serviceName,
    '#{safe_service_name}': () => serviceName.replace(/[^\w]/g, '_'),
    ...patterns,
  };

  return new Promise((resolve) => {
    templatizer.fileToText(requestPatterns, './templates/request.json.tpl', resolve);
  });
};
