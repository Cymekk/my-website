<template>
	<main class="projects">
		<h2 class="projects__title" id="projects">Projects</h2>
		<div class="projects__container">
			<article class="projects__container--box">
				<h3 class="title">SPR GOKiS Kąty Wrocławskie</h3>
				<div class="text">
					<p>SPR GOKiS Kąty Wrocławskie is a website about handball team from my hometown.</p>
					<p>
						Stack which was I used during work on this project is: HTML, CSS, SCSS, RWD, JS, Vue(Vue router, Vuex
						store).
					</p>
				</div>

				<div class="buttons-box">
					<a href="https://cymekk.github.io/spr/"><button class="live">Live link</button></a>
					<a href="https://github.com/Cymekk/spr"><button class="repo">Repo link</button></a>
				</div>
			</article>

			<article class="projects__container--box">
				<h3 class="title">Wallet - financial manager</h3>
				<div class="text">
					<p>
						Wallet - financial manager is a simple app to manage your finanse. You can provide your incoming and charges
						and App will automatically calculate your balance:
					</p>
					<p>
						Stack which was I used during work on this project is: HTML, CSS, SCSS, RWD JS, Vue(Vue router, Vuex store),
						localStorage.
					</p>
				</div>

				<div class="buttons-box">
					<a href="https://cymekk.github.io/wallet/"><button class="live">Live link</button></a>
					<a href="https://github.com/Cymekk/wallet"><button class="repo">Repo link</button></a>
				</div>
			</article>

			<article class="projects__container--box">
				<h3 class="title">Calories calculator</h3>
				<div class="text">
					<p>
						Calories calculator is a app which will help you stay fit and healthy. At beginning you will need to provide
						your daily caloric needs(two options to select: automatically calculate or enter calories and makros by
						yourselfs). Then you will be able to add products which you have eaten.
					</p>
					<p>
						Stack which was I used during work on this project is: HTML, CSS, SCSS, RWD JS, Vue(Vue router, Vuex store),
						localStorage.
					</p>
				</div>

				<div class="buttons-box">
					<a href="https://cymekk.github.io/kalkulator-kalorii/"><button class="live">Live link</button></a>
					<a href="https://github.com/Cymekk/kalkulator-kalorii"><button class="repo">Repo link</button></a>
				</div>
			</article>
		</div>
	</main>
</template>
<script>
export default {
	name: 'MyProjectCompnent',
}
</script>
<style lang="scss">
.projects {
	width: 100%;
	min-height: 50vh;
	color: #fff;

	&__title {
		text-align: center;
		font-size: 2rem;
		margin-bottom: 2em;
	}

	&__container {
		&--box {
			width: 90%;
			margin: 2em auto 0 auto;
			padding: 2em;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			border: 2px solid #fff;
			border-radius: 10px;

			.title {
				font-size: 1.5rem;
				text-align: center;
			}

			.text {
				font-size: 1rem;

				p {
					margin: 1em 0;
				}
			}

			.buttons-box {
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-evenly;

				a {
					width: 40%;

					button {
						position: relative;
						width: 100%;
						border: none;
						background: none;
						padding: 1em;
						border-radius: 10px;
						font-weight: bold;
						cursor: pointer;
						transition: color 0.3s, bacgrkound-color 0.3s;

						&:hover {
							color: #fff;
						}
					}

					.repo {
						background-color: greenyellow;

						&:hover {
							background-color: green;
						}
					}

					.live {
						background-color: rgb(253, 134, 113);

						&:hover {
							background-color: rgb(175, 61, 40);
						}
					}
				}
			}
		}
	}
}

@media (min-width: 576px) {
	.projects {
		&__container {
			&--box {
				width: 80%;
			}
		}
	}
}
@media (min-width: 768px) {
	.projects {
		&__title {
			font-size: 2rem;
		}

		&__container {
			&--box {
				width: 60%;
			}
		}
	}
}
@media (min-width: 992px) {
	.projects {
		&__title {
			font-size: 2.2rem;
		}

		&__container {
			display: flex;
			flex-direction: row;
			justify-content: center;
			flex-wrap: wrap;
			gap: 2em;
			&--box {
				margin: 0;
				width: 40%;
			}
		}
	}
}
@media (min-width: 1200px) {
	.projects {
		&__title {
			font-size: 2.4rem;
		}

		&__container {
			display: flex;
			flex-direction: row;
			gap: 2em;

			&--box {
				width: 30%;
			}
		}
	}
}
</style>
