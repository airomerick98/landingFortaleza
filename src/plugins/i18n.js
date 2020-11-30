
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
const i18n = new VueI18n({
	locale: 'es',
	fallbackLocale: 'en',
	messages: {
		es: {
			headerInit: 'INICIO',
			links: [
				{
					id: 1,
					name: 'INICIO',
				},
				{
					id: 2,
					name: 'NOSOTROS',
					link: '#contact-us',
				},
				{
					id: 3,
					name: 'CALIDAD',
					link: '#quality',
				},
				{
					id: 4,
					name: 'PRODUCTOS',
					link: '#products',
				},
				{
					id: 5,
					name: 'MERCADOS',
					link: '#markets',
				},
				{
					id: 6,
					name: 'CONTACTANOS',
					link: '#contact',
				},
			],
			banners: [
				{
					id: 1,
					url: '/static/images/banners/image-banner-one.png',
					textBold: 'DEL CAMPO',
					text: 'A TU MESA',
				},
				{
					id: 2,
					url: '/static/images/banners/image-banner-two.png',
					textBold: 'COMERCIALIZAMOS',
					text: 'LAS MEJORES FRUTAS',
				},
				{
					id: 3,
					textBold: 'COMERCIALIZAMOS',
					text: 'LOS MEJORES ESPARRAGOS',
					url: '/static/images/banners/image-banner-three.png',
				},
			],
			titleContactUs: 'NOSOTROS',
			titleAboutUs: 'QUIENES SOMOS',
			descriptionAboutUs: 'Somos una Compañía Agroindustrial Peruana Sostenible, dedicada al cultivo, procesamiento y exportación de productos de alta calidad, dirigidos hacia los mercados y consumidores más exigentes del mundo.',
			arrayVision: [
				{
					id: 1,
					title: 'MISIÓN',
					description: 'Proveer alimentos nutritivos y naturales bajo los más altos estándares de calidad y sostenibilidad a nuestros clientes y marcas de todo el mundo a través de un servicio eficiente.',
				},
				{
					id: 2,
					title: 'VISIÓN',
					description: 'Ser una de las empresas peruanas líder en la producción de alimentos de calidad premium y la preferida para marcas reconocidas a nivel mundial.',
				},
			],
			titleValue: 'VALORES',
			values: [
				{
					id: 1,
					name: 'Ética',
				},
				{
					id: 2,
					name: 'Integridad',
				},
				{
					id: 3,
					name: 'Creatividad',
				},
				{
					id: 4,
					name: 'Flexibilidad',
				},
				{
					id: 5,
					name: 'Responsabilidad',
				},
			],
			titleCamp: 'CAMPO',
			descriptionCamp: 'Contamos con campos propios de Espárragos para así asegurar el abastecimiento de nuestros clientes. Así mismo, nuestros campos de espárrago (Huaral) son certificados con GLOBAL GAP, siendo uno de los estándares más estrictos de BPA, asegurando productos de calidad.',
			titleProcess: 'PROCESOS',
			descriptionProcess: 'Contamos con una planta de producción en Lima, que cumple con los más altos estándares de calidad y actualmente cuenta con certificaciones vigentes.',
			btnUs: [
				{
					id: 1,
					name: 'NOSOTROS',
				},
				{
					id: 2,
					name: 'MISIÓN Y VISIÓN',
				},
				{
					id: 3,
					name: 'VALORES',
				},
				{
					id: 4,
					name: 'CAMPO',
				},
				{
					id: 5,
					name: 'PLANTA',
				},
			],
			titleQuality: 'CALIDAD',
			titleLineProducts: 'LÍNEA DE PRODUCTOS',
			titleProduts: 'PRODUCTOS',
			btnsProducts: [
				{
					id: 1,
					name: 'ESPARRAGOS VERDES',
				},
				{
					id: 2,
					name: 'ESPARRAGOS BLANCOS',
				},
				{
					id: 3,
					name: 'PIMIENTOS MARRONES',
				},
				{
					id: 4,
					name: 'MARACUYÁ',
				},
				{
					id: 5,
					name: 'ARÁNDANOS',
				},
				{
					id: 6,
					name: 'MANGO',
				},
			],
			titleMarket: 'MERCADOS',
			descriptionMarket: 'Somos socios estratégicos de las marcas de alimentos y supermercados más exigentes del mundo. Hemos estado cultivando relaciones comerciales a largo plazo basadas en la competitividad de nuestro equipo de trabajo, nuestro producto de calidad y la sostenibilidad de nuestro negocio.',
			titleContact: 'CONTÁCTANOS',
			placeholderName: 'Nombre *',
			placeholderEmail: 'Correo *',
			placeholderPhone: 'Teléfono *',
			placeholderMessage: 'Escribe aquí',
			btnTitleContact: 'Enviar',
			titleFind: 'Encuéntranos',
			titleInformation: 'Información',
			linksFooter: [
				{
					id: 1,
					name: 'Inicio',
					link: '',
				},
				{
					id: 2,
					name: 'Nosotros',
				},
				{
					id: 3,
					name: 'Calidad',
				},
				{
					id: 4,
					name: 'Productos',
				},
				{
					id: 5,
					name: 'Mercados',
				},
				{
					id: 6,
					name: 'Contacto',
				},
			],
		},
		en: {
			headerInit: 'HOME',
			links: [
				{
					id: 1,
					name: 'HOME',
				},
				{
					id: 2,
					name: 'ABOUT US',
					link: '#contact-us',
				},
				{
					id: 3,
					name: 'QUALITY',
					link: '#quality',
				},
				{
					id: 4,
					name: 'PRODUCTS',
					link: '#products',
				},
				{
					id: 5,
					name: 'MARKETS',
					link: '#markets',
				},
				{
					id: 6,
					name: 'CONTACT US',
					link: '#contact',
				},
			],
			banners: [
				{
					id: 1,
					url: '/static/images/banners/image-banner-one.png',
					textBold: 'FROM FIELD',
					text: 'TO YOUR TABLE',
				},
				{
					id: 2,
					url: '/static/images/banners/image-banner-two.png',
					textBold: 'WE SELL',
					text: 'THE PREMIUM FRUITS',
				},
				{
					id: 3,
					textBold: 'WE SELL',
					text: 'THE BEST ASPARAGUS',
					url: '/static/images/banners/image-banner-three.png',
				},
			],
			titleContactUs: 'WHO WE ARE',
			titleAboutUs: 'ABOUT US',
			descriptionAboutUs: 'We are a Sustainable Peruvian Agroindustrial Company, dedicated to the cultivation, processing and export of high quality products, aimed at the most demanding markets and consumers in the world.',
			titleValue: 'VALUES',
			values: [
				{
					id: 1,
					name: 'Ethics',
				},
				{
					id: 2,
					name: 'Integrity',
				},
				{
					id: 3,
					name: 'Creativity',
				},
				{
					id: 4,
					name: 'Flexibility',
				},
				{
					id: 5,
					name: 'Responsibility',
				},
			],
			arrayVision: [
				{
					id: 1,
					title: 'MISSION',
					description: 'Provide nutritious and natural foods with high quality and sustainability standards to more demanding customers and brands in the world through efficient service and personalized solutions.',
				},
				{
					id: 2,
					title: 'VISION',
					description: 'Is to establish ourselves as a leading Peruvian company in the production of premium quality food, widely committed to sustainability and preferred by world-renowned brands.',
				},
			],
			titleCamp: 'ABOUT FARMING',
			descriptionCamp: 'We have our own fields of Asparagus to ensure the supply of our customers. Likewise, our asparagus fields (Huaral) are certified with GLOBAL GAP, being one of the strictest GAP standards, ensuring quality products.',
			titleProcess: 'PROCESSES',
			descriptionProcess: 'We have a production facility in Lima, which meets the highest quality standards and currently has current certifications.',
			btnUs: [
				{
					id: 1,
					name: 'ABOUT',
				},
				{
					id: 2,
					name: 'MISIÓN Y VISIÓN',
				},
				{
					id: 3,
					name: 'VALUES',
				},
				{
					id: 4,
					name: 'FIELD',
				},
				{
					id: 5,
					name: 'FACILITY',
				},
			],
			titleQuality: 'QUALITY',
			titleLineProducts: 'OUR PRODUCTS LINE',
			titleProduts: 'PRODUCTS',
			btnsProducts: [
				{
					id: 1,
					name: 'GREEN ASPARAGUS',
				},
				{
					id: 2,
					name: 'WHITE ASPARAGUS',
				},
				{
					id: 3,
					name: 'RED BELL PEPPERS',
				},
				{
					id: 4,
					name: 'PASSION FRUIT',
				},
				{
					id: 5,
					name: 'BLUEBERRY',
				},
				{
					id: 6,
					name: 'MANGO',
				},
			],
			titleMarket: 'MARKETS',
			descriptionMarket: 'We are strategic partners of the most demanding food brands and supermarkets in the world. We have been cultivating long-term business relationships based on the competitiveness of our work team, our quality product and the sustainability of our business.',
			titleContact: 'CONTACT US',
			placeholderName: 'Name *',
			placeholderEmail: 'E-mail*',
			placeholderPhone: 'Phone*',
			placeholderMessage: 'Message',
			btnTitleContact: 'Send',
			titleFind: 'Find Us',
			titleInformation: 'Information',
			linksFooter: [
				{
					id: 1,
					name: 'Home',
					link: '',
				},
				{
					id: 2,
					name: 'About Us',
				},
				{
					id: 3,
					name: 'Quality',
				},
				{
					id: 4,
					name: 'Products',
				},
				{
					id: 5,
					name: 'Markets',
				},
				{
					id: 6,
					name: 'Contact Us',
				},
			],
		},
	},
});

export { i18n as default };
