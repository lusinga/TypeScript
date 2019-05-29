//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />

//// [/lib/lib.esnext.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> {}
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/lib/lib.esnext.full.d.ts]
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />

//// [/src/core/anotherModule.js]
export const World = "hello";


//// [/src/core/index.js]
export const someString = "HELLO WORLD";
export function leftPad(s, n) { return s + n; }
export function multiply(a, b) { return a * b; }


//// [/src/core/tsconfig.json]
{
    "compilerOptions": {
        "incremental": true,
"listFiles": true,
"listEmittedFiles": true,
        "target": "esnext",
    }
}

//// [/src/core/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "/lib/lib.esnext.d.ts": {
        "version": "-15964756381",
        "signature": "-15964756381"
      },
      "/lib/lib.esnext.full.d.ts": {
        "version": "8926001564",
        "signature": "8926001564"
      },
      "/src/core/anothermodule.ts": {
        "version": "-2676574883",
        "signature": "-8396256275"
      },
      "/src/core/index.ts": {
        "version": "-18749805970",
        "signature": "1874987148"
      },
      "/src/core/some_decl.d.ts": {
        "version": "-9253692965",
        "signature": "-9253692965"
      }
    },
    "options": {
      "incremental": true,
      "listFiles": true,
      "listEmittedFiles": true,
      "target": 8,
      "configFilePath": "/src/core/tsconfig.json"
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "/lib/lib.esnext.d.ts",
      "/lib/lib.esnext.full.d.ts",
      "/src/core/anothermodule.ts",
      "/src/core/index.ts",
      "/src/core/some_decl.d.ts"
    ]
  },
  "version": "FakeTSVersion"
}

