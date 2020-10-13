{
  "_type": "export",
  "__export_format": 4,
  "__export_date": "#{date_iso}",
  "__export_source": "insomnia.desktop.app:v2020.4.1",
  "resources": [
    #{requests},
    {
      "_id": "wrk_#{wrk_uuid}",
      "parentId": null,
      "modified": #{timestamp_ms},
      "created": #{timestamp_ms},
      "name": "#{wrk_name}",
      "description": "",
      "scope": null,
      "_type": "workspace"
    },
    {
      "_id": "env_#{env_id}",
      "parentId": "wrk_#{wrk_uuid}",
      "modified": #{timestamp_ms},
      "created": #{timestamp_ms},
      "name": "Base Environment",
      "data": {},
      "dataPropertyOrder": null,
      "color": null,
      "isPrivate": false,
      "metaSortKey": #{timestamp_ms},
      "_type": "environment"
    },
    {
      "_id": "jar_#{jar_id}",
      "parentId": "wrk_#{wrk_uuid}",
      "modified": #{timestamp_ms},
      "created": #{timestamp_ms},
      "name": "Default Jar",
      "cookies": [],
      "_type": "cookie_jar"
    },
    {
      "_id": "spc_#{spec_uuid}",
      "parentId": "wrk_#{wrk_uuid}",
      "modified": #{timestamp_ms},
      "created": #{timestamp_ms},
      "fileName": "#{wrk_name}",
      "contents": "",
      "contentType": "yaml",
      "_type": "api_spec"
    },
    {
      "_id": "env_#{env_uuid}",
      "parentId": "env_#{env_id}",
      "modified": #{timestamp_ms},
      "created": #{timestamp_ms},
      "name": "production",
      "data": {
        "restaurant": {
          "restaurantUuid": "#{restaurant_uuid}"
        },
        "service": {
          "#{safe_service_name}": {
            "url": "http://#{service_name}.example.com"
          }
        }
      },
      "dataPropertyOrder": {
        "&": [
          "restaurant",
          "service"
        ],
        "&~|restaurant": [
          "restaurantUuid"
        ],
        "&~|service": [
          "#{safe_service_name}"
        ],
        "&~|service~|#{safe_service_name}": [
          "url"
        ]
      },
      "color": null,
      "isPrivate": false,
      "metaSortKey": #{timestamp_ms},
      "_type": "environment"
    }
  ]
}
