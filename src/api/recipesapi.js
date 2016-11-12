import axios from 'axios'
import store from 'store'
import * as actions from 'actions'
import { hashHistory } from 'react-router'

axios.defaults.baseURL = 'http://localhost:8001/'

export function getRecipe(id) {
	return axios.get(`recipes/${id}`).then(resp => {
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

export function addRecipe(obj) {
	return axios.post("recipes", obj).then(resp => {
		console.log("API CALL: addRecipe()", resp.data)
		store.dispatch({
			type: 'ADD_RECIPE',
			recipe: resp.data
		})
	})
}

export function getAUIs() {
	return axios.get("auis").then(resp => {
		console.log('getAUIs()',resp.data)
		store.dispatch({
			type: 'GET_AUIS',
			AUIs: resp.data
		})
	})
}

export function getStep(id) {
	return axios.get(`steps?recipeId=${id}`).then(resp => {
		store.dispatch({
			type: 'GET_STEP',
			step: resp.data
		})
	})
}