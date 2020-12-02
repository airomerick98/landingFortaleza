<template>
	<div class="section-products" id="products">
		<v-flex text-xs-center class="bold title-section-products">{{$t('titleProduts')}}</v-flex>
		<div class="content-buttons">
			<button
			@click="selectProduct(btn.id)"
			:class="{ 'active': btn.id ===  btnSelected}"
			class="btn-us"
			v-for="(btn, index) in $t('btnsProducts')"
			:key="index">{{btn.name}}</button>
		</div>
		<div
		class="content-product">
			<div v-if="btnSelected === 1">
				<div class="content-title">
					<v-flex xs2>
						<span class="title-product">{{$t('titleEs')}}</span>
						<span class="title-product-green">{{$t('titleEsGreen')}}</span>
					</v-flex>
					<div>
						<p class="title-list">{{$t('titlePres')}}</p>
						<ul class="list-dispo">
							<li v-for="(pres, index) in $t('listPresents')" :key="index" class="content-present">
								<v-layout column align-center>
									<v-flex>
										<img :src="pres.icon" :alt="pres.name" class="icon-one">
									</v-flex>
									<v-flex class="title-preset">
										{{ pres.name }}
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
										<v-flex>
											<img src="/static/images/icons/check-mark.svg">
										</v-flex>
										<v-flex class="item-description ml-2">
											Tiene una gran cantidad de vitaminas:
											<span class="bold-description">A, B1, B2, B6, C Y E.</span>
										</v-flex>
									</v-layout>
								</li>
								<li class="mb-product">
									<v-layout row align-center>
										<v-flex>
											<img src="/static/images/icons/check-mark.svg">
										</v-flex>
										<v-flex class="item-description ml-2">
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
							<p class="title-list mt-disp italic">{{$t('titleDis')}}</p>
							<ul class="list-dispo">
								<li class="content-disp" v-for="(dis, index) in $t('listDisp')" :key="index">
									<v-layout column align-center>
										<v-flex>
											<img :src="dis.icon" class="icon-dispo">
										</v-flex>
										<v-flex>
											<span class="text-dispo">{{dis.name}}</span>	
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
			<div v-if="btnSelected === 2">
				<div class="content-title">
					<v-flex xs2>
						<span class="title-product">ESPÁRRAGO</span>
						<span class="title-product-green">BLANCO</span>
					</v-flex>
					<div>
						<p class="title-list">{{$t('titlePres')}}</p>
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
										<v-flex>
											<img src="/static/images/icons/check-mark.svg">
										</v-flex>
										<v-flex class="item-description ml-2">
											Tiene una gran cantidad de vitaminas:
											<span class="bold-description">A, B1, B2, B6, C Y E.</span>
										</v-flex>
									</v-layout>
								</li>
								<li class="mb-product">
									<v-layout row>
										<v-flex>
											<img src="/static/images/icons/check-mark.svg">
										</v-flex>
										<v-flex class="item-description ml-2">
											Tiene minerales como:
											<span class="bold-description">magnesio, fósforo, calcio y potasio</span>
										</v-flex>
									</v-layout>
								</li>
								<li>
									<v-layout row>
										<v-flex>
											<img src="/static/images/icons/check-mark.svg">
										</v-flex>
										<v-flex class="item-description ml-2">
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
						<img src="/static/images/section/esparragos-blanco-mobile.png" alt="imagen-esparrago" class="w-100 br-desktop">
						<img src="/static/images/section/img-esparrago-blanco.png" class="w-100 br-mobile" alt="imagen-esparrago">
					</v-flex>
				</v-layout>
			</div>
			<div v-if="btnSelected === 3">
				<div class="content-title">
					<v-flex xs2>
						<span class="title-product">PIMIENTO</span>
						<span class="title-product-green">MORRÓN</span>
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
										<v-flex>
											<img src="/static/images/icons/check-mark.svg">
										</v-flex>
										<v-flex class="item-description ml-2">
											Por su alto contenido de potasio, el morrón en un
											<span class="bold-description">excelente diurético</span>
										</v-flex>
									</v-layout>
								</li>
								<li class="mb-product">
									<v-layout row>
										<v-flex>
											<img src="/static/images/icons/check-mark.svg">
										</v-flex>
										<v-flex class="item-description ml-2">
											Ayuda a
											<span class="bold-description">bajar de peso</span>
										</v-flex>
									</v-layout>
								</li>
								<li>
									<v-layout row>
										<v-flex>
											<img src="/static/images/icons/check-mark.svg">
										</v-flex>
										<v-flex class="item-description ml-2">
											Tiene un bajo aporte de calorías:   
											<span class="bold-description">sólo 20 calorías cada 100 gramos</span>
										</v-flex>
									</v-layout>
								</li>
							</ul>
						</div>
						<div>
							<p class="title-list mt-disp italic">Disponible</p>
							<ul class="list-dispo">
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
						<img src="/static/images/section/pimiento-mobile.png" alt="imagen-esparrago" class="w-100 br-desktop">
						<img src="/static/images/section/img-pimiento-morrin.png" class="w-100 br-mobile" alt="imagen-esparrago">
					</v-flex>
				</v-layout>
			</div>
			<div v-if="btnSelected === 4">
				<div class="content-title">
					<v-flex xs2>
						<span class="title-product-green">MARACUYÁ</span>
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
										<v-flex>
											<img src="/static/images/icons/check-mark.svg">
										</v-flex>
										<v-flex class="item-description ml-2">
											Ayuda a
											<span class="bold-description">reducir la presión arterial.</span>
										</v-flex>
									</v-layout>
								</li>
								<li class="mb-product">
									<v-layout row>
										<v-flex>
											<img src="/static/images/icons/check-mark.svg">
										</v-flex>
										<v-flex class="item-description ml-2">
											Rica en vitaminas A y C antioxidantes, 
											<span class="bold-description">alto contenido de hierro y flavonoides.</span>
										</v-flex>
									</v-layout>
								</li>
								<li>
									<v-layout row>
										<v-flex>
											<img src="/static/images/icons/check-mark.svg">
										</v-flex>
										<v-flex class="item-description ml-2">
											Estimulante natural y suplemento dietético práctico,  
											<span class="bold-description">aumenta el metabolismo.</span>
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
						<img src="/static/images/section/maracuya-mobile.png" alt="imagen-esparrago" class="w-100 br-desktop">
						<img src="/static/images/section/img-maracuya.png" class="w-100 br-mobile" alt="imagen-esparrago">
					</v-flex>
				</v-layout>
			</div>
			<div v-if="btnSelected === 5">
				<div class="content-title">
					<v-flex xs2>
						<span class="title-product-green">ARÁNDANOS</span>
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
										<v-flex>
											<img src="/static/images/icons/check-mark.svg">
										</v-flex>
										<v-flex class="item-description ml-2">
											Favorece a la
											<span class="bold-description">familia de los berries.</span>
										</v-flex>
									</v-layout>
								</li>
								<li class="mb-product">
									<v-layout row>
										<v-flex>
											<img src="/static/images/icons/check-mark.svg">
										</v-flex>
										<v-flex class="item-description ml-2">
											Muy bajo en calorías, gran contenido de fibra,
											<span class="bold-description">vitamina C y K.</span>
										</v-flex>
									</v-layout>
								</li>
								<li>
									<v-layout row>
										<v-flex>
											<img src="/static/images/icons/check-mark.svg">
										</v-flex>
										<v-flex class="item-description ml-2">
											Tienen la capacidad <span class="bold-description">antioxidante</span>, con los flavonoides como principales antioxidantes presentes 
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
						<img src="/static/images/section/arandanos-mobile.png" alt="imagen-esparrago" class="w-100 br-desktop">
						<img src="/static/images/section/img-arandanos.png" class="w-100 br-mobile" alt="imagen-esparrago">
					</v-flex>
				</v-layout>
			</div>
			<div v-if="btnSelected === 6">
				<div class="content-title">
					<v-flex xs2>
						<span class="title-product">MANGO</span>
						<span class="title-product-green">KENT</span>
					</v-flex>
					<div>
						<p class="title-list">Presentación</p>
						<ul class="list-dispo">
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
										<v-flex>
											<img src="/static/images/icons/check-mark.svg">
										</v-flex>
										<v-flex class="item-description ml-2">
											Fruta rica en vitamina
											<span class="bold-description">A, C Y E</span>
										</v-flex>
									</v-layout>
								</li>
								<li class="mb-product">
									<v-layout row>
										<v-flex>
											<img src="/static/images/icons/check-mark.svg">
										</v-flex>
										<v-flex class="item-description ml-2">
											Aporta
											<span class="bold-description">magnecio y potasio</span>
										</v-flex>
									</v-layout>
								</li>
								<li>
									<v-layout row>
										<v-flex>
											<img src="/static/images/icons/check-mark.svg">
										</v-flex>
										<v-flex class="item-description ml-2">
											Favorece a la <span class="bold-description">asimilación de nutrientes</span>, con los flavonoides como principales antioxidantes presentes 
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
							</ul>
						</div>
					</v-flex>
					<v-flex>
						<img src="/static/images/section/mango-mobile.png" alt="imagen-esparrago" class="w-100 br-desktop">
						<img src="/static/images/section/img-mango-kent.png" class="w-100 br-mobile" alt="imagen-esparrago">
					</v-flex>
				</v-layout>
			</div>
		</div>
	</div>
