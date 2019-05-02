import { ProfileInterface } from './profile.interface'
import { PrivateInfoInterface } from './privateInfo.interface'
import { PublicInfoInterface } from './publicInfo.interface.'

export interface JSONObject {
  profile: ProfileInterface
  privateInfo: PrivateInfoInterface[]
  publicInfo: PublicInfoInterface[]
}
