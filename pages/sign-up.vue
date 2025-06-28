<script setup lang="ts">

const formData = ref({
    name: "",
    email: "",
    password: ""
})
const onRegister = async() => {
    await $fetch('/api/signup', {
        method: 'POST',
        // $fetch don't need stringify
        body: formData.value
    })
}
</script>

<template>
    <div class="p-4">
        <h1>Register</h1 clas>
        <form @submit.prevent="onRegister" class="flex flex-col gap-4 p-4">
            <input type="text" class="border border-gray-200 p-2" v-model="formData.name" placeholder="Username">
            <input type="email" class="border border-gray-200 p-2" v-model="formData.email" placeholder="Email">
            <input type="password" class="border border-gray-200 p-2" v-model="formData.password" placeholder="Password">
            <button type="submit">Register</button>
        </form>
    </div>
</template>