<template>
	<main class="projects">
		<h2 class="projects__title" id="projects">Projects</h2>
		<div class="projects__container">
			<article class="projects__container--box">
				<h3 class="title">NotesApp</h3>
				<div class="text">
					<p>
						NotesApp is a simple app which allow you to add some notes. Login is neccessary to be able to add some
						notes. For testing purposes you can login with below credentials: test@test.com/test123 or you can create
						you own account register form.
					</p>
					<p>
						Stack which was I used during work on this project is: HTML, CSS, SCSS, RWD, JS, Vue, Pinia Store, Firebase
					</p>
				</div>

				<div class="buttons-box">
					<a href="https://noteapp-d9faf.firebaseapp.com" target="_blank"><button class="live">Live link</button></a>
					<a href="https://github.com/Cymekk/NoteApp" target="_blank"><button class="repo">Repo link</button></a>
				</div>
			</article>

			<article class="projects__container--box">
				<h3 class="title">Calories Calculator</h3>
				<div class="text">
					<p>
						Calories Calculator is a app which help you stay fit and healthy. For testing purposes you can login with
						below credentials: test@test.com/test123 or you can create you own account register form.
					</p>
					<p>
						Stack which was I used during work on this project is: HTML, CSS, SCSS, RWD, JS, Vue, Pinia Store, Firebase
					</p>
				</div>

				<div class="buttons-box">
					<a href="https://calories-calculator-7b223.web.app/" target="_blank"
						><button class="live">Live link</button></a
					>
					<a href="https://github.com/Cymekk/Calories-Calculator" target="_blank"
						><button class="repo">Repo link</button></a
					>
				</div>
			</article>
		</div>
	</main>
</template>
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
	const handleObserver = () => {
		const projects = document.querySelector('.projects')
		const currentSection = window.scrollY

		if (projects.offsetTop <= currentSection + window.innerHeight - 200) {
			projects.classList.add('active')
		} else if (projects.offsetTop <= currentSection + projects.getBoundingClientRect().height) {
			projects.classList.remove('active')
		}
	}

	document.addEventListener('scroll', handleObserver)
})
</script>
<style lang="scss">
.projects {
	width: 100%;
	min-height: 50vh;
	color: #fff;
	opacity: 0;
	transition: opacity 0.5s ease-in;

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
.active {
	opacity: 1;
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
