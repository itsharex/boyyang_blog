/**
 * @Author: boyyang
 * @Date: 2022-04-04 22:53:40
 * @LastEditTime: 2023-02-10 14:14:23
 * @LastEditors: boyyang
 * @Description:
 * @FilePath: \blog_web\src\plugin\naive.ts
 * @[如果痛恨所处的黑暗，请你成为你想要的光。 --塞尔维亚的天空]
 */

import type {App} from 'vue'
import {
    create,
    NConfigProvider,
    NMessageProvider,
    NDialogProvider,
    NInput,
    NButton,
    NForm,
    NFormItem,
    NCheckboxGroup,
    NCheckbox,
    NIcon,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NLayoutSider,
    NMenu,
    NBreadcrumb,
    NBreadcrumbItem,
    NDropdown,
    NSpace,
    NTooltip,
    NAvatar,
    NTabs,
    NTabPane,
    NCard,
    NRow,
    NCol,
    NDrawer,
    NDrawerContent,
    NDivider,
    NSwitch,
    NBadge,
    NAlert,
    NElement,
    NTag,
    NNotificationProvider,
    NProgress,
    NDatePicker,
    NGrid,
    NGridItem,
    NList,
    NListItem,
    NThing,
    NDataTable,
    NPopover,
    NPagination,
    NSelect,
    NRadioGroup,
    NRadio,
    NSteps,
    NStep,
    NInputGroup,
    NResult,
    NDescriptions,
    NDescriptionsItem,
    NTable,
    NInputNumber,
    NLoadingBarProvider,
    NModal,
    NUpload,
    NTree,
    NSpin,
    NTimePicker,
    NBackTop,
    NSkeleton,
    NImage,
    NCarousel,
    NCarouselItem,
    NAutoComplete,
    NDynamicTags,
    NGradientText,
    NText,
    NP,
    NUploadDragger,
    NTimeline,
    NTimelineItem,
    NEllipsis,
    NCalendar,
} from 'naive-ui'

const naive = create({
    components: [
        NMessageProvider,
        NDialogProvider,
        NConfigProvider,
        NInput,
        NButton,
        NForm,
        NFormItem,
        NCheckboxGroup,
        NCheckbox,
        NIcon,
        NLayout,
        NLayoutHeader,
        NLayoutContent,
        NLayoutFooter,
        NLayoutSider,
        NMenu,
        NBreadcrumb,
        NBreadcrumbItem,
        NDropdown,
        NSpace,
        NTooltip,
        NAvatar,
        NTabs,
        NTabPane,
        NCard,
        NRow,
        NCol,
        NDrawer,
        NDrawerContent,
        NDivider,
        NSwitch,
        NBadge,
        NAlert,
        NElement,
        NTag,
        NNotificationProvider,
        NProgress,
        NDatePicker,
        NGrid,
        NGridItem,
        NList,
        NListItem,
        NThing,
        NDataTable,
        NPopover,
        NPagination,
        NSelect,
        NRadioGroup,
        NRadio,
        NSteps,
        NStep,
        NInputGroup,
        NResult,
        NDescriptions,
        NDescriptionsItem,
        NTable,
        NInputNumber,
        NLoadingBarProvider,
        NModal,
        NUpload,
        NTree,
        NSpin,
        NTimePicker,
        NBackTop,
        NSkeleton,
        NImage,
        NCarousel,
        NCarouselItem,
        NAutoComplete,
        NDynamicTags,
        NGradientText,
        NText,
        NP,
        NUploadDragger,
        NTimeline,
        NTimelineItem,
        NEllipsis,
        NCalendar,
    ],
})

const setupNaive = (app: App<Element>) => {
    app.use(naive)
    // 禁止taiwind css 样式按钮覆盖naive ui 样式
    const meta = document.createElement('meta')
    meta.name = 'naive-ui-style'
    document.head.appendChild(meta)
}

export {setupNaive}
