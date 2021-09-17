<template>
	<div class="default">
		<main class="default__view">
			<Nuxt />
		</main>
		<footer class="default__footer">
			<div class="footer__contact">
				<div class="contact__item" @click="call">
					<fa class="item__icon" icon="phone" />603 792 353
				</div>
				<div class="contact__item" @click="writeMail">
					<fa class="item__icon" icon="envelope" />maliwspaniali@wp.pl
				</div>
			</div>
			<span class="footer__description">Prywatne Przedszkole "Mali Wspaniali" w Częstkowie &copy; 2021</span>
		</footer>
	</div>
</template>

<script>
	export default {
		name: "default",
		methods: {
			call() {
				window.open('tel:603792353')
			},
			writeMail() {
				window.open('mailto:maliwspaniali@wp.pl')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.default {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		.default__view {
			flex-basis: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		.default__footer {
			padding: 20px;
			display: flex;
			flex-direction: column;
			align-items: space-between;
			justify-content: center;
			text-align: center;
			box-shadow:
				75vw -5px 0 $green,
				50vw -5px 0 $blue,
				25vw -5px 0 $yellow,
				0vw -5px 0 $red;
			.footer__description {
				margin-top: 20px;
			}
			.footer__contact {
				width: min(1000px, 100%);
				margin: 0 auto;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-evenly;
				.contact__item {
					text-align: center;
					font-size: 18px;
					font-weight: bold;
					letter-spacing: 1px;
					transition: 0.3s ease;
					margin: 5px;
					.item__icon {
						transition: 0.3s ease;
						margin-right: 10px;
					}
					@media (min-width: 640px) {
						width: 250px;
					}
					@include hover {
						letter-spacing: 1.5px;
						.item__icon {
							transform: scale(1.2) rotate(-5deg);
						}
					}
				}
			}
		}
	}
</style>