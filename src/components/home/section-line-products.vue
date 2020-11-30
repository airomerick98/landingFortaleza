<template>
  <div class="section-line-products">
		<v-flex class="title-line-products bold" text-xs-center>{{$t('titleLineProducts')}}</v-flex>
		<div class="content-image-products">
			<div class="content-image-one center">
				<div class="opacity-image"></div>
				<div class="row-hover">
					<div>
						<img src="/static/images/icons/icon-product-one.png" alt="icono-primer-producto" class="icon-line-products">
					</div>
					<div>
						<p class="title-section-image bold">Conservas</p>
					</div>
				</div>
				<div class="text-hover bold">
					Elaboramos nuestros productos cumpliendo con el sistema vigente HACCP, asegurando la inocuidad y calidad sanitaria, ofreciendo así productos de calidad.
					<ul class="list-none">
						<li>– Espárragos Verdes</li>
						<li>– Espárragos Blancos</li>
						<li>– Pimiento Morrón</li>
						<li>– Arándano</li>
					</ul>
				</div>
			</div>
			<div class="content-image-two center">
				<div class="opacity-image"></div>
				<div class="row-hover">
					<div>
						<img src="/static/images/icons/icon-product-two.png" alt="icono-segundo-producto" class="icon-line-products">
					</div>
					<div>
						<p class="title-section-image bold">Frescos</p>
					</div>
				</div>
				<div class="text-hover bold">
					Llevamos a tu mesa nuestra línea de productos frescos, directos del campo, cumpliendo con las Buenas Prácticas de Manufactura (BPM) y calidad.
						<ul  class="list-none">
							<li>– Espárrago verde</li>
							<li>– Maracuyá</li>
							<li>– Arándano</li>
							<li>– Mango: Kent</li>
							<li>– Palta: Hass y fuerte</li>
						</ul>
				</div>
			</div>
			<div class="content-image-three center">
				<div class="opacity-image"></div>
				<div class="row-hover">
					<div>
						<img src="/static/images/icons/icon-product-three.png" alt="icono-tercer-producto" class="icon-line-products">
					</div>
					<div>
						<p class="title-section-image bold">Congelados</p>
					</div>
				</div>
				<div class="text-hover bold">
					Llevamos a tu mesa nuestra línea de congelados, cumpliendo con los lineamientos de calidad e inocuidad.
					<ul class="list-none">
						<li>– Espárrago verde</li>
						<li>– Maracuyá</li>
						<li>– Arándano</li>
						<li>– Mango: Kent</li>
					</ul>
				</div>
			</div>
		</div>
	</div>  
</template>

<script>
function data() {
	return {
		lineProducts: [
			{
				id: 1,
				icon: '/static/images/icons/icon-product-one.png',
				urlImage: '/static/images/section/product-1.png',
				title: 'Conservas',
				description: 'Elaboramos nuestros productos cumpliendo con el sistema vigente HACCP, asegurando la inocuidad y calidad sanitaria, ofreciendo así productos de calidad.',
				listProd: [
					{
						id: 1,
						name: '– Espárragos Verdes',
					},
					{
						id: 2,
						name: '',
					},
				],
			},
		],
	};
}

export default {
	name: 'section-line-products',
	data,
};
</script>

<style lang="scss" scoped>
.section-line-products {
	background-color: white;
	padding: 71px 10px 20px 10px;

	@media (min-width: 936px) {
		padding: 101px 0 0 0;
	}
}

.title-line-products {
	color: #878787;
	font-size: 25px;

	@media (min-width: 936px) {
		font-size: 33px;
	}
}

.content-image-products {
	display: flex;
	flex-direction: column;
	margin-top: 38px;

	@media (min-width: 936px) {
		flex-direction: row;
		margin-top: 65px;
	}
}

.center {
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
}

.content-image-one {
	background-image: url('/static/images/section/product-1.png');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 12px;
	height: 206px;
	margin-bottom: 12px;
	position: relative;

	&:hover {
		color: white !important;
		background-color: transparent;
		padding: 17px 29px;

		.text-hover {
			display: block;
			margin-top: 10px;
			z-index: 222;
		}

		.row-hover {
			align-items: center;
			display: flex;
			z-index: 222;
		}

		.title-section-image {
			margin: 0 0 0 11px;
		}

		.opacity-image {
			display: block;
		}

		.icon-line-products {
			height: 36px; 
		}
	}

	@media (min-width: 936px) {
		border-radius: 0;
		height: 428px;
		width: 33.3%;
		z-index: 222;
	}
}

.content-image-two {
	background-image: url('/static/images/section/product-2.png');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 12px;
	height: 206px;
	margin-bottom: 12px;
	position: relative;

	&:hover {
		color: white !important;
		padding: 17px 29px;

		.text-hover {
			display: block;
			margin-top: 10px;
			z-index: 222;
		}

		.icon-line-products {
			height: 36px; 
		}

		.row-hover {
			align-items: center;
			display: flex;
			z-index: 222;
		}

		.title-section-image {
			margin: 0 0 0 11px;
		}

		.opacity-image {
			display: block;
		}
	}

	@media (min-width: 936px) {
		border-radius: 0;
		height: 428px;
		width: 33.3%;	
	}
}

.content-image-three {
	background-image: url('/static/images/section/product-3.png');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 12px;
	height: 206px;
	position: relative;

	&:hover {
		color: white !important;
		background-color: transparent;
		padding: 17px 29px;

		.text-hover {
			display: block;
			margin-top: 10px;
			z-index: 222;
		}

		.icon-line-products {
			height: 36px; 
		}

		.row-hover {
			align-items: center;
			display: flex;
			z-index: 222;
		}

		.title-section-image {
			margin: 0 0 0 11px;
		}

		.opacity-image {
			display: block;
		}
	}

	@media (min-width: 936px) {
		border-radius: 0;
		height: 428px;
		width: 33.3%;	
	}
}

.title-section-image {
	color: white;
	font-size: 20px;

	@media (min-width: 936px) {
		font-size: 30px;	
	}
}

.text-hover {
	display: none;
	font-size: 12px;
	line-height: 18px;
	text-align: center;
}

.opacity-image {
	background-color: rgba(0, 0, 0, 0.5);
	display: none;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}
</style>