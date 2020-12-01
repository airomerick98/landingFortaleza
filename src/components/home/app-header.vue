<template>
	<v-layout wrap class="app-header">
		<div class="app-header-container">
			<div class="app-header-container-menu">
				<a href="/">
					<img src="/static/images/icons/logo-fortaleza.svg" alt="logo" class="logo-fortaleza">
				</a>
				<div v-if="open" class="app-header-container-column">
					<div v-for="(i, index) in $t('links')" :key="index">
						<button
							class="app-header-container-menu-item"
							type="button"
						>
							{{i.name}}
						</button>
					</div>
						<!-- <button
							class="app-header-container-menu-item"
							type="button"
						>
							NOSOTROS
						</button>
						<button
							class="app-header-container-menu-item"
							type="button"
						>
							CALIDAD
						</button>
						<button
							class="app-header-container-menu-item"
							type="button"
						>
							PRODUCTOS
						</button>
						<button
							class="app-header-container-menu-item"
							type="button"
						>
							MERCADOS
						</button>
						<button
							class="app-header-container-menu-item"
							type="button"
						>
							CONTACTO
						</button> -->
				</div>
			</div>
			<div class="br-desktop app-header-container-button">
				<button type="button" @click="toogleMenu" class="app-header-button">
				<img
					v-if="open"
					src="/static/images/icons/close.svg"
					alt="boton para cerrar menu"
					height="15">
					<img
					v-else
					src="/static/images/icons/sidebar.svg"
					alt="boton para abrir menu"
					height="15">
				</button>
			</div>
			<div>
				<v-layout row align-center>
					<v-flex>
					<v-layout row align-center class="menu-header">
					<v-flex v-for="(item, index) in $t('links')" class="px-1 width-desktop" :key="index">
						<a :href="item.link" class="link-header">
							{{item.name}}
						</a>
					</v-flex>
				</v-layout>
				</v-flex>
				<v-flex xs8>
					<v-select
						class="input-component br-mobile "
						v-model="country"
						item-text="value"
						item-value="name"
						:items="languages"
						hide-details
						single-line
					>
						<template slot="selection" slot-scope="data">
							<button type="button" @click="setLocale(data.item.lan)">
								<flag :iso="data.item.icon"></flag>
								<span>{{data.item.name}}</span>
							</button>
						</template>
						<template slot="item" slot-scope="data">
							<div>
								<button button @click="setLocale(data.item.lan)">
									<flag :iso="data.item.icon"></flag>
									<span class="ml-2">{{data.item.name}}</span>
								</button>
							</div>
						</template>
					</v-select>
				</v-flex>
				</v-layout>
			</div>
			<!-- <div>
				<a href="#" @click="setLocale('es')"><flag iso="pe"></flag></a>
				<a href="#" @click="setLocale('en')"><flag iso="us"></flag></a>
			</div> -->
		</div>
		<!-- <v-flex xs12 align-center md3 lg4 sm2>
			<img src="/static/images/icons/logo-fortaleza.svg" alt="logo" class="logo-fortaleza">
		</v-flex> -->
		<!-- <v-flex d-flex xs12 md9 lg8 align-center class="menu-container">
			<v-layout align-center wrap class="menu-header">
				<v-flex v-for="(item, index) in links" :key="index">
					<a href="" class="link-header">
						{{item.name}}
					</a>
				</v-flex>
			</v-layout>
		</v-flex>	 -->
	</v-layout>
</template>

<script>
function created() {
	this.country = this.languages[0].value;
}

function toogleMenu() {
	this.open = !this.open;
}

function setLocale(locale) {
	// import(`./langs/${local}.json`).then((msgs) => {
	// 	this.$i18n.setLocaleMessage(locale, msgs);
	// 	this.$i18n.locale = locale;
	// });
	this.$i18n.locale = locale;
}

function data() {
	return {
		country: null,
		open: false,
		languages: [
			{
				id: 1,
				name: 'Español',
				lan: 'es',
				icon: 'pe',
				value: 'Español',
			},
			{
				id: 2,
				name: 'English',
				lan: 'en',
				icon: 'us',
				value: 'English',
			},
		],
	};
}

