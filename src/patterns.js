const utils = require('./utils');

module.exports = {
  '#{date_iso}': () => new Date().toISOString(),
  '#{env_id}': () => utils.generateId('env_id'),
  '#{env_uuid}': () => utils.generateUuid('env_uuid'),
  '#{random_array}': () => utils.generateRandomValueOfType('array'),
  '#{random_boolean}': () => utils.generateRandomValueOfType('boolean'),
  '#{random_integer}': () => utils.generateRandomValueOfType('integer'),
  '#{random_number}': () => utils.generateRandomValueOfType('number'),
  '#{random_object}': () => utils.generateRandomValueOfType('object'),
  '#{random_string}': () => utils.generateRandomValueOfType('string'),
  '#{random_uuid}': () => utils.generateRandomValueOfType('uuid'),
  '#{jar_id}': () => utils.generateId('jar_id'),
  '#{pair_uuid}': () => utils.generateUuid(),
  '#{spec_uuid}': () => utils.generateUuid('spec_uuid'),
  '#{timestamp_ms}': () => `${new Date().getTime()}`,
  '#{wrk_uuid}': () => utils.generateUuid('wrk_uuid'),
};
