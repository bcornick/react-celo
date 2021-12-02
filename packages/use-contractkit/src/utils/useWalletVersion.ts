// Uncomment with WCV2 support
// import { useEffect, useState } from 'react';
// import fetchWCWallets from './fetchWCWallets';
import { WalletIds } from '../constants';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useWalletVersion(walletId?: WalletIds): number {
  return 1;
}

// Uncomment with WCV2 support
// const VERSION_OVERRIDE: Record<string, number> = Object.freeze({
//   [WalletIds.Valora]: 1,
//   [WalletIds.CeloWallet]: 2,
//   [WalletIds.CeloTerminal]: 2,
//   [WalletIds.CeloDance]: 2,
// });
//
// export function useWalletVersion(wallet?: WalletEntry): number | null {
//   // TODO: decide if to use v1 or v2 as a default for unknown wallectconnect? Or if to expose both
//   const [version, setVersion] = useState<number | null>(wallet?.id ? null : 1);
//   const celoWallets = useFetchWCWallets();

//   useEffect(() => {
//     if (!wallet) {
//       return;
//     }

//     const versionFromRegistry = Math.max(
//       ...wallet.versions.map((_) => parseInt(_, 10))
//     );

//     if (
//       VERSION_OVERRIDE[wallet.id] &&
//       VERSION_OVERRIDE[wallet.id] !== versionFromRegistry
//     ) {
//       console.warn(
//         `Override version found in registry(${versionFromRegistry}) by hard-coded version(${
//           VERSION_OVERRIDE[wallet.id]
//         }) for ${wallet.name}`
//       );
//       setVersion(VERSION_OVERRIDE[wallet.id]);
//     } else {
//       setVersion(versionFromRegistry);
//     }
//   }, [wallet, celoWallets]);

//   return version;
// }
