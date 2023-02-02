/**
 * @Author: boyyang
 * @Date: 2022-12-28 17:14:40
 * @LastEditTime: 2022-12-30 15:26:13
 * @LastEditors: boyyang
 * @Description:
 * @FilePath: \blog_web\src\views\login\hooks\useLogin.ts
 * @[如果痛恨所处的黑暗，请你成为你想要的光。 --塞尔维亚的天空]
 */


import { reactive } from 'vue'
import { login, register } from '@/api/login'
import { router } from '@/router'
import { useUserStoreWithOut } from '@/store/modules/user'

// 登录 注册 data
const loginData = reactive({
    isSignIn: true, // 是否登录状态
    // 账号 密码
    username: '',
    tel: '',
    password: '',
    repassword: '',
})

// 登录 注册 提交
const submit = (type: boolean) => {
    let params = {
        username: loginData.username,
        tel: loginData.tel,
        password: loginData.password,
        repassword: loginData.repassword,
    }
    if (type) {
        // 登录
        if (params.username.trim() == '' || params.password.trim() == '') {
            window.$message.error('账号或密码不能为空')
            return
        }
        login(params).then(res => {
            loginSuccess(res.data)
        })
    } else {
        // 注册
        if (params.username.trim() == '' || params.password.trim() == '' || params.tel == '') {
            window.$message.error('用户名,手机号,密码不能为空')
            return
        }
        if (params.password.trim() != params.repassword.trim()) {
            window.$message.error('密码不一致')
            return
        }
        register(params).then(res => {
            const t = setTimeout(() => {
                submit(true)
                clearTimeout(t)
            }, 2000)
        })
    }
}

// 登录成功
const loginSuccess = (data: loginRes) => {
    const userStore = useUserStoreWithOut()
    userStore.setToken(data.token)
    userStore.setUserinfo(data.info)

    router.replace({ name: 'Home' })
}

const useLogin = () => {
    return {
        loginData,
        submit,
    }
}

export { useLogin }
