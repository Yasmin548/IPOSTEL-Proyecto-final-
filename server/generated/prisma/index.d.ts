
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model empleado
 * 
 */
export type empleado = $Result.DefaultSelection<Prisma.$empleadoPayload>
/**
 * Model sucursal
 * 
 */
export type sucursal = $Result.DefaultSelection<Prisma.$sucursalPayload>
/**
 * Model cargo
 * 
 */
export type cargo = $Result.DefaultSelection<Prisma.$cargoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const role: {
  Admin: 'Admin',
  employee: 'employee',
  customer: 'customer'
};

export type role = (typeof role)[keyof typeof role]

}

export type role = $Enums.role

export const role: typeof $Enums.role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.empleado`: Exposes CRUD operations for the **empleado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empleados
    * const empleados = await prisma.empleado.findMany()
    * ```
    */
  get empleado(): Prisma.empleadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sucursal`: Exposes CRUD operations for the **sucursal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sucursals
    * const sucursals = await prisma.sucursal.findMany()
    * ```
    */
  get sucursal(): Prisma.sucursalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cargo`: Exposes CRUD operations for the **cargo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cargos
    * const cargos = await prisma.cargo.findMany()
    * ```
    */
  get cargo(): Prisma.cargoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    empleado: 'empleado',
    sucursal: 'sucursal',
    cargo: 'cargo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "empleado" | "sucursal" | "cargo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      empleado: {
        payload: Prisma.$empleadoPayload<ExtArgs>
        fields: Prisma.empleadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.empleadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.empleadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload>
          }
          findFirst: {
            args: Prisma.empleadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.empleadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload>
          }
          findMany: {
            args: Prisma.empleadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload>[]
          }
          create: {
            args: Prisma.empleadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload>
          }
          createMany: {
            args: Prisma.empleadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.empleadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload>
          }
          update: {
            args: Prisma.empleadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload>
          }
          deleteMany: {
            args: Prisma.empleadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.empleadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.empleadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload>
          }
          aggregate: {
            args: Prisma.EmpleadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpleado>
          }
          groupBy: {
            args: Prisma.empleadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpleadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.empleadoCountArgs<ExtArgs>
            result: $Utils.Optional<EmpleadoCountAggregateOutputType> | number
          }
        }
      }
      sucursal: {
        payload: Prisma.$sucursalPayload<ExtArgs>
        fields: Prisma.sucursalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sucursalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sucursalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sucursalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sucursalPayload>
          }
          findFirst: {
            args: Prisma.sucursalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sucursalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sucursalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sucursalPayload>
          }
          findMany: {
            args: Prisma.sucursalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sucursalPayload>[]
          }
          create: {
            args: Prisma.sucursalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sucursalPayload>
          }
          createMany: {
            args: Prisma.sucursalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sucursalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sucursalPayload>
          }
          update: {
            args: Prisma.sucursalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sucursalPayload>
          }
          deleteMany: {
            args: Prisma.sucursalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sucursalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sucursalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sucursalPayload>
          }
          aggregate: {
            args: Prisma.SucursalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSucursal>
          }
          groupBy: {
            args: Prisma.sucursalGroupByArgs<ExtArgs>
            result: $Utils.Optional<SucursalGroupByOutputType>[]
          }
          count: {
            args: Prisma.sucursalCountArgs<ExtArgs>
            result: $Utils.Optional<SucursalCountAggregateOutputType> | number
          }
        }
      }
      cargo: {
        payload: Prisma.$cargoPayload<ExtArgs>
        fields: Prisma.cargoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cargoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cargoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload>
          }
          findFirst: {
            args: Prisma.cargoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cargoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload>
          }
          findMany: {
            args: Prisma.cargoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload>[]
          }
          create: {
            args: Prisma.cargoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload>
          }
          createMany: {
            args: Prisma.cargoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cargoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload>
          }
          update: {
            args: Prisma.cargoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload>
          }
          deleteMany: {
            args: Prisma.cargoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cargoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cargoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload>
          }
          aggregate: {
            args: Prisma.CargoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCargo>
          }
          groupBy: {
            args: Prisma.cargoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CargoGroupByOutputType>[]
          }
          count: {
            args: Prisma.cargoCountArgs<ExtArgs>
            result: $Utils.Optional<CargoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    empleado?: empleadoOmit
    sucursal?: sucursalOmit
    cargo?: cargoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    lastname: string | null
    email: string | null
    password: string | null
    role: $Enums.role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    lastname: string | null
    email: string | null
    password: string | null
    role: $Enums.role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    lastname: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    lastname?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    lastname?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    lastname?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    lastname: string
    email: string
    password: string
    role: $Enums.role | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lastname" | "email" | "password" | "role", ExtArgs["result"]["user"]>

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      lastname: string
      email: string
      password: string
      role: $Enums.role | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly lastname: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'role'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
  }


  /**
   * Model empleado
   */

  export type AggregateEmpleado = {
    _count: EmpleadoCountAggregateOutputType | null
    _avg: EmpleadoAvgAggregateOutputType | null
    _sum: EmpleadoSumAggregateOutputType | null
    _min: EmpleadoMinAggregateOutputType | null
    _max: EmpleadoMaxAggregateOutputType | null
  }

  export type EmpleadoAvgAggregateOutputType = {
    id: number | null
    edad: number | null
    telefono: number | null
  }

  export type EmpleadoSumAggregateOutputType = {
    id: number | null
    edad: number | null
    telefono: number | null
  }

  export type EmpleadoMinAggregateOutputType = {
    id: number | null
    photo: string | null
    name: string | null
    lastname: string | null
    birthday: Date | null
    edad: number | null
    sexo: string | null
    educacion: string | null
    telefono: number | null
    direccion: string | null
    email: string | null
    fechaingreso: Date | null
    cargo: string | null
  }

  export type EmpleadoMaxAggregateOutputType = {
    id: number | null
    photo: string | null
    name: string | null
    lastname: string | null
    birthday: Date | null
    edad: number | null
    sexo: string | null
    educacion: string | null
    telefono: number | null
    direccion: string | null
    email: string | null
    fechaingreso: Date | null
    cargo: string | null
  }

  export type EmpleadoCountAggregateOutputType = {
    id: number
    photo: number
    name: number
    lastname: number
    birthday: number
    edad: number
    sexo: number
    educacion: number
    telefono: number
    direccion: number
    email: number
    fechaingreso: number
    cargo: number
    _all: number
  }


  export type EmpleadoAvgAggregateInputType = {
    id?: true
    edad?: true
    telefono?: true
  }

  export type EmpleadoSumAggregateInputType = {
    id?: true
    edad?: true
    telefono?: true
  }

  export type EmpleadoMinAggregateInputType = {
    id?: true
    photo?: true
    name?: true
    lastname?: true
    birthday?: true
    edad?: true
    sexo?: true
    educacion?: true
    telefono?: true
    direccion?: true
    email?: true
    fechaingreso?: true
    cargo?: true
  }

  export type EmpleadoMaxAggregateInputType = {
    id?: true
    photo?: true
    name?: true
    lastname?: true
    birthday?: true
    edad?: true
    sexo?: true
    educacion?: true
    telefono?: true
    direccion?: true
    email?: true
    fechaingreso?: true
    cargo?: true
  }

  export type EmpleadoCountAggregateInputType = {
    id?: true
    photo?: true
    name?: true
    lastname?: true
    birthday?: true
    edad?: true
    sexo?: true
    educacion?: true
    telefono?: true
    direccion?: true
    email?: true
    fechaingreso?: true
    cargo?: true
    _all?: true
  }

  export type EmpleadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which empleado to aggregate.
     */
    where?: empleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empleados to fetch.
     */
    orderBy?: empleadoOrderByWithRelationInput | empleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: empleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned empleados
    **/
    _count?: true | EmpleadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmpleadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmpleadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpleadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpleadoMaxAggregateInputType
  }

  export type GetEmpleadoAggregateType<T extends EmpleadoAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpleado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpleado[P]>
      : GetScalarType<T[P], AggregateEmpleado[P]>
  }




  export type empleadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: empleadoWhereInput
    orderBy?: empleadoOrderByWithAggregationInput | empleadoOrderByWithAggregationInput[]
    by: EmpleadoScalarFieldEnum[] | EmpleadoScalarFieldEnum
    having?: empleadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpleadoCountAggregateInputType | true
    _avg?: EmpleadoAvgAggregateInputType
    _sum?: EmpleadoSumAggregateInputType
    _min?: EmpleadoMinAggregateInputType
    _max?: EmpleadoMaxAggregateInputType
  }

  export type EmpleadoGroupByOutputType = {
    id: number
    photo: string | null
    name: string
    lastname: string
    birthday: Date
    edad: number
    sexo: string
    educacion: string
    telefono: number
    direccion: string
    email: string
    fechaingreso: Date
    cargo: string
    _count: EmpleadoCountAggregateOutputType | null
    _avg: EmpleadoAvgAggregateOutputType | null
    _sum: EmpleadoSumAggregateOutputType | null
    _min: EmpleadoMinAggregateOutputType | null
    _max: EmpleadoMaxAggregateOutputType | null
  }

  type GetEmpleadoGroupByPayload<T extends empleadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpleadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpleadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpleadoGroupByOutputType[P]>
            : GetScalarType<T[P], EmpleadoGroupByOutputType[P]>
        }
      >
    >


  export type empleadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photo?: boolean
    name?: boolean
    lastname?: boolean
    birthday?: boolean
    edad?: boolean
    sexo?: boolean
    educacion?: boolean
    telefono?: boolean
    direccion?: boolean
    email?: boolean
    fechaingreso?: boolean
    cargo?: boolean
  }, ExtArgs["result"]["empleado"]>



  export type empleadoSelectScalar = {
    id?: boolean
    photo?: boolean
    name?: boolean
    lastname?: boolean
    birthday?: boolean
    edad?: boolean
    sexo?: boolean
    educacion?: boolean
    telefono?: boolean
    direccion?: boolean
    email?: boolean
    fechaingreso?: boolean
    cargo?: boolean
  }

  export type empleadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "photo" | "name" | "lastname" | "birthday" | "edad" | "sexo" | "educacion" | "telefono" | "direccion" | "email" | "fechaingreso" | "cargo", ExtArgs["result"]["empleado"]>

  export type $empleadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "empleado"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      photo: string | null
      name: string
      lastname: string
      birthday: Date
      edad: number
      sexo: string
      educacion: string
      telefono: number
      direccion: string
      email: string
      fechaingreso: Date
      cargo: string
    }, ExtArgs["result"]["empleado"]>
    composites: {}
  }

  type empleadoGetPayload<S extends boolean | null | undefined | empleadoDefaultArgs> = $Result.GetResult<Prisma.$empleadoPayload, S>

  type empleadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<empleadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpleadoCountAggregateInputType | true
    }

  export interface empleadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['empleado'], meta: { name: 'empleado' } }
    /**
     * Find zero or one Empleado that matches the filter.
     * @param {empleadoFindUniqueArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends empleadoFindUniqueArgs>(args: SelectSubset<T, empleadoFindUniqueArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empleado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {empleadoFindUniqueOrThrowArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends empleadoFindUniqueOrThrowArgs>(args: SelectSubset<T, empleadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empleado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadoFindFirstArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends empleadoFindFirstArgs>(args?: SelectSubset<T, empleadoFindFirstArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empleado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadoFindFirstOrThrowArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends empleadoFindFirstOrThrowArgs>(args?: SelectSubset<T, empleadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empleados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empleados
     * const empleados = await prisma.empleado.findMany()
     * 
     * // Get first 10 Empleados
     * const empleados = await prisma.empleado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empleadoWithIdOnly = await prisma.empleado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends empleadoFindManyArgs>(args?: SelectSubset<T, empleadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empleado.
     * @param {empleadoCreateArgs} args - Arguments to create a Empleado.
     * @example
     * // Create one Empleado
     * const Empleado = await prisma.empleado.create({
     *   data: {
     *     // ... data to create a Empleado
     *   }
     * })
     * 
     */
    create<T extends empleadoCreateArgs>(args: SelectSubset<T, empleadoCreateArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empleados.
     * @param {empleadoCreateManyArgs} args - Arguments to create many Empleados.
     * @example
     * // Create many Empleados
     * const empleado = await prisma.empleado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends empleadoCreateManyArgs>(args?: SelectSubset<T, empleadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Empleado.
     * @param {empleadoDeleteArgs} args - Arguments to delete one Empleado.
     * @example
     * // Delete one Empleado
     * const Empleado = await prisma.empleado.delete({
     *   where: {
     *     // ... filter to delete one Empleado
     *   }
     * })
     * 
     */
    delete<T extends empleadoDeleteArgs>(args: SelectSubset<T, empleadoDeleteArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empleado.
     * @param {empleadoUpdateArgs} args - Arguments to update one Empleado.
     * @example
     * // Update one Empleado
     * const empleado = await prisma.empleado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends empleadoUpdateArgs>(args: SelectSubset<T, empleadoUpdateArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empleados.
     * @param {empleadoDeleteManyArgs} args - Arguments to filter Empleados to delete.
     * @example
     * // Delete a few Empleados
     * const { count } = await prisma.empleado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends empleadoDeleteManyArgs>(args?: SelectSubset<T, empleadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empleados
     * const empleado = await prisma.empleado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends empleadoUpdateManyArgs>(args: SelectSubset<T, empleadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Empleado.
     * @param {empleadoUpsertArgs} args - Arguments to update or create a Empleado.
     * @example
     * // Update or create a Empleado
     * const empleado = await prisma.empleado.upsert({
     *   create: {
     *     // ... data to create a Empleado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empleado we want to update
     *   }
     * })
     */
    upsert<T extends empleadoUpsertArgs>(args: SelectSubset<T, empleadoUpsertArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadoCountArgs} args - Arguments to filter Empleados to count.
     * @example
     * // Count the number of Empleados
     * const count = await prisma.empleado.count({
     *   where: {
     *     // ... the filter for the Empleados we want to count
     *   }
     * })
    **/
    count<T extends empleadoCountArgs>(
      args?: Subset<T, empleadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpleadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empleado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmpleadoAggregateArgs>(args: Subset<T, EmpleadoAggregateArgs>): Prisma.PrismaPromise<GetEmpleadoAggregateType<T>>

    /**
     * Group by Empleado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends empleadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: empleadoGroupByArgs['orderBy'] }
        : { orderBy?: empleadoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, empleadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpleadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the empleado model
   */
  readonly fields: empleadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for empleado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__empleadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the empleado model
   */
  interface empleadoFieldRefs {
    readonly id: FieldRef<"empleado", 'Int'>
    readonly photo: FieldRef<"empleado", 'String'>
    readonly name: FieldRef<"empleado", 'String'>
    readonly lastname: FieldRef<"empleado", 'String'>
    readonly birthday: FieldRef<"empleado", 'DateTime'>
    readonly edad: FieldRef<"empleado", 'Int'>
    readonly sexo: FieldRef<"empleado", 'String'>
    readonly educacion: FieldRef<"empleado", 'String'>
    readonly telefono: FieldRef<"empleado", 'Int'>
    readonly direccion: FieldRef<"empleado", 'String'>
    readonly email: FieldRef<"empleado", 'String'>
    readonly fechaingreso: FieldRef<"empleado", 'DateTime'>
    readonly cargo: FieldRef<"empleado", 'String'>
  }
    

  // Custom InputTypes
  /**
   * empleado findUnique
   */
  export type empleadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleado
     */
    omit?: empleadoOmit<ExtArgs> | null
    /**
     * Filter, which empleado to fetch.
     */
    where: empleadoWhereUniqueInput
  }

  /**
   * empleado findUniqueOrThrow
   */
  export type empleadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleado
     */
    omit?: empleadoOmit<ExtArgs> | null
    /**
     * Filter, which empleado to fetch.
     */
    where: empleadoWhereUniqueInput
  }

  /**
   * empleado findFirst
   */
  export type empleadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleado
     */
    omit?: empleadoOmit<ExtArgs> | null
    /**
     * Filter, which empleado to fetch.
     */
    where?: empleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empleados to fetch.
     */
    orderBy?: empleadoOrderByWithRelationInput | empleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for empleados.
     */
    cursor?: empleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of empleados.
     */
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * empleado findFirstOrThrow
   */
  export type empleadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleado
     */
    omit?: empleadoOmit<ExtArgs> | null
    /**
     * Filter, which empleado to fetch.
     */
    where?: empleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empleados to fetch.
     */
    orderBy?: empleadoOrderByWithRelationInput | empleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for empleados.
     */
    cursor?: empleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of empleados.
     */
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * empleado findMany
   */
  export type empleadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleado
     */
    omit?: empleadoOmit<ExtArgs> | null
    /**
     * Filter, which empleados to fetch.
     */
    where?: empleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empleados to fetch.
     */
    orderBy?: empleadoOrderByWithRelationInput | empleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing empleados.
     */
    cursor?: empleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empleados.
     */
    skip?: number
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * empleado create
   */
  export type empleadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleado
     */
    omit?: empleadoOmit<ExtArgs> | null
    /**
     * The data needed to create a empleado.
     */
    data: XOR<empleadoCreateInput, empleadoUncheckedCreateInput>
  }

  /**
   * empleado createMany
   */
  export type empleadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many empleados.
     */
    data: empleadoCreateManyInput | empleadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * empleado update
   */
  export type empleadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleado
     */
    omit?: empleadoOmit<ExtArgs> | null
    /**
     * The data needed to update a empleado.
     */
    data: XOR<empleadoUpdateInput, empleadoUncheckedUpdateInput>
    /**
     * Choose, which empleado to update.
     */
    where: empleadoWhereUniqueInput
  }

  /**
   * empleado updateMany
   */
  export type empleadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update empleados.
     */
    data: XOR<empleadoUpdateManyMutationInput, empleadoUncheckedUpdateManyInput>
    /**
     * Filter which empleados to update
     */
    where?: empleadoWhereInput
    /**
     * Limit how many empleados to update.
     */
    limit?: number
  }

  /**
   * empleado upsert
   */
  export type empleadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleado
     */
    omit?: empleadoOmit<ExtArgs> | null
    /**
     * The filter to search for the empleado to update in case it exists.
     */
    where: empleadoWhereUniqueInput
    /**
     * In case the empleado found by the `where` argument doesn't exist, create a new empleado with this data.
     */
    create: XOR<empleadoCreateInput, empleadoUncheckedCreateInput>
    /**
     * In case the empleado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<empleadoUpdateInput, empleadoUncheckedUpdateInput>
  }

  /**
   * empleado delete
   */
  export type empleadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleado
     */
    omit?: empleadoOmit<ExtArgs> | null
    /**
     * Filter which empleado to delete.
     */
    where: empleadoWhereUniqueInput
  }

  /**
   * empleado deleteMany
   */
  export type empleadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which empleados to delete
     */
    where?: empleadoWhereInput
    /**
     * Limit how many empleados to delete.
     */
    limit?: number
  }

  /**
   * empleado without action
   */
  export type empleadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleado
     */
    omit?: empleadoOmit<ExtArgs> | null
  }


  /**
   * Model sucursal
   */

  export type AggregateSucursal = {
    _count: SucursalCountAggregateOutputType | null
    _avg: SucursalAvgAggregateOutputType | null
    _sum: SucursalSumAggregateOutputType | null
    _min: SucursalMinAggregateOutputType | null
    _max: SucursalMaxAggregateOutputType | null
  }

  export type SucursalAvgAggregateOutputType = {
    id: number | null
  }

  export type SucursalSumAggregateOutputType = {
    id: number | null
  }

  export type SucursalMinAggregateOutputType = {
    id: number | null
    estado: string | null
    municipio: string | null
    parroquia: string | null
    direccionsucursal: string | null
  }

  export type SucursalMaxAggregateOutputType = {
    id: number | null
    estado: string | null
    municipio: string | null
    parroquia: string | null
    direccionsucursal: string | null
  }

  export type SucursalCountAggregateOutputType = {
    id: number
    estado: number
    municipio: number
    parroquia: number
    direccionsucursal: number
    _all: number
  }


  export type SucursalAvgAggregateInputType = {
    id?: true
  }

  export type SucursalSumAggregateInputType = {
    id?: true
  }

  export type SucursalMinAggregateInputType = {
    id?: true
    estado?: true
    municipio?: true
    parroquia?: true
    direccionsucursal?: true
  }

  export type SucursalMaxAggregateInputType = {
    id?: true
    estado?: true
    municipio?: true
    parroquia?: true
    direccionsucursal?: true
  }

  export type SucursalCountAggregateInputType = {
    id?: true
    estado?: true
    municipio?: true
    parroquia?: true
    direccionsucursal?: true
    _all?: true
  }

  export type SucursalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sucursal to aggregate.
     */
    where?: sucursalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sucursals to fetch.
     */
    orderBy?: sucursalOrderByWithRelationInput | sucursalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sucursalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sucursals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sucursals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sucursals
    **/
    _count?: true | SucursalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SucursalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SucursalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SucursalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SucursalMaxAggregateInputType
  }

  export type GetSucursalAggregateType<T extends SucursalAggregateArgs> = {
        [P in keyof T & keyof AggregateSucursal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSucursal[P]>
      : GetScalarType<T[P], AggregateSucursal[P]>
  }




  export type sucursalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sucursalWhereInput
    orderBy?: sucursalOrderByWithAggregationInput | sucursalOrderByWithAggregationInput[]
    by: SucursalScalarFieldEnum[] | SucursalScalarFieldEnum
    having?: sucursalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SucursalCountAggregateInputType | true
    _avg?: SucursalAvgAggregateInputType
    _sum?: SucursalSumAggregateInputType
    _min?: SucursalMinAggregateInputType
    _max?: SucursalMaxAggregateInputType
  }

  export type SucursalGroupByOutputType = {
    id: number
    estado: string
    municipio: string
    parroquia: string
    direccionsucursal: string
    _count: SucursalCountAggregateOutputType | null
    _avg: SucursalAvgAggregateOutputType | null
    _sum: SucursalSumAggregateOutputType | null
    _min: SucursalMinAggregateOutputType | null
    _max: SucursalMaxAggregateOutputType | null
  }

  type GetSucursalGroupByPayload<T extends sucursalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SucursalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SucursalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SucursalGroupByOutputType[P]>
            : GetScalarType<T[P], SucursalGroupByOutputType[P]>
        }
      >
    >


  export type sucursalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estado?: boolean
    municipio?: boolean
    parroquia?: boolean
    direccionsucursal?: boolean
  }, ExtArgs["result"]["sucursal"]>



  export type sucursalSelectScalar = {
    id?: boolean
    estado?: boolean
    municipio?: boolean
    parroquia?: boolean
    direccionsucursal?: boolean
  }

  export type sucursalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "estado" | "municipio" | "parroquia" | "direccionsucursal", ExtArgs["result"]["sucursal"]>

  export type $sucursalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sucursal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      estado: string
      municipio: string
      parroquia: string
      direccionsucursal: string
    }, ExtArgs["result"]["sucursal"]>
    composites: {}
  }

  type sucursalGetPayload<S extends boolean | null | undefined | sucursalDefaultArgs> = $Result.GetResult<Prisma.$sucursalPayload, S>

  type sucursalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sucursalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SucursalCountAggregateInputType | true
    }

  export interface sucursalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sucursal'], meta: { name: 'sucursal' } }
    /**
     * Find zero or one Sucursal that matches the filter.
     * @param {sucursalFindUniqueArgs} args - Arguments to find a Sucursal
     * @example
     * // Get one Sucursal
     * const sucursal = await prisma.sucursal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sucursalFindUniqueArgs>(args: SelectSubset<T, sucursalFindUniqueArgs<ExtArgs>>): Prisma__sucursalClient<$Result.GetResult<Prisma.$sucursalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sucursal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sucursalFindUniqueOrThrowArgs} args - Arguments to find a Sucursal
     * @example
     * // Get one Sucursal
     * const sucursal = await prisma.sucursal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sucursalFindUniqueOrThrowArgs>(args: SelectSubset<T, sucursalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sucursalClient<$Result.GetResult<Prisma.$sucursalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sucursal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sucursalFindFirstArgs} args - Arguments to find a Sucursal
     * @example
     * // Get one Sucursal
     * const sucursal = await prisma.sucursal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sucursalFindFirstArgs>(args?: SelectSubset<T, sucursalFindFirstArgs<ExtArgs>>): Prisma__sucursalClient<$Result.GetResult<Prisma.$sucursalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sucursal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sucursalFindFirstOrThrowArgs} args - Arguments to find a Sucursal
     * @example
     * // Get one Sucursal
     * const sucursal = await prisma.sucursal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sucursalFindFirstOrThrowArgs>(args?: SelectSubset<T, sucursalFindFirstOrThrowArgs<ExtArgs>>): Prisma__sucursalClient<$Result.GetResult<Prisma.$sucursalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sucursals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sucursalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sucursals
     * const sucursals = await prisma.sucursal.findMany()
     * 
     * // Get first 10 Sucursals
     * const sucursals = await prisma.sucursal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sucursalWithIdOnly = await prisma.sucursal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sucursalFindManyArgs>(args?: SelectSubset<T, sucursalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sucursalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sucursal.
     * @param {sucursalCreateArgs} args - Arguments to create a Sucursal.
     * @example
     * // Create one Sucursal
     * const Sucursal = await prisma.sucursal.create({
     *   data: {
     *     // ... data to create a Sucursal
     *   }
     * })
     * 
     */
    create<T extends sucursalCreateArgs>(args: SelectSubset<T, sucursalCreateArgs<ExtArgs>>): Prisma__sucursalClient<$Result.GetResult<Prisma.$sucursalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sucursals.
     * @param {sucursalCreateManyArgs} args - Arguments to create many Sucursals.
     * @example
     * // Create many Sucursals
     * const sucursal = await prisma.sucursal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sucursalCreateManyArgs>(args?: SelectSubset<T, sucursalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sucursal.
     * @param {sucursalDeleteArgs} args - Arguments to delete one Sucursal.
     * @example
     * // Delete one Sucursal
     * const Sucursal = await prisma.sucursal.delete({
     *   where: {
     *     // ... filter to delete one Sucursal
     *   }
     * })
     * 
     */
    delete<T extends sucursalDeleteArgs>(args: SelectSubset<T, sucursalDeleteArgs<ExtArgs>>): Prisma__sucursalClient<$Result.GetResult<Prisma.$sucursalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sucursal.
     * @param {sucursalUpdateArgs} args - Arguments to update one Sucursal.
     * @example
     * // Update one Sucursal
     * const sucursal = await prisma.sucursal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sucursalUpdateArgs>(args: SelectSubset<T, sucursalUpdateArgs<ExtArgs>>): Prisma__sucursalClient<$Result.GetResult<Prisma.$sucursalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sucursals.
     * @param {sucursalDeleteManyArgs} args - Arguments to filter Sucursals to delete.
     * @example
     * // Delete a few Sucursals
     * const { count } = await prisma.sucursal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sucursalDeleteManyArgs>(args?: SelectSubset<T, sucursalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sucursals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sucursalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sucursals
     * const sucursal = await prisma.sucursal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sucursalUpdateManyArgs>(args: SelectSubset<T, sucursalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sucursal.
     * @param {sucursalUpsertArgs} args - Arguments to update or create a Sucursal.
     * @example
     * // Update or create a Sucursal
     * const sucursal = await prisma.sucursal.upsert({
     *   create: {
     *     // ... data to create a Sucursal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sucursal we want to update
     *   }
     * })
     */
    upsert<T extends sucursalUpsertArgs>(args: SelectSubset<T, sucursalUpsertArgs<ExtArgs>>): Prisma__sucursalClient<$Result.GetResult<Prisma.$sucursalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sucursals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sucursalCountArgs} args - Arguments to filter Sucursals to count.
     * @example
     * // Count the number of Sucursals
     * const count = await prisma.sucursal.count({
     *   where: {
     *     // ... the filter for the Sucursals we want to count
     *   }
     * })
    **/
    count<T extends sucursalCountArgs>(
      args?: Subset<T, sucursalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SucursalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sucursal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SucursalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SucursalAggregateArgs>(args: Subset<T, SucursalAggregateArgs>): Prisma.PrismaPromise<GetSucursalAggregateType<T>>

    /**
     * Group by Sucursal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sucursalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sucursalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sucursalGroupByArgs['orderBy'] }
        : { orderBy?: sucursalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sucursalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSucursalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sucursal model
   */
  readonly fields: sucursalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sucursal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sucursalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sucursal model
   */
  interface sucursalFieldRefs {
    readonly id: FieldRef<"sucursal", 'Int'>
    readonly estado: FieldRef<"sucursal", 'String'>
    readonly municipio: FieldRef<"sucursal", 'String'>
    readonly parroquia: FieldRef<"sucursal", 'String'>
    readonly direccionsucursal: FieldRef<"sucursal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sucursal findUnique
   */
  export type sucursalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sucursal
     */
    select?: sucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sucursal
     */
    omit?: sucursalOmit<ExtArgs> | null
    /**
     * Filter, which sucursal to fetch.
     */
    where: sucursalWhereUniqueInput
  }

  /**
   * sucursal findUniqueOrThrow
   */
  export type sucursalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sucursal
     */
    select?: sucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sucursal
     */
    omit?: sucursalOmit<ExtArgs> | null
    /**
     * Filter, which sucursal to fetch.
     */
    where: sucursalWhereUniqueInput
  }

  /**
   * sucursal findFirst
   */
  export type sucursalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sucursal
     */
    select?: sucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sucursal
     */
    omit?: sucursalOmit<ExtArgs> | null
    /**
     * Filter, which sucursal to fetch.
     */
    where?: sucursalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sucursals to fetch.
     */
    orderBy?: sucursalOrderByWithRelationInput | sucursalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sucursals.
     */
    cursor?: sucursalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sucursals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sucursals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sucursals.
     */
    distinct?: SucursalScalarFieldEnum | SucursalScalarFieldEnum[]
  }

  /**
   * sucursal findFirstOrThrow
   */
  export type sucursalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sucursal
     */
    select?: sucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sucursal
     */
    omit?: sucursalOmit<ExtArgs> | null
    /**
     * Filter, which sucursal to fetch.
     */
    where?: sucursalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sucursals to fetch.
     */
    orderBy?: sucursalOrderByWithRelationInput | sucursalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sucursals.
     */
    cursor?: sucursalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sucursals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sucursals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sucursals.
     */
    distinct?: SucursalScalarFieldEnum | SucursalScalarFieldEnum[]
  }

  /**
   * sucursal findMany
   */
  export type sucursalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sucursal
     */
    select?: sucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sucursal
     */
    omit?: sucursalOmit<ExtArgs> | null
    /**
     * Filter, which sucursals to fetch.
     */
    where?: sucursalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sucursals to fetch.
     */
    orderBy?: sucursalOrderByWithRelationInput | sucursalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sucursals.
     */
    cursor?: sucursalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sucursals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sucursals.
     */
    skip?: number
    distinct?: SucursalScalarFieldEnum | SucursalScalarFieldEnum[]
  }

  /**
   * sucursal create
   */
  export type sucursalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sucursal
     */
    select?: sucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sucursal
     */
    omit?: sucursalOmit<ExtArgs> | null
    /**
     * The data needed to create a sucursal.
     */
    data: XOR<sucursalCreateInput, sucursalUncheckedCreateInput>
  }

  /**
   * sucursal createMany
   */
  export type sucursalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sucursals.
     */
    data: sucursalCreateManyInput | sucursalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sucursal update
   */
  export type sucursalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sucursal
     */
    select?: sucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sucursal
     */
    omit?: sucursalOmit<ExtArgs> | null
    /**
     * The data needed to update a sucursal.
     */
    data: XOR<sucursalUpdateInput, sucursalUncheckedUpdateInput>
    /**
     * Choose, which sucursal to update.
     */
    where: sucursalWhereUniqueInput
  }

  /**
   * sucursal updateMany
   */
  export type sucursalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sucursals.
     */
    data: XOR<sucursalUpdateManyMutationInput, sucursalUncheckedUpdateManyInput>
    /**
     * Filter which sucursals to update
     */
    where?: sucursalWhereInput
    /**
     * Limit how many sucursals to update.
     */
    limit?: number
  }

  /**
   * sucursal upsert
   */
  export type sucursalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sucursal
     */
    select?: sucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sucursal
     */
    omit?: sucursalOmit<ExtArgs> | null
    /**
     * The filter to search for the sucursal to update in case it exists.
     */
    where: sucursalWhereUniqueInput
    /**
     * In case the sucursal found by the `where` argument doesn't exist, create a new sucursal with this data.
     */
    create: XOR<sucursalCreateInput, sucursalUncheckedCreateInput>
    /**
     * In case the sucursal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sucursalUpdateInput, sucursalUncheckedUpdateInput>
  }

  /**
   * sucursal delete
   */
  export type sucursalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sucursal
     */
    select?: sucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sucursal
     */
    omit?: sucursalOmit<ExtArgs> | null
    /**
     * Filter which sucursal to delete.
     */
    where: sucursalWhereUniqueInput
  }

  /**
   * sucursal deleteMany
   */
  export type sucursalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sucursals to delete
     */
    where?: sucursalWhereInput
    /**
     * Limit how many sucursals to delete.
     */
    limit?: number
  }

  /**
   * sucursal without action
   */
  export type sucursalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sucursal
     */
    select?: sucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sucursal
     */
    omit?: sucursalOmit<ExtArgs> | null
  }


  /**
   * Model cargo
   */

  export type AggregateCargo = {
    _count: CargoCountAggregateOutputType | null
    _avg: CargoAvgAggregateOutputType | null
    _sum: CargoSumAggregateOutputType | null
    _min: CargoMinAggregateOutputType | null
    _max: CargoMaxAggregateOutputType | null
  }

  export type CargoAvgAggregateOutputType = {
    id: number | null
  }

  export type CargoSumAggregateOutputType = {
    id: number | null
  }

  export type CargoMinAggregateOutputType = {
    id: number | null
    cargo: string | null
    departamento: string | null
  }

  export type CargoMaxAggregateOutputType = {
    id: number | null
    cargo: string | null
    departamento: string | null
  }

  export type CargoCountAggregateOutputType = {
    id: number
    cargo: number
    departamento: number
    _all: number
  }


  export type CargoAvgAggregateInputType = {
    id?: true
  }

  export type CargoSumAggregateInputType = {
    id?: true
  }

  export type CargoMinAggregateInputType = {
    id?: true
    cargo?: true
    departamento?: true
  }

  export type CargoMaxAggregateInputType = {
    id?: true
    cargo?: true
    departamento?: true
  }

  export type CargoCountAggregateInputType = {
    id?: true
    cargo?: true
    departamento?: true
    _all?: true
  }

  export type CargoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cargo to aggregate.
     */
    where?: cargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cargos to fetch.
     */
    orderBy?: cargoOrderByWithRelationInput | cargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cargos
    **/
    _count?: true | CargoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CargoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CargoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CargoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CargoMaxAggregateInputType
  }

  export type GetCargoAggregateType<T extends CargoAggregateArgs> = {
        [P in keyof T & keyof AggregateCargo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCargo[P]>
      : GetScalarType<T[P], AggregateCargo[P]>
  }




  export type cargoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cargoWhereInput
    orderBy?: cargoOrderByWithAggregationInput | cargoOrderByWithAggregationInput[]
    by: CargoScalarFieldEnum[] | CargoScalarFieldEnum
    having?: cargoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CargoCountAggregateInputType | true
    _avg?: CargoAvgAggregateInputType
    _sum?: CargoSumAggregateInputType
    _min?: CargoMinAggregateInputType
    _max?: CargoMaxAggregateInputType
  }

  export type CargoGroupByOutputType = {
    id: number
    cargo: string
    departamento: string
    _count: CargoCountAggregateOutputType | null
    _avg: CargoAvgAggregateOutputType | null
    _sum: CargoSumAggregateOutputType | null
    _min: CargoMinAggregateOutputType | null
    _max: CargoMaxAggregateOutputType | null
  }

  type GetCargoGroupByPayload<T extends cargoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CargoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CargoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CargoGroupByOutputType[P]>
            : GetScalarType<T[P], CargoGroupByOutputType[P]>
        }
      >
    >


  export type cargoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cargo?: boolean
    departamento?: boolean
  }, ExtArgs["result"]["cargo"]>



  export type cargoSelectScalar = {
    id?: boolean
    cargo?: boolean
    departamento?: boolean
  }

  export type cargoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cargo" | "departamento", ExtArgs["result"]["cargo"]>

  export type $cargoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cargo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cargo: string
      departamento: string
    }, ExtArgs["result"]["cargo"]>
    composites: {}
  }

  type cargoGetPayload<S extends boolean | null | undefined | cargoDefaultArgs> = $Result.GetResult<Prisma.$cargoPayload, S>

  type cargoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cargoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CargoCountAggregateInputType | true
    }

  export interface cargoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cargo'], meta: { name: 'cargo' } }
    /**
     * Find zero or one Cargo that matches the filter.
     * @param {cargoFindUniqueArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cargoFindUniqueArgs>(args: SelectSubset<T, cargoFindUniqueArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cargo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cargoFindUniqueOrThrowArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cargoFindUniqueOrThrowArgs>(args: SelectSubset<T, cargoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cargo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cargoFindFirstArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cargoFindFirstArgs>(args?: SelectSubset<T, cargoFindFirstArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cargo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cargoFindFirstOrThrowArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cargoFindFirstOrThrowArgs>(args?: SelectSubset<T, cargoFindFirstOrThrowArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cargos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cargoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cargos
     * const cargos = await prisma.cargo.findMany()
     * 
     * // Get first 10 Cargos
     * const cargos = await prisma.cargo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cargoWithIdOnly = await prisma.cargo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cargoFindManyArgs>(args?: SelectSubset<T, cargoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cargo.
     * @param {cargoCreateArgs} args - Arguments to create a Cargo.
     * @example
     * // Create one Cargo
     * const Cargo = await prisma.cargo.create({
     *   data: {
     *     // ... data to create a Cargo
     *   }
     * })
     * 
     */
    create<T extends cargoCreateArgs>(args: SelectSubset<T, cargoCreateArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cargos.
     * @param {cargoCreateManyArgs} args - Arguments to create many Cargos.
     * @example
     * // Create many Cargos
     * const cargo = await prisma.cargo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cargoCreateManyArgs>(args?: SelectSubset<T, cargoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cargo.
     * @param {cargoDeleteArgs} args - Arguments to delete one Cargo.
     * @example
     * // Delete one Cargo
     * const Cargo = await prisma.cargo.delete({
     *   where: {
     *     // ... filter to delete one Cargo
     *   }
     * })
     * 
     */
    delete<T extends cargoDeleteArgs>(args: SelectSubset<T, cargoDeleteArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cargo.
     * @param {cargoUpdateArgs} args - Arguments to update one Cargo.
     * @example
     * // Update one Cargo
     * const cargo = await prisma.cargo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cargoUpdateArgs>(args: SelectSubset<T, cargoUpdateArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cargos.
     * @param {cargoDeleteManyArgs} args - Arguments to filter Cargos to delete.
     * @example
     * // Delete a few Cargos
     * const { count } = await prisma.cargo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cargoDeleteManyArgs>(args?: SelectSubset<T, cargoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cargos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cargoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cargos
     * const cargo = await prisma.cargo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cargoUpdateManyArgs>(args: SelectSubset<T, cargoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cargo.
     * @param {cargoUpsertArgs} args - Arguments to update or create a Cargo.
     * @example
     * // Update or create a Cargo
     * const cargo = await prisma.cargo.upsert({
     *   create: {
     *     // ... data to create a Cargo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cargo we want to update
     *   }
     * })
     */
    upsert<T extends cargoUpsertArgs>(args: SelectSubset<T, cargoUpsertArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cargos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cargoCountArgs} args - Arguments to filter Cargos to count.
     * @example
     * // Count the number of Cargos
     * const count = await prisma.cargo.count({
     *   where: {
     *     // ... the filter for the Cargos we want to count
     *   }
     * })
    **/
    count<T extends cargoCountArgs>(
      args?: Subset<T, cargoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CargoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cargo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CargoAggregateArgs>(args: Subset<T, CargoAggregateArgs>): Prisma.PrismaPromise<GetCargoAggregateType<T>>

    /**
     * Group by Cargo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cargoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cargoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cargoGroupByArgs['orderBy'] }
        : { orderBy?: cargoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cargoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCargoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cargo model
   */
  readonly fields: cargoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cargo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cargoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cargo model
   */
  interface cargoFieldRefs {
    readonly id: FieldRef<"cargo", 'Int'>
    readonly cargo: FieldRef<"cargo", 'String'>
    readonly departamento: FieldRef<"cargo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cargo findUnique
   */
  export type cargoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * Filter, which cargo to fetch.
     */
    where: cargoWhereUniqueInput
  }

  /**
   * cargo findUniqueOrThrow
   */
  export type cargoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * Filter, which cargo to fetch.
     */
    where: cargoWhereUniqueInput
  }

  /**
   * cargo findFirst
   */
  export type cargoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * Filter, which cargo to fetch.
     */
    where?: cargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cargos to fetch.
     */
    orderBy?: cargoOrderByWithRelationInput | cargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cargos.
     */
    cursor?: cargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cargos.
     */
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * cargo findFirstOrThrow
   */
  export type cargoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * Filter, which cargo to fetch.
     */
    where?: cargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cargos to fetch.
     */
    orderBy?: cargoOrderByWithRelationInput | cargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cargos.
     */
    cursor?: cargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cargos.
     */
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * cargo findMany
   */
  export type cargoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * Filter, which cargos to fetch.
     */
    where?: cargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cargos to fetch.
     */
    orderBy?: cargoOrderByWithRelationInput | cargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cargos.
     */
    cursor?: cargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cargos.
     */
    skip?: number
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * cargo create
   */
  export type cargoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * The data needed to create a cargo.
     */
    data: XOR<cargoCreateInput, cargoUncheckedCreateInput>
  }

  /**
   * cargo createMany
   */
  export type cargoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cargos.
     */
    data: cargoCreateManyInput | cargoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cargo update
   */
  export type cargoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * The data needed to update a cargo.
     */
    data: XOR<cargoUpdateInput, cargoUncheckedUpdateInput>
    /**
     * Choose, which cargo to update.
     */
    where: cargoWhereUniqueInput
  }

  /**
   * cargo updateMany
   */
  export type cargoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cargos.
     */
    data: XOR<cargoUpdateManyMutationInput, cargoUncheckedUpdateManyInput>
    /**
     * Filter which cargos to update
     */
    where?: cargoWhereInput
    /**
     * Limit how many cargos to update.
     */
    limit?: number
  }

  /**
   * cargo upsert
   */
  export type cargoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * The filter to search for the cargo to update in case it exists.
     */
    where: cargoWhereUniqueInput
    /**
     * In case the cargo found by the `where` argument doesn't exist, create a new cargo with this data.
     */
    create: XOR<cargoCreateInput, cargoUncheckedCreateInput>
    /**
     * In case the cargo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cargoUpdateInput, cargoUncheckedUpdateInput>
  }

  /**
   * cargo delete
   */
  export type cargoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * Filter which cargo to delete.
     */
    where: cargoWhereUniqueInput
  }

  /**
   * cargo deleteMany
   */
  export type cargoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cargos to delete
     */
    where?: cargoWhereInput
    /**
     * Limit how many cargos to delete.
     */
    limit?: number
  }

  /**
   * cargo without action
   */
  export type cargoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EmpleadoScalarFieldEnum: {
    id: 'id',
    photo: 'photo',
    name: 'name',
    lastname: 'lastname',
    birthday: 'birthday',
    edad: 'edad',
    sexo: 'sexo',
    educacion: 'educacion',
    telefono: 'telefono',
    direccion: 'direccion',
    email: 'email',
    fechaingreso: 'fechaingreso',
    cargo: 'cargo'
  };

  export type EmpleadoScalarFieldEnum = (typeof EmpleadoScalarFieldEnum)[keyof typeof EmpleadoScalarFieldEnum]


  export const SucursalScalarFieldEnum: {
    id: 'id',
    estado: 'estado',
    municipio: 'municipio',
    parroquia: 'parroquia',
    direccionsucursal: 'direccionsucursal'
  };

  export type SucursalScalarFieldEnum = (typeof SucursalScalarFieldEnum)[keyof typeof SucursalScalarFieldEnum]


  export const CargoScalarFieldEnum: {
    id: 'id',
    cargo: 'cargo',
    departamento: 'departamento'
  };

  export type CargoScalarFieldEnum = (typeof CargoScalarFieldEnum)[keyof typeof CargoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const userOrderByRelevanceFieldEnum: {
    name: 'name',
    lastname: 'lastname',
    email: 'email',
    password: 'password'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const empleadoOrderByRelevanceFieldEnum: {
    photo: 'photo',
    name: 'name',
    lastname: 'lastname',
    sexo: 'sexo',
    educacion: 'educacion',
    direccion: 'direccion',
    email: 'email',
    cargo: 'cargo'
  };

  export type empleadoOrderByRelevanceFieldEnum = (typeof empleadoOrderByRelevanceFieldEnum)[keyof typeof empleadoOrderByRelevanceFieldEnum]


  export const sucursalOrderByRelevanceFieldEnum: {
    estado: 'estado',
    municipio: 'municipio',
    parroquia: 'parroquia',
    direccionsucursal: 'direccionsucursal'
  };

  export type sucursalOrderByRelevanceFieldEnum = (typeof sucursalOrderByRelevanceFieldEnum)[keyof typeof sucursalOrderByRelevanceFieldEnum]


  export const cargoOrderByRelevanceFieldEnum: {
    cargo: 'cargo',
    departamento: 'departamento'
  };

  export type cargoOrderByRelevanceFieldEnum = (typeof cargoOrderByRelevanceFieldEnum)[keyof typeof cargoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'role'
   */
  export type EnumroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    lastname?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: EnumroleNullableFilter<"user"> | $Enums.role | null
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    lastname?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: EnumroleNullableFilter<"user"> | $Enums.role | null
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringWithAggregatesFilter<"user"> | string
    lastname?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    role?: EnumroleNullableWithAggregatesFilter<"user"> | $Enums.role | null
  }

  export type empleadoWhereInput = {
    AND?: empleadoWhereInput | empleadoWhereInput[]
    OR?: empleadoWhereInput[]
    NOT?: empleadoWhereInput | empleadoWhereInput[]
    id?: IntFilter<"empleado"> | number
    photo?: StringNullableFilter<"empleado"> | string | null
    name?: StringFilter<"empleado"> | string
    lastname?: StringFilter<"empleado"> | string
    birthday?: DateTimeFilter<"empleado"> | Date | string
    edad?: IntFilter<"empleado"> | number
    sexo?: StringFilter<"empleado"> | string
    educacion?: StringFilter<"empleado"> | string
    telefono?: IntFilter<"empleado"> | number
    direccion?: StringFilter<"empleado"> | string
    email?: StringFilter<"empleado"> | string
    fechaingreso?: DateTimeFilter<"empleado"> | Date | string
    cargo?: StringFilter<"empleado"> | string
  }

  export type empleadoOrderByWithRelationInput = {
    id?: SortOrder
    photo?: SortOrderInput | SortOrder
    name?: SortOrder
    lastname?: SortOrder
    birthday?: SortOrder
    edad?: SortOrder
    sexo?: SortOrder
    educacion?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    email?: SortOrder
    fechaingreso?: SortOrder
    cargo?: SortOrder
    _relevance?: empleadoOrderByRelevanceInput
  }

  export type empleadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: empleadoWhereInput | empleadoWhereInput[]
    OR?: empleadoWhereInput[]
    NOT?: empleadoWhereInput | empleadoWhereInput[]
    photo?: StringNullableFilter<"empleado"> | string | null
    name?: StringFilter<"empleado"> | string
    lastname?: StringFilter<"empleado"> | string
    birthday?: DateTimeFilter<"empleado"> | Date | string
    edad?: IntFilter<"empleado"> | number
    sexo?: StringFilter<"empleado"> | string
    educacion?: StringFilter<"empleado"> | string
    telefono?: IntFilter<"empleado"> | number
    direccion?: StringFilter<"empleado"> | string
    fechaingreso?: DateTimeFilter<"empleado"> | Date | string
    cargo?: StringFilter<"empleado"> | string
  }, "id" | "email">

  export type empleadoOrderByWithAggregationInput = {
    id?: SortOrder
    photo?: SortOrderInput | SortOrder
    name?: SortOrder
    lastname?: SortOrder
    birthday?: SortOrder
    edad?: SortOrder
    sexo?: SortOrder
    educacion?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    email?: SortOrder
    fechaingreso?: SortOrder
    cargo?: SortOrder
    _count?: empleadoCountOrderByAggregateInput
    _avg?: empleadoAvgOrderByAggregateInput
    _max?: empleadoMaxOrderByAggregateInput
    _min?: empleadoMinOrderByAggregateInput
    _sum?: empleadoSumOrderByAggregateInput
  }

  export type empleadoScalarWhereWithAggregatesInput = {
    AND?: empleadoScalarWhereWithAggregatesInput | empleadoScalarWhereWithAggregatesInput[]
    OR?: empleadoScalarWhereWithAggregatesInput[]
    NOT?: empleadoScalarWhereWithAggregatesInput | empleadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"empleado"> | number
    photo?: StringNullableWithAggregatesFilter<"empleado"> | string | null
    name?: StringWithAggregatesFilter<"empleado"> | string
    lastname?: StringWithAggregatesFilter<"empleado"> | string
    birthday?: DateTimeWithAggregatesFilter<"empleado"> | Date | string
    edad?: IntWithAggregatesFilter<"empleado"> | number
    sexo?: StringWithAggregatesFilter<"empleado"> | string
    educacion?: StringWithAggregatesFilter<"empleado"> | string
    telefono?: IntWithAggregatesFilter<"empleado"> | number
    direccion?: StringWithAggregatesFilter<"empleado"> | string
    email?: StringWithAggregatesFilter<"empleado"> | string
    fechaingreso?: DateTimeWithAggregatesFilter<"empleado"> | Date | string
    cargo?: StringWithAggregatesFilter<"empleado"> | string
  }

  export type sucursalWhereInput = {
    AND?: sucursalWhereInput | sucursalWhereInput[]
    OR?: sucursalWhereInput[]
    NOT?: sucursalWhereInput | sucursalWhereInput[]
    id?: IntFilter<"sucursal"> | number
    estado?: StringFilter<"sucursal"> | string
    municipio?: StringFilter<"sucursal"> | string
    parroquia?: StringFilter<"sucursal"> | string
    direccionsucursal?: StringFilter<"sucursal"> | string
  }

  export type sucursalOrderByWithRelationInput = {
    id?: SortOrder
    estado?: SortOrder
    municipio?: SortOrder
    parroquia?: SortOrder
    direccionsucursal?: SortOrder
    _relevance?: sucursalOrderByRelevanceInput
  }

  export type sucursalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sucursalWhereInput | sucursalWhereInput[]
    OR?: sucursalWhereInput[]
    NOT?: sucursalWhereInput | sucursalWhereInput[]
    estado?: StringFilter<"sucursal"> | string
    municipio?: StringFilter<"sucursal"> | string
    parroquia?: StringFilter<"sucursal"> | string
    direccionsucursal?: StringFilter<"sucursal"> | string
  }, "id">

  export type sucursalOrderByWithAggregationInput = {
    id?: SortOrder
    estado?: SortOrder
    municipio?: SortOrder
    parroquia?: SortOrder
    direccionsucursal?: SortOrder
    _count?: sucursalCountOrderByAggregateInput
    _avg?: sucursalAvgOrderByAggregateInput
    _max?: sucursalMaxOrderByAggregateInput
    _min?: sucursalMinOrderByAggregateInput
    _sum?: sucursalSumOrderByAggregateInput
  }

  export type sucursalScalarWhereWithAggregatesInput = {
    AND?: sucursalScalarWhereWithAggregatesInput | sucursalScalarWhereWithAggregatesInput[]
    OR?: sucursalScalarWhereWithAggregatesInput[]
    NOT?: sucursalScalarWhereWithAggregatesInput | sucursalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sucursal"> | number
    estado?: StringWithAggregatesFilter<"sucursal"> | string
    municipio?: StringWithAggregatesFilter<"sucursal"> | string
    parroquia?: StringWithAggregatesFilter<"sucursal"> | string
    direccionsucursal?: StringWithAggregatesFilter<"sucursal"> | string
  }

  export type cargoWhereInput = {
    AND?: cargoWhereInput | cargoWhereInput[]
    OR?: cargoWhereInput[]
    NOT?: cargoWhereInput | cargoWhereInput[]
    id?: IntFilter<"cargo"> | number
    cargo?: StringFilter<"cargo"> | string
    departamento?: StringFilter<"cargo"> | string
  }

  export type cargoOrderByWithRelationInput = {
    id?: SortOrder
    cargo?: SortOrder
    departamento?: SortOrder
    _relevance?: cargoOrderByRelevanceInput
  }

  export type cargoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cargoWhereInput | cargoWhereInput[]
    OR?: cargoWhereInput[]
    NOT?: cargoWhereInput | cargoWhereInput[]
    cargo?: StringFilter<"cargo"> | string
    departamento?: StringFilter<"cargo"> | string
  }, "id">

  export type cargoOrderByWithAggregationInput = {
    id?: SortOrder
    cargo?: SortOrder
    departamento?: SortOrder
    _count?: cargoCountOrderByAggregateInput
    _avg?: cargoAvgOrderByAggregateInput
    _max?: cargoMaxOrderByAggregateInput
    _min?: cargoMinOrderByAggregateInput
    _sum?: cargoSumOrderByAggregateInput
  }

  export type cargoScalarWhereWithAggregatesInput = {
    AND?: cargoScalarWhereWithAggregatesInput | cargoScalarWhereWithAggregatesInput[]
    OR?: cargoScalarWhereWithAggregatesInput[]
    NOT?: cargoScalarWhereWithAggregatesInput | cargoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cargo"> | number
    cargo?: StringWithAggregatesFilter<"cargo"> | string
    departamento?: StringWithAggregatesFilter<"cargo"> | string
  }

  export type userCreateInput = {
    name: string
    lastname: string
    email: string
    password: string
    role?: $Enums.role | null
  }

  export type userUncheckedCreateInput = {
    id?: number
    name: string
    lastname: string
    email: string
    password: string
    role?: $Enums.role | null
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumroleFieldUpdateOperationsInput | $Enums.role | null
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumroleFieldUpdateOperationsInput | $Enums.role | null
  }

  export type userCreateManyInput = {
    id?: number
    name: string
    lastname: string
    email: string
    password: string
    role?: $Enums.role | null
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumroleFieldUpdateOperationsInput | $Enums.role | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumroleFieldUpdateOperationsInput | $Enums.role | null
  }

  export type empleadoCreateInput = {
    photo?: string | null
    name: string
    lastname: string
    birthday: Date | string
    edad: number
    sexo: string
    educacion: string
    telefono: number
    direccion: string
    email: string
    fechaingreso: Date | string
    cargo: string
  }

  export type empleadoUncheckedCreateInput = {
    id?: number
    photo?: string | null
    name: string
    lastname: string
    birthday: Date | string
    edad: number
    sexo: string
    educacion: string
    telefono: number
    direccion: string
    email: string
    fechaingreso: Date | string
    cargo: string
  }

  export type empleadoUpdateInput = {
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    edad?: IntFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    educacion?: StringFieldUpdateOperationsInput | string
    telefono?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fechaingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cargo?: StringFieldUpdateOperationsInput | string
  }

  export type empleadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    edad?: IntFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    educacion?: StringFieldUpdateOperationsInput | string
    telefono?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fechaingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cargo?: StringFieldUpdateOperationsInput | string
  }

  export type empleadoCreateManyInput = {
    id?: number
    photo?: string | null
    name: string
    lastname: string
    birthday: Date | string
    edad: number
    sexo: string
    educacion: string
    telefono: number
    direccion: string
    email: string
    fechaingreso: Date | string
    cargo: string
  }

  export type empleadoUpdateManyMutationInput = {
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    edad?: IntFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    educacion?: StringFieldUpdateOperationsInput | string
    telefono?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fechaingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cargo?: StringFieldUpdateOperationsInput | string
  }

  export type empleadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    edad?: IntFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    educacion?: StringFieldUpdateOperationsInput | string
    telefono?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fechaingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cargo?: StringFieldUpdateOperationsInput | string
  }

  export type sucursalCreateInput = {
    estado: string
    municipio: string
    parroquia: string
    direccionsucursal: string
  }

  export type sucursalUncheckedCreateInput = {
    id?: number
    estado: string
    municipio: string
    parroquia: string
    direccionsucursal: string
  }

  export type sucursalUpdateInput = {
    estado?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    parroquia?: StringFieldUpdateOperationsInput | string
    direccionsucursal?: StringFieldUpdateOperationsInput | string
  }

  export type sucursalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    parroquia?: StringFieldUpdateOperationsInput | string
    direccionsucursal?: StringFieldUpdateOperationsInput | string
  }

  export type sucursalCreateManyInput = {
    id?: number
    estado: string
    municipio: string
    parroquia: string
    direccionsucursal: string
  }

  export type sucursalUpdateManyMutationInput = {
    estado?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    parroquia?: StringFieldUpdateOperationsInput | string
    direccionsucursal?: StringFieldUpdateOperationsInput | string
  }

  export type sucursalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    parroquia?: StringFieldUpdateOperationsInput | string
    direccionsucursal?: StringFieldUpdateOperationsInput | string
  }

  export type cargoCreateInput = {
    cargo: string
    departamento: string
  }

  export type cargoUncheckedCreateInput = {
    id?: number
    cargo: string
    departamento: string
  }

  export type cargoUpdateInput = {
    cargo?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
  }

  export type cargoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargo?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
  }

  export type cargoCreateManyInput = {
    id?: number
    cargo: string
    departamento: string
  }

  export type cargoUpdateManyMutationInput = {
    cargo?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
  }

  export type cargoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargo?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumroleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel> | null
    in?: $Enums.role[] | null
    notIn?: $Enums.role[] | null
    not?: NestedEnumroleNullableFilter<$PrismaModel> | $Enums.role | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumroleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel> | null
    in?: $Enums.role[] | null
    notIn?: $Enums.role[] | null
    not?: NestedEnumroleNullableWithAggregatesFilter<$PrismaModel> | $Enums.role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumroleNullableFilter<$PrismaModel>
    _max?: NestedEnumroleNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type empleadoOrderByRelevanceInput = {
    fields: empleadoOrderByRelevanceFieldEnum | empleadoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type empleadoCountOrderByAggregateInput = {
    id?: SortOrder
    photo?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    birthday?: SortOrder
    edad?: SortOrder
    sexo?: SortOrder
    educacion?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    email?: SortOrder
    fechaingreso?: SortOrder
    cargo?: SortOrder
  }

  export type empleadoAvgOrderByAggregateInput = {
    id?: SortOrder
    edad?: SortOrder
    telefono?: SortOrder
  }

  export type empleadoMaxOrderByAggregateInput = {
    id?: SortOrder
    photo?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    birthday?: SortOrder
    edad?: SortOrder
    sexo?: SortOrder
    educacion?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    email?: SortOrder
    fechaingreso?: SortOrder
    cargo?: SortOrder
  }

  export type empleadoMinOrderByAggregateInput = {
    id?: SortOrder
    photo?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    birthday?: SortOrder
    edad?: SortOrder
    sexo?: SortOrder
    educacion?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    email?: SortOrder
    fechaingreso?: SortOrder
    cargo?: SortOrder
  }

  export type empleadoSumOrderByAggregateInput = {
    id?: SortOrder
    edad?: SortOrder
    telefono?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type sucursalOrderByRelevanceInput = {
    fields: sucursalOrderByRelevanceFieldEnum | sucursalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sucursalCountOrderByAggregateInput = {
    id?: SortOrder
    estado?: SortOrder
    municipio?: SortOrder
    parroquia?: SortOrder
    direccionsucursal?: SortOrder
  }

  export type sucursalAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type sucursalMaxOrderByAggregateInput = {
    id?: SortOrder
    estado?: SortOrder
    municipio?: SortOrder
    parroquia?: SortOrder
    direccionsucursal?: SortOrder
  }

  export type sucursalMinOrderByAggregateInput = {
    id?: SortOrder
    estado?: SortOrder
    municipio?: SortOrder
    parroquia?: SortOrder
    direccionsucursal?: SortOrder
  }

  export type sucursalSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cargoOrderByRelevanceInput = {
    fields: cargoOrderByRelevanceFieldEnum | cargoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cargoCountOrderByAggregateInput = {
    id?: SortOrder
    cargo?: SortOrder
    departamento?: SortOrder
  }

  export type cargoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cargoMaxOrderByAggregateInput = {
    id?: SortOrder
    cargo?: SortOrder
    departamento?: SortOrder
  }

  export type cargoMinOrderByAggregateInput = {
    id?: SortOrder
    cargo?: SortOrder
    departamento?: SortOrder
  }

  export type cargoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableEnumroleFieldUpdateOperationsInput = {
    set?: $Enums.role | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumroleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel> | null
    in?: $Enums.role[] | null
    notIn?: $Enums.role[] | null
    not?: NestedEnumroleNullableFilter<$PrismaModel> | $Enums.role | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumroleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel> | null
    in?: $Enums.role[] | null
    notIn?: $Enums.role[] | null
    not?: NestedEnumroleNullableWithAggregatesFilter<$PrismaModel> | $Enums.role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumroleNullableFilter<$PrismaModel>
    _max?: NestedEnumroleNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}