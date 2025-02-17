<template>
    <div class="w-full flex-shrink-0">
        <slot></slot> <!-- Render dynamic content -->
    </div>
</template>

<script>
export default {
    name: 'CarouselItem',
    inject: ['registerCarouselItem'],
    mounted() {
        this.registerCarouselItem(); // Notify parent that this item exists
    },
};
</script>