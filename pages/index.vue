<template>
	<div>
		<p>sparvapp</p>
		<form action="/profile" method="post">
			<div>
				<label>Mail:</label>
				<input type="text" name="email"/>
			</div>
			<div>
				<label>Password:</label>
				<input type="password" name="password"/>
			</div>
			<div>
				<input type="submit" value="Log In"/>
			</div>
		</form>
		<hr />
		<h2>REG</h2>
		<form action="http://localhost:4040/register" method="post">
			<div>
				<label>Mail:</label>
				<input type="text" name="email"/>
			</div>
			<div>
				<label>Password:</label>
				<input type="password" name="password"/>
			</div>
			<div>
				<input type="submit" value="Register"/>
			</div>
		</form>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>

</style>
