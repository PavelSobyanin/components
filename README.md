Не получается запустить проект, показывает ошибку:

npm run build:
Error: Cannot find module 'C:\Users\FREE RIDE\Desktop\React\components\openssl-legacy-provider'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1144:15)
    at Module._load (node:internal/modules/cjs/loader:985:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []


npm start
> components@0.1.0 start
> react-scripts --openssl-legacy-provider start

i ｢wds｣: Project is running at http://192.168.0.106/
i ｢wds｣: webpack output is served from
i ｢wds｣: Content not from webpack is served from C:\Users\FREE RIDE\Desktop\React\components\public
i ｢wds｣: 404s will fallback to /
Starting the development server...
Failed to compile.


Подскажите пожалуйста как исправить?