<template>
  <div class="section-quality" id="quality">
		<v-flex class="title-section-quality bold" text-xs-center>
			{{$t('titleQuality')}}
		</v-flex>
		<v-flex text-xs-center class="description-section-quality bold">
			Fortaleza del Norte ha logrado implementar de manera efectiva su Sistema Integrado de Gestión (SIG) que incluye 3 certificaciones tales como el HACCP,
				BRC y GLOBAL GAP. Con estas certificaciones, Fortaleza del Norte evidencia su compromiso con  los altos estándares de la calidad de sus productos.
		</v-flex>
		<slider
			height="400px"
			animation="normal"
			:speed="6000"
			:control-btn="false"
			width="100%"
		>
			<slider-item v-for="(img, index) in imagesQuality" :key="index">
				<img :src="img.url" alt="">
			</slider-item>
		</slider>
		<!-- <v-flex text-xs-center>
			<img src="/static/images/icons/logo-global.png" alt="">
		</v-flex> -->
	</div>  
</template>

<script>
function data() {
	return {
		imagesQuality: [
			{
				id: 1,
				url: '/static/images/icons/logo-global.png',
			},
			{
				id: 2,
				url: '/static/images/section/image-calidad-two.png',
			},
			{
				id: 3,
				url: '/static/images/section/image-calidad-three.png',
			},
		],
	};
}

export default {
	name: 'section-quality',
	data,
};
</script>

<style lang="scss" scoped>
.section-quality {
	background-image: url('/static/images/banners/banner-quality-mobile.png');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	height: 580px;
	padding: 139px 30px 120px 30px;
	width: 100%;

	@media (min-width: 936px) {
		background-image: url('/static/images/banners/banner-quality.png');
		height: 520px;
	}
}

.title-section-quality {
	color: #878787;
	font-size: 25px;

	@media (min-width: 936px) {
		font-size: 33px;
	}
}

.description-section-quality {
	color: #585858;
	font-size: 14px;
	line-height: 18px;
	margin: 19px 0 58px 0;

	@media (min-width: 936px) {
		margin: 39px auto 52px auto;
		max-width: 600px;
	}
}
</style>