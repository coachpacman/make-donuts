import axios from 'axios'
import store from 'store'
import * as actions from 'actions'
import { hashHistory } from 'react-router'

axios.defaults.baseURL = 'http://localhost:8001/'

export function getRecipe(id) {
	return axios.get(`recipes/${id}`).then(resp => {
		console.log('getRecipe()', resp.data)
		store.dispatch({
			type: 'GET_RECIPE',
			recipe: resp.data
		})
	})
}

export function getRecipes() {
	return axios.get("recipes").then(resp => {
		console.log("getRecipes()", resp.data)
		store.dispatch({
			type: 'GET_RECIPES',
			recipes: resp.data
		})
	})
}

export function addNewRecipe (newRecipeObj) {
	return axios.post('recipes', newRecipeObj).then (resp => {
		hashHistory.push("/")
	})
}