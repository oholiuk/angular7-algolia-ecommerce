// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  paypal: {
    client: 'AesIc2gjvYH0EtI_wEqNMDQCrQsJpZOa-P-QwAodcoeAAbaCTTstK9xTxYEwRJzRsP3yl1qzx-tgJLSu',
    currency: 'USD'
  },
  algoliaConfig: {
    apiKey: 'f9697d2eb91d79638d5331b8d644da6a',
    appId: 'JJH2ZRV4CI',
    indexName: 'test_ANGULAR7ECOMMERCE',
    routing: true
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