</template>

<script>
function selectProduct(id) {
	this.btnSelected = id;
}

function data() {
	return {
		btnSelected: 1,
		products: [
			{
				id: 1,
				titleBlack: 'ESPÁRRAGO',
				titleGreen: 'VERDE',
				imageMobile: '/static/images/section/esparrago-mobile.png',
				imageDesktop: '/static/images/section/image-product-one.png',
				listProperties: [
					{
						id: 1,
						name: 'Tiene una gran cantidad de vitaminas:',
						bold: 'A, B1, B2, B6, C Y E.',
					},
					{
						id: 2,
						name: 'Tiene minerales como:',
						bold: 'magnesio, fósforo, calcio y potasio.',
					},
					{
						id: 3,
						name: 'Alta cantidad de',
						bold: 'antioxidantes.',
					},
				],
			},
			{
				id: 2,
				titleBlack: 'ESPÁRRAGO',
				titleGreen: 'BLANCO',
				listProperties: [
					{
						id: 1,
						name: 'Tiene una gran cantidad de vitaminas:',
						bold: 'A, B1, B2, B6, C Y E.',
					},
					{
						id: 2,
						name: 'Tiene minerales como:',
						bold: 'magnesio, fósforo, calcio y potasio.',
					},
					{
						id: 3,
						name: 'Alta cantidad de',
						bold: ' antioxidantes.',
					},
				],
			},
			{
				id: 3,
				titleBlack: 'PIMIENTO',
				titleGreen: 'MORRÓN',
				listProperties: [
					{
						id: 1,
						name: 'Por su alto contenido de potasio, el morrón en un',
						bold: 'excelente diurético',
					},
					{
						id: 2,
						name: 'Ayuda a',
						bold: 'bajar de peso',
					},
					{
						id: 3,
						name: 'Tiene un bajo aporte de calorías:',
						bold: 'sólo 20 calorías cada 100 gramos',
					},
				],
			},
			{
				id: 4,
				titleGreen: 'MARACUYÁ',
				listProperties: [
					{
						id: 1,
						name: 'Ayuda a',
						bold: 'reducir la presión arterial.',
					},
					{
						id: 2,
						bold: 'Rica en vitaminas A y C antioxidantes,',
						name: 'alto contenido de hierro y flavonoides.',
					},
					{
						id: 3,
						name: 'Estimulante natural y suplemento dietético práctico,',
						bold: 'aumenta el metabolismo.',
					},
				],
			},
			{
				id: 5,
				titleGreen: 'ARÁNDANOS',
				listProperties: [
					{
						id: 1,
						name: 'Favorece a la',
						bold: 'familia de los berries.',
					},
					{
						id: 2,
						name: 'Muy bajo en calorías, gran contenido de fibra,',
						bold: 'vitamina C y K.',
					},
					{
						id: 3,
						name: 'Tienen la capacidad antioxidante, con los flavonoides como principales antioxidantes presentes',
					},
				],
			},
			{
				id: 6,
				titleBlack: 'MANGO',
				titleGreen: 'KENT',
				listProperties: [
					{
						id: 1,
						name: 'Fruta rica en vitamina',
						bold: 'A, C Y E',
					},
				],
			},
		],
	};
}

export default {
	name: 'section-products',
	data,
	methods: {
		selectProduct,
	},
};
</script>

<style lang="scss" scoped>
.section-products {
	padding: 40px 0;
}

.title-section-products {
	color: #878787;
	font-size: 25px;
	margin-bottom: 41px;

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
	margin-left: 21px;
	padding: 0 30px;

	&.active {
		background-color: #66cc33;
		color: white;
	}

	&:first-child {
		margin-left: 0;
	}

	@media (min-width: 936px) {
		margin-left: 20px;
	}
}

.content-buttons {
	background-color: #fafafa;
	border-radius: 31.5px;
	margin-bottom: 39px;
	padding: 9px 0 9px 11px;
	overflow: auto;
	overflow-y: hidden;
	margin: 0 auto;
	white-space: nowrap;

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
		font-size: 15px;
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
	font-weight: 600;
	line-height: 11px;
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

	&:first-child {
		margin-left: 0;
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