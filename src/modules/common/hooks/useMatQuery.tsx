// /* eslint-disable @typescript-eslint/ban-ts-comment */
// import { ApiTemplate } from '@/api/ApiTemplate';
// import { ApiResponse } from '@/api/types/api';
// import { useQueryConfig } from '@/shared/hooks/useQueryConfig';
// import { useQuery, UseQueryOptions } from '@tanstack/react-query';
// import React from 'react';
// import toast from 'react-hot-toast';

// type UseMatQueryOptions<Result> = Omit<
//   UseQueryOptions<Result>,
//   'queryFn' | 'onSuccess' | 'onError' | 'queryKey'
// > & {
//   controlled?: boolean;
//   toastError?: string;
// };

// export const useMatQuery = <
//   TData,
//   TInstance extends ApiTemplate,
//   TMethod extends keyof TInstance = keyof TInstance,
//   // @ts-ignore
//   Result extends Awaited<ReturnType<TInstance[TMethod]>> = Awaited<
//     ReturnType<TInstance[TMethod]>
//   >,
//   // @ts-ignore
//   Args extends Parameters<TInstance[TMethod]> = Parameters<TInstance[TMethod]>,
// >(
//   apiInstance: TInstance,
//   method: TMethod,
//   args: Args,
//   options?: UseMatQueryOptions<
//     Result extends unknown ? Awaited<ApiResponse<TData>> : Result
//   >,
// ) => {
//   const { controlled, toastError, enabled, ...rest } = options || {};

//   const controlledRef = React.useRef(controlled);

//   const [control, setcontrol] = React.useState(!controlled);

//   const queryKey = React.useMemo(() => {
//     return [apiInstance.resource, method, ...args];
//   }, [apiInstance.resource, method, args]);

//   const config = useQueryConfig(queryKey.slice(0, 1));

//   const query = useQuery({
//     queryFn: () =>
//       (
//         apiInstance[method] as (
//           ...args: Args
//         ) => Result extends unknown ? Awaited<ApiResponse<TData>> : Result
//       )(...args),
//     queryKey,
//     enabled: controlledRef.current ? control && enabled : enabled,
//     ...rest,
//   });

//   React.useLayoutEffect(() => {
//     if (controlled !== controlledRef.current) {
//       console.warn('useMatQuery::controlled prop changed');
//     }
//   }, [controlled]);

//   React.useEffect(() => {
//     if (query.isError) {
//       toastError && toast.error(options?.toastError || 'Something went wrong');
//     }
//   }, [query.isError]);

//   return {
//     ...query,
//     ...config,
//     setcontrol,
//     control,
//   };
// };
