import { useEffect, useState } from "react";

function App() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");

	const isOnline = window.navigator.onLine;

	useEffect(() => {
		if (!isOnline) {
			localStorage.setItem(
				`formData: ${email}`,
				JSON.stringify({
					email,
					name,
					address,
				})
			);
		}
	}, [isOnline, email, name, address]);

	useEffect(() => {
		if (isOnline) {
			const localStorageValues = localStorage.getItem(`formData: ${email}`);
			if (localStorageValues) {
				const values = JSON.parse(localStorageValues as string);
				setName(values.name);
				setEmail(values.email);
				setAddress(values.address);
			}
		}
	}, [email, isOnline]);

	useEffect(() => {
		if (!isOnline) {
			alert("You are offline!");
		}
	}, [isOnline]);

	return (
		<div className="w-full flex flex-col items-center justify-center p-4">
			<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="name"
					>
						Name
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="name"
						type="text"
						placeholder="Nome do usuário"
						onChange={(e) => setName(e.target.value)}
            value={name}
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="email"
					>
						E-mail
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="text"
						placeholder="E-mail do usuário"
						onChange={(e) => setEmail(e.target.value)}
            value={email}
					/>
				</div>
				<div className="mb-6">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="address"
					>
						Endereço
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="address"
						type="text"
						placeholder="Endereço"
						onChange={(e) => setAddress(e.target.value)}
            value={address}
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="button"
						onClick={() => alert("Sign In")}
					>
						Sign In
					</button>
				</div>
			</form>
			<p className="text-center text-gray-500 text-xs">
				&copy;2023 Victor Kamei Kay. All rights reserved.
			</p>
		</div>
	);
}

export default App;
