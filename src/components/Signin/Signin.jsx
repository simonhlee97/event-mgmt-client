// Render Prop
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

export const Signin = () => (
	<div>
		<h1 className="my-2 text-center">Sign in</h1>
		<Formik
			initialValues={{ email: '', password: '' }}
			validate={(values) => {
				const errors = {}
				if (!values.email) {
					errors.email = 'Required'
				} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
					errors.email = 'Invalid email address'
				}
				return errors
			}}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2))
					setSubmitting(false)
				}, 400)
			}}>
			{({ isSubmitting }) => (
				<Form className="text-center">
					<Field type="email" name="email" placeholder="email" />
					<br />
					<ErrorMessage name="email" component="div" />
					<br />
					<Field type="password" name="password" placeholder="password" />
					<br />
					<ErrorMessage name="password" component="div" />
					<br />
					<button className="btn-primary" type="submit" disabled={isSubmitting}>
						SIGN IN
					</button>
					<p>Need to register? Sign up</p>
				</Form>
			)}
		</Formik>
	</div>
)

