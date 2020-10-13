const patterns = require('./src/patterns');
const { getRequest } = require('./src/request');
const templatizer = require('./src/templatizer');
const utils = require('./src/utils');

const inputPath = process.argv[2];
const outputPath = process.argv[3];

const service = require(inputPath);

(async () => {
  const { methods } = service.pages.find((obj) => obj.type === 'json-rpc').body;

  const requests = await Promise.all(
    methods.map((method) => getRequest(service.name, method))
  );

  const workspacePatterns = {
    '#{restaurant_uuid}': () => utils.generateUuid('restaurant_uuid'),
    '#{service_name}': () => service.name,
    '#{safe_service_name}': () => service.name.replace(/[^\w]/g, '_'),
    '#{requests}': () => requests.join(','),
    '#{wrk_name}': () => service.name,
    ...patterns,
  };

  templatizer.fileToFile(workspacePatterns, './templates/insomnia.json.tpl', outputPath);
})();
