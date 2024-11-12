import { API_BASE_URL } from "../constants/constants";

// Function to get all expenses from the backend. Method: GET
export const sendBudget = async (amount:number): Promise<{amount: number}> => {
	const response = await fetch(`${API_BASE_URL}/budget`, {
    	method: "PUT",
    	headers: {
        	"Content-Type": "application/json",
    	},
    	body: JSON.stringify({amount}),
	});
	if (!response.ok) {
    	throw new Error("Failed to set budget");
	}
	return response.json();
};