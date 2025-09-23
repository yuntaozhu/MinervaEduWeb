<template>
    <div class="bg-white dark:bg-slate-950 rounded-2xl p-6 lg:p-12 lg:py-24 mx-auto max-w-screen-lg">
        <h2 class="text-center text-xl lg:text-4xl font-bold font-title mb-6">{{ $t('_landing._donation.title') }}</h2>
        <p class=" text-center lg:text-1xl  font-bold leading-relaxed lg:leading-loose mb-6">{{ $t('_landing._donation.description') }}</p>

			<p class=" text-center lg:text-1xl  font-bold leading-relaxed lg:leading-loose mb-6">{{ $t(' 赛课活动定期组织教师开展教学研讨活动，交流教学心得，共同解决教学过程中遇到的问题。针对新增的融合航天元素的教学内容，进行教学设计研讨，优化课程教学方案，提高教学质量。') }}</p>
        <p class="text-center">
            <!-- <GButton button-type="link" :to="localePath('/docs/donate/')" color="accent">{{ $t('learnMore') }}</GButton> -->
        </p>
    </div>
</template>
<script setup lang="ts">
const localePath = useGLocalePath();
</script>
