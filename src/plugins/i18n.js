
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
					link: '#banner-home',
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
					name: 'CONTACTO',
					link: '#contact',
				},
			],
			banners: [
				{
					id: 1,
					url: '/static/images/banners/image-banner-one.jpg',
					textBold: 'DEL CAMPO',
					text: 'A TU MESA',
				},
				{
					id: 2,
					url: '/static/images/banners/image-banner-two.jpg',
					textBold: 'COMERCIALIZAMOS',
					text: 'LAS MEJORES FRUTAS',
				},
				{
					id: 3,
					textBold: 'COMERCIALIZAMOS',
					text: 'LOS MEJORES ESPARRAGOS',
					url: '/static/images/banners/image-banner-three.jpg',
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
			titleProduts: 'PRODUCTOS',
			titleEs: 'ESPÁRRAGO',
			titleEsGreen: 'VERDE',
			titlePres: 'Presentación:',
			listPresents: [
				{
					id: 1,
					name: 'Vidrio',
					icon: '/static/images/icons/icon-present-one-es.svg',
				},
				{
					id: 2,
					name: 'Lata',
					icon: '/static/images/icons/icon-present-two-es.svg',
				},
				{
					id: 3,
					name: 'Marca Privada',
					icon: '/static/images/icons/icon-present-three-es.svg',
				},
			],
			listDisp: [
				{
					id: 1,
					name: 'Fresco',
					icon: '/static/images/icons/icon-product-one.svg',
				},
				{
					id: 2,
					name: 'Congelados',
					icon: '/static/images/icons/icon-product-two-es.svg',
				},
				{
					id: 3,
					name: 'Conservas',
					icon: '/static/images/icons/icon-three-es.svg',
				},
			],
			titleDis: 'Disponible',
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
			imageDesktopMarket: '/static/images/banners/mapa-market.png',
			descriptionMarket: 'Somos socios estratégicos de las marcas de alimentos y supermercados más exigentes del mundo. Hemos estado cultivando relaciones comerciales a largo plazo basadas en la competitividad de nuestro equipo de trabajo, nuestro producto de calidad y la sostenibilidad de nuestro negocio.',
			titleContact: 'CONTÁCTANOS',
			placeholderName: 'Nombre *',
			placeholderEmail: 'Correo *',
			placeholderPhone: 'Teléfono *',
			placeholderMessage: 'Escribe aquí',
			btnTitleContact: 'Enviar',
			titleFind: 'Encuéntranos',
			titleInformation: 'Información',
			imageMobileMarket: '/static/images/banners/section-market-mobile.png',
			linksFooter: [
				{
					id: 1,
					name: 'Inicio',
					link: '#banner-home',
				},
				{
					id: 2,
					name: 'Nosotros',
					link: '#contact-us',
				},
				{
					id: 3,
					name: 'Calidad',
					link: '#quality',
				},
				{
					id: 4,
					name: 'Productos',
					link: '#products',
				},
				{
					id: 5,
					name: 'Mercados',
					link: '#markets',
				},
				{
					id: 6,
					name: 'Contacto',
					link: '#contact',
				},
			],
			titleContactFooter: 'Contáctanos',
		},
		en: {
			headerInit: 'HOME',
			links: [
				{
					id: 1,
					name: 'HOME',
					link: '#banner-home',
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
			lineProducts: [
				{
					id: 1,
					icon: '/static/images/icons/icon-product-one.png',
					urlImage: '/static/images/section/product-1.png',
					title: 'Canned',
					description: 'We make our products complying with the current HACCP system, ensuring safety and sanitary quality, thus offering quality products.',
					listProd: [
						{
							id: 1,
							name: '– Green asparagus',
						},
						{
							id: 2,
							name: '– White Asparagus',
						},
						{
							id: 3,
							name: '– Bell pepper',
						},
						{
							id: 4,
							name: '– Blueberry',
						},
					],
				},
				{
					id: 2,
					title: 'Fresh',
					description: 'We bring to your table our line of fresh products, direct from the field, complying with Good Manufacturing Practices (GMP) and quality.',
					icon: '/static/images/icons/icon-product-two.png',
					urlImage: '/static/images/section/product-2.png',
					listProd: [
						{
							id: 1,
							name: '– Green asparagus',
						},
						{
							id: 2,
							name: '– Passion frui',
						},
						{
							id: 3,
							name: '– Blueberry',
						},
						{
							id: 4,
							name: '– Handle: Kent',
						},
						{
							id: 5,
							name: '– Avocado: Hass and strong',
						},
					],
				},
				{
					id: 3,
					title: 'Frozen',
					description: 'We bring our frozen food line to your table, complying with quality and safety guidelines.',
					urlImage: '/static/images/section/product-3.png',
					icon: '/static/images/icons/icon-product-three.png',
					listProd: [
						{
							id: 1,
							name: '- Green asparagus',
						},
						{
							id: 2,
							name: '– Passion fruit',
						},
						{
							id: 3,
							name: '– Blueberry',
						},
						{
							id: 4,
							name: '– Handle: Kent',
						},
					],
				},
			],
			titleProduts: 'PRODUCTS',
			titleEs: 'ASPARAGUS',
			titleEsGreen: 'GREEN',
			titlePres: 'Presentation:',
			listPresents: [
				{
					id: 1,
					name: 'Glass',
					icon: '/static/images/icons/icon-present-one-es.svg',
				},
				{
					id: 2,
					name: 'Can',
					icon: '/static/images/icons/icon-present-two-es.svg',
				},
				{
					id: 3,
					name: 'Private Label',
					icon: '/static/images/icons/icon-present-three-es.svg',
				},
			],
			titleDis: 'Available',
			listDisp: [
				{
					id: 1,
					name: 'Fresh',
					icon: '/static/images/icons/icon-product-one.svg',
				},
				{
					id: 2,
					name: 'Frozen',
					icon: '/static/images/icons/icon-product-two-es.svg',
				},
				{
					id: 3,
					name: 'Canned',
					icon: '/static/images/icons/icon-three-es.svg',
				},
			],
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
			imageDesktopMarket: '/static/images/banners/mapa-market-en.png',
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
					link: '#banner-home',
				},
				{
					id: 2,
					name: 'About Us',
					link: '#contact-us',
				},
				{
					id: 3,
					name: 'Quality',
					link: '#quality',
				},
				{
					id: 4,
					name: 'Products',
					link: '#products',
				},
				{
					id: 5,
					name: 'Markets',
					link: '#markets',
				},
				{
					id: 6,
					name: 'Contact Us',
					link: '#contact',
				},
			],
			titleContactFooter: 'Contac Us',
			imageMobileMarket: '/static/images/banners/image-market-mobile-es.png',
		},
	},
});

export { i18n as default };
