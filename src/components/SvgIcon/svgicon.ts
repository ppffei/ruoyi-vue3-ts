/*
 * @Descripttion: 
 * @Author: pangpf
 * @Date: 2021-12-02 15:11:03
 * @LastEditors: pangpf
 */
import * as components from '@element-plus/icons'
export default {
    install: (app) => {
        for (const key in components) {
            const componentConfig = components[key]
            app.component(componentConfig.name, componentConfig)
        }
    },
}
