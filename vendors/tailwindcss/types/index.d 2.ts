import { PluginCreator } from 'postcss'
import type { Config } from './config'

declare const plugin: PluginCreator<string | Config | { config: string | Config }>

export { Config }
export default plugin
