import { useEffect, useState } from 'react'
import { Vocabulary } from '../../vocabulary'
import { Login } from '../../login'
import { Button, Checkbox, Form, Input } from 'antd';

const loginValidations = Login?.validations;

function App() {
	const fetchWords = async () => {
		const response = await Vocabulary.list();
		if (!response?.success) {
			console.log("Failed to fetch words")
			return;
		}
		console.log(`Words Fetched: ${response?.data}`);
	}

	const fetchToken = async (queryData) => {
		const response = await Login.post(queryData);
		if (!response?.success) {
			console.log("Failed to fetch token")
			return;
		}
		localStorage.setItem("access", response?.data?.access);
		localStorage.setItem("refresh", response?.data?.refresh);
	}

	const onSubmitFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};

	return (
		<>
			<Form
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{ maxWidth: 600 }}
				initialValues={{ remember: true }}
				onFinish={fetchToken}
				onFinishFailed={onSubmitFailed}
				autoComplete="off"
			>
				<Form.Item
					label="Username"
					name="username"
					rules={loginValidations?.username}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={loginValidations?.password}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item label={null}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</>
	);
}

export default App;