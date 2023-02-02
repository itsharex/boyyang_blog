import { reactive } from 'vue'
import { env } from '@/utils/env'
import { dashboard } from '@/api/dashboard'

interface rouseData {
    name: string
    value: number | string
}

interface exhibitions {
    name: string
    url: string
}

const dashboardData = reactive({
    dashboard: [] as dashboard_dashboard[],
    user_info: {} as dashboard_user_info,
    rouseData: [] as rouseData[],
    exhibitions: [] as exhibitions[],
})

// 获取dashboard数据
const getDashboard = () => {
    dashboard().then(res => {
        dashboardData.dashboard = res.data.dashboard
        dashboardData.user_info = res.data.user_info
        dashboardData.rouseData = [
            { name: '点赞', value: res.data.user_info.thumbs_up },
            { name: '发布', value: res.data.user_info.publish },
            { name: '收藏', value: res.data.user_info.like },
        ]
        dashboardData.exhibitions = res.data.exhibitions.map((item) => {
            return {
                name: item.title,
                url:`${env.VITE_APP_IMG_URL}${item.cover}`,
            }
        })
    })
}

export const useDashboard = () => {
    return {
        dashboardData,
        getDashboard,
    }
}
