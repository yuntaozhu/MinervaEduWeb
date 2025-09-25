<template>
	<div class="donation-container">
		<h1 class="title">{{ $t('_landing._donation.title') }}</h1>
		<div class="content-wrapper">
			<div class="left-content">
				<p class="teacher-training">{{ $t('教师培训') }}</p>
			</div>
			<div class="right-content">
				<p class="competition">{{ $t('赛课活动') }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.donation-container {
	text-align: center;
}

.title {
	margin-bottom: 2rem; /* 标题和下方内容的间距 */
	font-size: 4.5rem; /* 假设原标题 h1 默认大小为 2rem，增大3倍 */
}

.content-wrapper {
	display: flex;
	justify-content: space-around; /* 让左右内容均匀分布 */
	align-items: center;
	width: 100%;
}

.left-content, .right-content {
	flex: 1; /* 让左右内容各占一半空间 */
	padding: 1rem;
}

.teacher-training {
	color: #007bff; /* 蓝色，代表专业、信任和知识 */
	font-size: 3rem; /* 按照您的要求修改 */
}

.competition {
	color: #28a745; /* 绿色，代表活力、成长和竞争 */
	font-size: 3rem; /* 按照您的要求修改 */
}
</style>
