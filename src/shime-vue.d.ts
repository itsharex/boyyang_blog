/**
 * @Author: boyyang
 * @Date: 2022-04-04 23:54:24
 * @LastEditTime: 2022-06-03 18:39:04
 * @LastEditors: boyyang
 * @Description: 
 * @FilePath: \drawingBed\src\shime-vue.d.ts
 * @[如果痛恨所处的黑暗，请你成为你想要的光。 --塞尔维亚的天空]
 */

import { MessageApi, DialogApi } from 'naive-ui'

declare module 'qs'
// declare module 'vue-picture-cropper/dist/esm'
declare global {
    interface Window {
        $message: MessageApi
        $dialog: DialogApi
    }
}
