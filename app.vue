<script setup lang="ts">
// frontend, backend
const config = useRuntimeConfig()

const {user, getUser} = useUser()

await callOnce(async() => {
  await getUser()
})

</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
