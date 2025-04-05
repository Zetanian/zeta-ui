<script setup>
import { useDropZone } from '@vueuse/core'

const fileInput = ref(null)
const file = ref(null)
const error = ref('')
const dropZoneRef = ref(null)

const allowedFileTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
]

const validateFile = (selectedFile) => {
    error.value = ''

    if (!allowedFileTypes.includes(selectedFile.type)) {
        error.value = 'Only PDF or Word (.doc, .docx) files are allowed.'
        return false
    }

    if (selectedFile.size > 500 * 1024) {
        error.value = 'File size must be less than 500KB.'
        return false
    }

    return true
}

const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0]

    if (selectedFile && validateFile(selectedFile)) {
        file.value = selectedFile
    } else {
        file.value = null
        event.target.value = ''
    }
}

const onDrop = (files) => {
    if (files && files.length > 0) {
        const selectedFile = files[0]

        if (validateFile(selectedFile)) {
            file.value = selectedFile
        } else {
            file.value = null
        }
    }
}

const { isOverDropZone } = useDropZone(dropZoneRef, {
    onDrop,
    dataTypes: ['application/pdf'],
    multiple: false,
    preventDefaultForUnhandled: true,
})

defineExpose({
    file,
})
</script>


<template>
    <div
        ref="dropZoneRef"
        @click="fileInput.click()"
        class="border border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-all"
        :class="isOverDropZone ? 'border-blue-500 bg-blue-50' : 'border-zinc-700'"
    >
        <input
            ref="fileInput"
            type="file"
            class="hidden"
            accept=".pdf,.doc,.docx"
            @change="handleFileSelect"
        />

        <div class="text-center">
            <p class="text-gray-500">
                Drag and drop PDF here or
                <span class="text-blue-600 underline">browse</span>
            </p>
            <p class="text-xs text-gray-400 mt-2">(Max size: 500KB)</p>
        </div>

        <div
            v-if="error"
            class="text-red-500 text-sm mt-2"
        >{{ error }}</div>

        <div
            v-if="file"
            class="mt-4 text-sm text-green-600"
        >
            Selected File: {{ file.name }} ({{ (file.size / 1024).toFixed(2) }} KB)
        </div>
    </div>
</template>
