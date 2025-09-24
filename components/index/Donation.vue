<template>
    <div class="bg-white dark:bg-slate-950 rounded-2xl p-6 lg:p-12 lg:py-24 mx-auto max-w-screen-lg">
        <h2 class="text-center text-xl lg:text-4xl font-bold font-title mb-6">{{ $t('_landing._donation.title') }}</h2>
        <p class=" text-center lg:text-3xl  font-bold fill-blue-600 leading-relaxed lg:leading-loose mb-6">{{ $t('教师培训') }}</p>

			<p class=" text-center lg:text-3xl  font-bold fill-orange-700 leading-relaxed lg:leading-loose mb-6">{{ $t(' 赛课活动') }}</p>
        <p class="text-center">
            <!-- <GButton button-type="link" :to="localePath('/docs/donate/')" color="accent">{{ $t('learnMore') }}</GButton> -->
        </p>
    </div>
</template>
<script setup lang="ts">
const localePath = useGLocalePath();
</script>
