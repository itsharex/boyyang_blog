import {computed, PropType, reactive} from 'vue'
import {UploadFileInfo, UploadInst} from 'naive-ui'
import {env} from '@/utils/env'

// api
import {createExhibition} from '@/api/exhibition'
import {upload} from '@/api/upload'

const uploadData = reactive({
    isShowSpin: false,
    fileList: [] as UploadFileInfo[],
    uploadUrl: '',
    submit: {
        title: '',
        des: '',
        cover: '',
        tags: '',
    },
    previewUrl: '',
})

const useUpload = () => {
    return {
        uploadData,
        tagsChange,
        handleUploadChange,
        submit,
    }
}

const handleUploadChange = (data: {
    event: Event
    fileList: UploadFileInfo[]
    file: UploadFileInfo
}) => {
    if (data.event == null) {
        uploadData.previewUrl = ''
        return
    }
    let name = data.file.name.split(".").shift()
    uploadData.submit.title = name  || ''
    uploadData.submit.des = name || ''
    const read = new FileReader()
    read.readAsDataURL(data.file.file as Blob)
    read.onload = e => {
        uploadData.previewUrl = e.target?.result as string
    }
}

const submit = (uploadRef: UploadInst | null) => {
    if (
        uploadData.submit.title == '' ||
        uploadData.submit.des == '' ||
        uploadData.fileList.length == 0
    ) {
        window.$notification.create({
            title: '提示',
            type: 'error',
            content: '标题，描述，图片为必传项！',
            duration: 3000,
        })

        return
    }

    let params = {
        file_name: uploadData.fileList[0].name,
        file: uploadData.fileList[0].file as File,
    }
    uploadData.isShowSpin = true
    upload(params).then((res: any) => {
        uploadData.submit.cover = res.key

        let params = {
            ...uploadData.submit,
        }
        createExhibition(params).then(() => {
            uploadData.isShowSpin = false
            window.$notification.create({
                title: '提示',
                type: 'success',
                content: '图片上传成功',
                duration: 3000,
            })
            uploadData.submit = {
                title: '',
                des: '',
                cover: '',
                tags: '',
            }
            uploadData.fileList = []
            uploadData.previewUrl = ''
        })
    })
}

const tagsChange = (tagsItem: Array<{ id: number, text: string }>) => {
    uploadData.submit.tags = tagsItem.map(tag => tag.text).join(",")
}

export {useUpload}
