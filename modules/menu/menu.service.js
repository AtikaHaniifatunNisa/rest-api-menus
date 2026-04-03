import * as repo from './menu.repository.js'

export const getMenus = async () => repo.getAllMenus()
export const getMenu = async (id) => repo.getMenuById(id)
export const addMenu = async (data) => repo.createMenu(data)
export const editMenu = async (id, data) => repo.updateMenu(id, data)
export const removeMenu = async (id) => repo.deleteMenu(id)