import { Utils as BeeJsUtils } from '@ethersphere/bee-js'
import { Utils as MantarayUtils } from 'mantaray-js'
import * as SwarmCid from '@ethersphere/swarm-cid'
import { Bytes } from '@ethersphere/bee-js/dist/types/utils/bytes'
import { Wallet } from 'ethers'

/** Used as a rootThreat topic */
export const VERSION_HASH = MantarayUtils.keccak256Hash('633chan:v1')

/** Handled by the gateway proxy or swarm-extension */
export const STAMP_ID = '742fee3e9d4cebfe7aa6f6fca1ff7669a52403a9d294e9519b1be72b2ffa9527'

export type HexEthAddress = BeeJsUtils.HexString<40>

export function isSwarmCid(input: string): boolean {
  // FIXME: after https://github.com/ethersphere/swarm-cid-js/issues/7
  try {
    SwarmCid.decodeFeedCid(input)

    return true
  } catch (e) {
    try {
      SwarmCid.decodeManifestCid(input)

      return true
    } catch (e) {
      return false
    }
  }
}

export function getEthereumAddress(privateKey: Bytes<32>): string {
  const wallet = new Wallet(privateKey)

  return wallet.address
}
