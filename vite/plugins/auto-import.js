/*
 * @Descripttion: 
 * @Author: pangpf
 * @Date: 2021-12-01 10:49:55
 * @LastEditors: pangpf
 */
import autoImport from 'unplugin-auto-import/vite'

export default function createAutoImport() {
    return autoImport({
        imports: [
            'vue',
            'vue-router',
            {
                'vuex': ['useStore']
            }
        ],
        // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
        dts: 'src/auto-import.d.ts'
    })
}
