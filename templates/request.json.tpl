{
  "_id": "req_#{req_uuid}",
  "parentId": "wrk_#{wrk_uuid}",
  "modified": #{timestamp_ms},
  "created": #{timestamp_ms},
  "url": "{{ service.#{safe_service_name}.url }}",
  "name": "#{method_name}",
  "description": "#{method_desc}",
  "method": "POST",
  "body": {
    "mimeType": "application/json",
    "text": "#{method_body}"
  },
  "parameters": [],
  "headers": [
    {
      "id": "pair_#{pair_uuid}",
      "name": "Content-Type",
      "value": "application/json"
    }
  ],
  "authentication": {},
  "metaSortKey": -1000000000,
  "isPrivate": false,
  "settingStoreCookies": true,
  "settingSendCookies": true,
  "settingDisableRenderRequestBody": false,
  "settingEncodeUrl": true,
  "settingRebuildPath": true,
  "settingFollowRedirects": "global",
  "_type": "request"
}