export default {
	name: 'app-header',
	created,
	data,
	methods: {
		setLocale,
		toogleMenu,
	},
};
</script>

<style lang="scss" scoped>
.link-header {
	color: #585858;
	font-size: 14px;
	font-weight: 500;
	outline: none;
	text-decoration: none;

	&:hover {
		color: #41aa36;
	}
}

.logo-fortaleza {
	height: 36px;

	@media (min-width: 936px) {
		height: 46px;
	}
}

.menu-header {
	@media (max-width: 936px) {
		display: none;
	}
}

.app-header {
		background-color: color(white);
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
		height: 54px;
		padding: 11px 17px;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 1000;

		@media (min-width: 936px) {
			height: 97px;
			padding: 27px 7%;
		}

		@media (min-width: 1204px) {
			padding: 27px 10%;
		}

		&-logo {
			height: 26px;

			@media (min-width: 936px) {
				height: 42px;
			}
		}

		&-container {
			align-items: center;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			margin: 0 auto;
			width: 100%;

			&-column {
				background-color: color(white);
				height: calc(100vh - 56px);
				left: 0;
				padding: 0px 15px;
				position: absolute;
				top: 54px;
				width: 100%;

				@media (min-width: 936px) {
					align-items: flex-start;
					background-color: transparent;
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					height: initial;
					justify-content: space-between;
					margin: 0 auto;
					max-width: 100%;
					right: 0;
					top: auto;
				}

				.leftside,
				.rightside {
					display: flex;
					flex-direction: column;
					flex-wrap: wrap;

					@media (min-width: 936px) {
						align-items: flex-start;
						flex-direction: row;
						justify-content: space-around;
						max-width: calc(50% - 126px);
						width: 100%;
					}
				}

				.top-buttons {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					padding: 15px 0px 25px;
					justify-content: space-between;

					.button-menu {
						border: 1px solid color(primary);
						font-family: font(bold);
						font-size: size(small);
						height: 40px;
						text-transform: uppercase;
						width: 48%;

						&.signin {
							background-color: color(primary);
							color: color(white);
						}

						&.signup {
							color: color(primary);
							margin-right: 11px;
						}

						@media (min-width: 425px) {
							width: 160px;
						}
					}

					@media (min-width: 425px) {
						justify-content: flex-start;
					}

					@media (min-width: 936px) {
						display: none;
					}
				}
			}

			&-menu {

				@media (max-width: 936px) {
					width: 50%;
				}
				&-item {
					border-bottom: 1px solid #f6f3f3;
					color: color(gray);
					font-family: font(regular);
					font-size: size(medium);
					text-align: left;
					padding: 18px 0px;
					width: 100%;

					&:first-child {
						border-top: 1px solid #f6f3f3;
					}

					@media (min-width: 936px) {
						border-bottom: 2px solid transparent;
						border-top: 0px;
						font-family: font(din-bold);
						font-size: size(medium18);
						letter-spacing: -0.36px;
						padding: 0px 0px 3px;
						text-transform: uppercase;
						width: auto;
					}

					&.active {
						color: color(secondary);
						font-family: font(bold);

						@media (min-width: 936px) {
							border-bottom: 2px solid color(gray);
							color: color(gray);
							font-family: font(din-bold);
						}
					}
				}

				@media (min-width: 936px) {
					align-items: center;
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					justify-content: center;
					// margin: 0 auto;
					position: relative;
					// width: 96%;
				}

				// @media (min-width: 1200px) {
				// 	max-width: 1080px;
				// 	width: 100%;
				// }
			}
		}
	}

	@media (max-width: 936px) {
		.app-header-container-button {
			width: 50%;
			text-align: right;
		}
	}

	.input-component {
		background-color: white;
		border: 1px solid #66cc33;
		border-radius: 31.5px;
		color: #41aa36;
		font-size: 14px;
		font-weight: 600;
		height: 40px;
		padding: 0 0 0 15px;
		width: 100%;

		&:focus {
			outline: 0px;
		}

		@media (max-width: 936px) {
			border-radius: 3px;
			height: 50px;
		}
	}

	.width-desktop {
		@media (min-width: 936px) {
			width: 100px;
		}
	}
</style>