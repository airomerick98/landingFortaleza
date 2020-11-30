<template>
	<div class="section-products" id="products">
		<v-flex text-xs-center class="bold title-section-products">{{$t('titleProduts')}}</v-flex>
		<div class="content-buttons">
			<button class="btn-us" v-for="(btn, index) in $t('btnsProducts')" :key="index">{{btn.name}}</button>
		</div>
		<div class="content-product">
			<div class="content-title">
				<v-flex xs2>
					<span class="title-product">Espárrago</span>
					<span class="title-product-green">Verde</span>
				</v-flex>
				<div>
					<p class="title-list">Presentación</p>
					<ul class="list-dispo">
						<li class="content-present">
							<v-layout column align-center>
								<v-flex>
									<img src="/static/images/icons/icon-present-one-es.svg" alt="" class="icon-one">
								</v-flex>
								<v-flex class="title-preset">
									Vidrio
								</v-flex>
							</v-layout>
						</li>
						<li class="content-present">
							<v-layout column align-center>
								<v-flex>
									<img src="/static/images/icons/icon-present-two-es.svg" alt="" class="icon-one">
								</v-flex>
								<v-flex class="title-preset">
									Lata
								</v-flex>
							</v-layout>
						</li>
						<li>
							<v-layout column align-center>
								<v-flex>
									<img src="/static/images/icons/icon-present-three-es.svg" alt="" class="icono-three">
								</v-flex>
								<v-flex class="title-preset">
									Marca Privada
								</v-flex>
							</v-layout>
						</li>
					</ul>
				</div>
			</div>
			<v-layout row mt-2 class="column-reverse-mobile">
				<v-flex>
					<div>
						<ul class="list-none">
							<p class="title-list br-desktop">Propiedades</p>
							<li class="mb-product">
								<v-layout row>
									<v-flex xs1>
										<img src="/static/images/icons/check-mark.svg">
									</v-flex>
									<v-flex class="item-description">
										Tiene una gran cantidad de vitaminas:
										<span class="bold-description">A, B1, B2, B6, C Y E.</span>
									</v-flex>
								</v-layout>
							</li>
							<li class="mb-product">
								<v-layout row>
									<v-flex xs1>
										<img src="/static/images/icons/check-mark.svg">
									</v-flex>
									<v-flex class="item-description">
										Tiene minerales como:
										<span class="bold-description">magnesio, fósforo, calcio y potasio</span>
									</v-flex>
								</v-layout>
							</li>
							<li>
								<v-layout row>
									<v-flex xs1>
										<img src="/static/images/icons/check-mark.svg">
									</v-flex>
									<v-flex class="item-description">
										Alta cantidad de
										<span class="bold-description">antioxidantes</span>
									</v-flex>
								</v-layout>
							</li>
						</ul>
					</div>
					<div>
						<p class="title-list mt-disp italic">Disponible</p>
						<ul class="list-dispo">
							<li>
								<v-layout column align-center>
									<v-flex>
										<img src="/static/images/icons/icon-product-one.svg" class="icon-dispo">
									</v-flex>
									<v-flex>
										<span class="text-dispo">Fresco</span>	
									</v-flex>
								</v-layout>
							</li>
							<li class="content-disp">
								<v-layout column align-center>
									<v-flex>
										<img src="/static/images/icons/icon-product-two-es.svg" class="icon-dispo">
									</v-flex>
									<v-flex>
										<span class="text-dispo">Congelados</span>
									</v-flex>
								</v-layout>
							</li>
							<li class="content-disp">
								<v-layout column align-center>
									<v-flex>
										<img src="/static/images/icons/icon-three-es.svg" class="icon-dispo">
									</v-flex>
									<v-flex>
										<span class="text-dispo">Conservas</span>
									</v-flex>
								</v-layout>
							</li>
						</ul>
					</div>
				</v-flex>
				<v-flex>
					<img src="/static/images/section/esparrago-mobile.png" alt="imagen-esparrago" class="w-100 br-desktop">
					<img src="/static/images/section/image-product-one.png" class="w-100 br-mobile" alt="imagen-esparrago">
				</v-flex>
			</v-layout>
		</div>
	</div>
</template>

<script>
export default {
	name: 'section-products',
};
</script>

<style lang="scss" scoped>
.section-products {
	padding: 40px 0;
}

.title-section-products {
	color: #878787;
	font-size: 25px;

	@media (min-width: 936px) {
		font-size: 33px;
	}
}

.btn-us {
	background-color: white;
	border: solid 1px #e5e5e5;
	border-radius: 31.5px;
	color: #878787;
	font-size: 14px;
	font-weight: 500;
	height: 44px;
	width: 137px;

	@media (min-width: 936px) {
		margin-left: 20px;
	}
}

.content-buttons {
	background-color: #fafafa;
	border-radius: 31.5px;
	margin-bottom: 39px;
	padding: 9px 0 9px 11px;

	@media (min-width: 936px) {
		background-color: transparent;
		display: flex;
		margin: 40px 0 70px 0;
		padding: 0 8%;
		justify-content: center;
	}
}

.title-product {
	color: #000000;
	line-height: 27px;
	font-size: 25px;
	font-style: italic;

	@media (min-width: 936px) {
		font-size: 47px;
		line-height: 42px;
	}
}

.title-product-green {
	color: #41aa36;
	font-size: 25px;
	font-weight: 600;
	font-style: italic;

	@media (min-width: 936px) {
		font-size: 47px;
		line-height: 42px;
	}
}

.item-description {
	color: #000000;
	font-size: 12px;
	line-height: 17px;

	@media (max-width: 936px) {
		max-width: 236px;
	}
}

.bold-description {
	font-weight: bold;
}

.title-list {
	color: #000000;
	font-size: 14px;
	font-weight: bold;
	line-height: 27px;
	
	@media (min-width: 936px) {
		font-size: 16px;
	}
}

.text-dispo {
	color: #000000;
	font-size: 10px;
	line-height: 27px;
	font-stretch: normal;
	font-style: italic;
	font-weight: 600;

	@media (min-width: 936px) {
		font-size: 11px;
	}
}

.icon-dispo {
	height: 31px;

	@media (min-width: 936px) {
		height: 42px;
	}
}

.list-dispo {
	display: flex;
	list-style: none;
}

.title-preset {
	color: #000000;
	font-size: 9px;
	font-style: italic;
	font-weight: 600;
	width: 40px;
	text-align: center;
}

.content-product {
	padding: 0 30px;

	@media (min-width: 936px) {
		padding: 0 10%;
	}
}

.content-title {
	display: flex;
	flex-direction: column;

	@media (min-width: 936px) {
		flex-direction: row;
		justify-content: space-between;
	}
}

.icon-one {
	height: 28px;

	@media (min-width: 936px) {
		height: 38px;
	}
}

.content-present {
	@media (min-width: 936px) {
		margin-right: 24px;
	}
}

.mb-product {
	margin-bottom: 16px;

	@media (min-width: 936px) {
		margin-bottom: 50px;
	}
}

.mt-disp {
	margin-top: 16px;

	@media (min-width: 936px) {
		margin-top: 30px;
	}
}

.content-disp {
	margin-left: 16px;

	@media (min-width: 936px) {
		margin-left: 34px;	
	}
}

.column-reverse-mobile {
	@media (max-width: 936px) {
		flex-direction: column-reverse;
	}
}

.icono-three {
	@media (max-width: 936px) {
		height: 33px;
	}
}
</style>