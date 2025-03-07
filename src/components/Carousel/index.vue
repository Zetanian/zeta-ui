<template>
    <div
        class="relative w-full max-w-4xl mx-auto overflow-hidden"
        @mouseenter="pauseAutoScroll"
        @mouseleave="resumeAutoScroll"
    >
        <!-- Carousel Container -->
        <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
            <slot></slot> <!-- Render CarouselItems -->
        </div>

        <!-- Navigation Buttons (Visible on Hover) -->
        <button
            class="absolute cursor-pointer top-1/2 left-4 transform -translate-y-1/2 bg-zinc-700 text-white p-2 rounded-full  transition-opacity duration-300"
            @click="prevItem"
            :class="{ 'opacity-0': !showBottons }"
        >
            <Icon icon="mdi:chevron-left"></Icon>
        </button>
        <button
            class="absolute top-1/2 cursor-pointer right-4 transform -translate-y-1/2 bg-zinc-700 text-white p-2 rounded-full  transition-opacity duration-300"
            :class="{ 'opacity-0': !showBottons }"
            @click="nextItem"
        >
            <Icon icon="mdi:chevron-right"></Icon>
        </button>

        <!-- Dots Navigation -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 ">
            <button
                v-for="index in itemCount"
                :key="index"
                class="w-3 h-3 rounded-full bg-zinc-700 opacity-50 hover:opacity-75 transition-all cursor-pointer"
                :class="{ 'opacity-100 scale-125': index - 1 === currentIndex }"
                @click="goToItem(index - 1)"
            ></button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            autoScrollInterval: null,
            itemCount: 0, // Track the number of CarouselItems
            showBottons: false
        };
    },
    provide() {
        return {
            registerCarouselItem: this.registerCarouselItem,
        };
    },
    mounted() {
        this.startAutoScroll();
    },
    beforeUnmount() {
        this.stopAutoScroll();
    },
    methods: {
        startAutoScroll() {
            this.autoScrollInterval = setInterval(() => {
                this.nextItem();
            }, 3000);
        },
        stopAutoScroll() {
            if (this.autoScrollInterval) {
                clearInterval(this.autoScrollInterval);
                this.autoScrollInterval = null;
            }
        },
        pauseAutoScroll() {
            this.showBottons = true
            this.stopAutoScroll();
        },
        resumeAutoScroll() {
            this.showBottons = false
            this.startAutoScroll();
        },
        nextItem() {
            if (this.itemCount === 0) return;
            this.currentIndex = (this.currentIndex + 1) % this.itemCount;
        },
        prevItem() {
            if (this.itemCount === 0) return;
            this.currentIndex = (this.currentIndex - 1 + this.itemCount) % this.itemCount;
        },
        goToItem(index) {
            if (index >= 0 && index < this.itemCount) {
                this.currentIndex = index;
            }
        },
        registerCarouselItem() {
            this.itemCount++; // Increment when a CarouselItem is mounted
        },
    },
};
</script>