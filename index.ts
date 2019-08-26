import { beforeRegistration } from './hooks/beforeRegistration'
import { VueStorefrontModule, VueStorefrontModuleConfig } from '@vue-storefront/core/lib/module'

export const KEY = 'vsf-messenger-chat'

const moduleConfig: VueStorefrontModuleConfig = {
  key: KEY,
  beforeRegistration
}

export const FacebookCustomerChat = new VueStorefrontModule(moduleConfig)