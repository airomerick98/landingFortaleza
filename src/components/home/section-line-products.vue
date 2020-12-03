<template>
  <div class="section-line-products">
		<v-flex class="title-line-products bold" text-xs-center>{{$t('titleLineProducts')}}</v-flex>
		<div class="content-image-products">
			<div class="content-image-one center"
			v-for="(item , index) in $t('lineProducts')"
			:key="index"
			:style="`background-image: url(${item.urlImage})`">
				<div class="opacity-image"></div>
				<div class="row-hover">
					<div>
						<img :src="item.icon" alt="icono-primer-producto" class="icon-line-products">
					</div>
					<div>
						<p class="title-section-image bold">{{item.title}}</p>
					</div>
				</div>
				<div class="text-hover">
					{{item.description}}
					<ul class="list-none">
						<li v-for="i in item.listProd" :key="i.id">{{i.name}}</li>
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
						name: '– Espárragos Blancos',
					},
					{
						id: 3,
						name: '– Pimiento Morrón',
					},
					{
						id: 4,
						name: '– Arándano',
					},
				],
			},
			{
				id: 2,
				title: 'Frescos',
				description: 'Llevamos a tu mesa nuestra línea de productos frescos, directos del campo, cumpliendo con las Buenas Prácticas de Manufactura (BPM) y calidad.',
				icon: '/static/images/icons/icon-product-two.png',
				urlImage: '/static/images/section/product-2.png',
				listProd: [
					{
						id: 1,
						name: '– Espárrago verde',
					},
					{
						id: 2,
						name: '– Maracuyá',
					},
					{
						id: 3,
						name: '– Arándano',
					},
					{
						id: 4,
						name: '– Mango: Kent',
					},
					{
						id: 5,
						name: '– Palta: Hass y fuerte',
					},
				],
			},
			{
				id: 3,
				title: 'Congelados',
				description: 'Llevamos a tu mesa nuestra línea de congelados, cumpliendo con los lineamientos de calidad e inocuidad.',
				urlImage: '/static/images/section/product-3.png',
				icon: '/static/images/icons/icon-product-three.png',
				listProd: [
					{
						id: 1,
						name: '– Espárrago verde',
					},
					{
						id: 2,
						name: '– Maracuyá',
					},
					{
						id: 3,
						name: '– Arándano',
					},
					{
						id: 4,
						name: '– Mango: Kent',
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
			z-index: 2;
		}

		.row-hover {
			align-items: center;
			display: flex;
			z-index: 2;
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
		z-index: 2;
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
			z-index: 2;
		}

		.icon-line-products {
			height: 36px; 
		}

		.row-hover {
			align-items: center;
			display: flex;
			z-index: 2;
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
			z-index: 2;
		}

		.icon-line-products {
			height: 36px; 
		}

		.row-hover {
			align-items: center;
			display: flex;
			z-index: 2;
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

	@media (min-width: 936px) {
		font-size: 15px;
	}
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