<script setup lang="ts">

interface NavItem {
    title: string
    to: string
}

const navItems: NavItem[] = [
    { title: 'Home', to: "/" },
    { title: 'About', to: "/about" },
    { title: 'Register', to: "/sign-up" },
    { title: 'Login', to: "/login" },
    { title: 'Admin', to: "/admin" },
]

const currentYear = new Date().getFullYear()

const { user, logout } = useUser()

console.log(user.value);


</script>

<template>
    <nav class="border-b border-gray-200 p-4 flex gap-2">
        <li v-for="item in navItems" :key="item.title">
            <NuxtLink :to="item.to">{{ item.title }}</NuxtLink>
        </li>
    </nav>
    <main>
        <slot></slot>
        <div v-if="!user">
            <NuxtLink to="/login">Login</NuxtLink>
        </div>
        <div v-else>
            <button @click="logout" class="bg-red-400 p-1 rounded-lg">Logout</button>
        </div>
    </main>
    <footer>
        <p>{{ currentYear }}</p>
    </footer>
</template>