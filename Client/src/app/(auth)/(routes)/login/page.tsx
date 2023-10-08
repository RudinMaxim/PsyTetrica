import React from 'react';

export default function LoginhPage() {
	return (
		<>
			<div>
				<div>
					<h2>Sign in to your account</h2>
				</div>

				<div>
					<form>
						<div>
							<label htmlFor='email'>Email:</label>
							<div>
								<input
									id='email'
									name='email'
									type='email'
									autoComplete='email'
									required
								/>
							</div>
						</div>

						<div>
							<div>
								<label htmlFor='password'>Password</label>
								<div>
									<a href='#'>Forgot password?</a>
								</div>
							</div>
							<div>
								<input
									id='password'
									name='password'
									type='password'
									autoComplete='current-password'
									required
								/>
							</div>
						</div>

						<div>
							<button type='submit'>Sign in</button>
						</div>
					</form>

					<p>
						Еще не с нами? <a href='#'>давай к нам</a>
					</p>
				</div>
			</div>
		</>
	);
}
