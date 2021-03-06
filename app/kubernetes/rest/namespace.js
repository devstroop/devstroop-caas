import { rawResponse } from 'Kubernetes/rest/response/transform';

angular.module('portainer.kubernetes').factory('KubernetesNamespaces', [
  '$resource',
  'API_ENDPOINT_ENDPOINTS',
  'EndpointProvider',
  function KubernetesNamespacesFactory($resource, API_ENDPOINT_ENDPOINTS, EndpointProvider) {
    'use strict';
    return function () {
      const url = API_ENDPOINT_ENDPOINTS + '/:endpointId/kubernetes/api/v1/namespaces/:id/:action';
      return $resource(
        url,
        {
          endpointId: EndpointProvider.endpointID,
        },
        {
          get: {
            method: 'GET',
            ignoreLoadingBar: true,
          },
          getYaml: {
            method: 'GET',
            headers: {
              Accept: 'application/yaml',
            },
            transformResponse: rawResponse,
            ignoreLoadingBar: true,
          },
          getJSON: {
            method: 'GET',
            headers: {
              Accept: 'application/json',
            },
            transformResponse: rawResponse,
            ignoreLoadingBar: true,
          },
          create: { method: 'POST' },
          update: { method: 'PUT' },
          delete: { method: 'DELETE' },
          status: {
            method: 'GET',
            params: { action: 'status' },
            ignoreLoadingBar: true,
          },
        }
      );
    };
  },
]);
